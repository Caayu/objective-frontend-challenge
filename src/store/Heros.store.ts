import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { AppThunk, AppDispatch } from './index'
import { apiGetRequest } from '../services/marvelAPI'
import { MarvelAPIHerosResponse } from '../services/types'

const heros = createSlice({
  name: 'heros',
  initialState: {
    heros: {} as MarvelAPIHerosResponse,
    actualPage: 1,
    filterHeros: {} as MarvelAPIHerosResponse
  },
  reducers: {
    fetchMarvelHeros (state, action: PayloadAction<MarvelAPIHerosResponse>) {
      state.heros = action.payload
    },
    paginate (state, action) {
      state.actualPage = action.payload
    },
    filterResults (state, action: PayloadAction<MarvelAPIHerosResponse>) {
      state.heros = action.payload
    }
  }
})

export default heros.reducer
export const { fetchMarvelHeros, paginate, filterResults } = heros.actions

export function fetchHeros (page: number): AppThunk {
  return async function (dispatch: AppDispatch) {
    const params = {
      limit: 10,
      offset: (page - 1) * 10
    }
    const response = await apiGetRequest<MarvelAPIHerosResponse>('/v1/public/characters', { params })
    dispatch(fetchMarvelHeros(response))
  }
}

export function fetchFilterHeros (page: number, name: string): AppThunk {
  return async function (dispatch: AppDispatch) {
    const params = {
      limit: 10,
      offset: (page - 1) * 10,
      nameStartsWith: name
    }
    const response = await apiGetRequest<MarvelAPIHerosResponse>('/v1/public/characters', { params })
    dispatch(filterResults(response))
  }
}
