import { useState } from 'react'

import marvelAPI from '../services/marvelAPI'
import { MarvelAPIResponse } from '../types/marvel-api-response'

export function useCharacters (pageLimit: number) {
  const [characters, setCharacters] = useState<MarvelAPIResponse>()

  async function fetchCharacters (page: number) {
    const virtualPage = ((page - 1) * pageLimit) <= 0
      ? 0
      : ((page - 1) * pageLimit)

    try {
      const response = await marvelAPI.get('', {
        params: {
          limit: pageLimit,
          offset: virtualPage
        }
      })
      setCharacters(response.data)
    } catch (err) {
      console.log(err)
    }
  }

  return {
    fetchCharacters,
    characters
  }
}
