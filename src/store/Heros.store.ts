import { MarvelAPIResponse } from './../types/marvel-api-response'
import { AppThunk, AppDispatch } from './index'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import marvelAPI from '../services/marvelAPI'

const heros = createSlice({
  name: 'heros',
  initialState: {
    heros: {} as MarvelAPIResponse,
    actualPage: 1,
    filterHeros: {} as MarvelAPIResponse
  },
  reducers: {
    fetchMarvelHeros (state, action: PayloadAction<MarvelAPIResponse>) {
      state.heros = action.payload
    },
    paginate (state, action) {
      state.actualPage = action.payload
    },
    filterResults (state, action: PayloadAction<MarvelAPIResponse>) {
      state.heros = action.payload
    }
  }
})

export default heros.reducer
export const { fetchMarvelHeros, paginate, filterResults } = heros.actions

export function fetchHeros (page: number): AppThunk {
  return async function (dispatch: AppDispatch) {
    const response = await marvelAPI.get('', {
      params: {
        limit: 10,
        offset: (page - 1) * 10
      }
    })
    dispatch(fetchMarvelHeros(response.data))
  }
}

export function fetchFilterHeros (page: number, name: string): AppThunk {
  return async function (dispatch: AppDispatch) {
    const response = await marvelAPI.get('', {
      params: {
        limit: 10,
        offset: (page - 1) * 10,
        nameStartsWith: name
      }
    })
    dispatch(filterResults(response.data))
  }
}
