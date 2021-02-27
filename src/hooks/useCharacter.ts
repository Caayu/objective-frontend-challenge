import { useState } from 'react'
import axios from 'axios'

const URL = 'https://gateway.marvel.com/v1/public/characters'
const TS = '1614382676238'
const API_KEY = 'b15cdc5a47377347ab801525fb4ed751'
const HASH = 'efd72c43137c967b1c91dffe5eac384f'

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
      const response = await axios.get(`${URL}?ts=${TS}&apikey=${API_KEY}&hash=${HASH}&limit=${pageLimit}&offset=${virtualPage}`)
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
