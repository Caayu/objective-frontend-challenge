import { useState } from 'react'

import marvelAPI from '../services/marvelAPI'

interface CharactersResponse {
  data: {
    count: number
    limit: number
    offset: number
    total: number
    results: {
      id: number
      name: string
      thumbnail: {
        path: string
        extension: string
      }
      events: {
        items: {
          name: string
        }[]
      }
      series: {
        items: {
          name: string
        }[]
      }
    }[]
  }
}

export function useCharacters (pageLimit: number) {
  const [characters, setCharacters] = useState<CharactersResponse>()

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
