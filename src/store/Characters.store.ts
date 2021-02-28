import { MarvelAPIResponse } from './../types/marvel-api-response'
import { AppThunk, AppDispatch } from './index'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import marvelAPI from '../services/marvelAPI'

const characters = createSlice({
  name: 'characters',
  initialState: {
    characters: {} as MarvelAPIResponse,
    actualPage: 1
  },
  reducers: {
    fetchMarvelCharacters (state, action: PayloadAction<MarvelAPIResponse>) {
      state.characters = action.payload
    },
    paginate (state, action) {
      state.actualPage = action.payload
    }
  }
})

export default characters.reducer
export const { fetchMarvelCharacters, paginate } = characters.actions

export function fetchCharacters (page: number): AppThunk {
  return async function (dispatch: AppDispatch) {
    const response = await marvelAPI.get('', {
      params: {
        limit: 10,
        offset: (page - 1) * 10
      }
    })
    console.log(response.data)
    dispatch(fetchMarvelCharacters(response.data))
  }
}
