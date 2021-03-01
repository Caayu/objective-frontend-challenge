import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

interface MarvelHeroResponse {
  data: {
    results: {
      id: number
      name: string
      description: string
      thumbnail: {
        path: string
        extension: string
      }
      comics: {
        available: number
        items: {
          resourceURI: string
          name: string
        }[]
      }
      events: {
        available: number
        items: {
          resourceURI: string
          name: string
        }[]
      }
      series: {
        available: number
        items: {
          resourceURI: string
          name: string
        }[]
      }
      stories: {
        available: number
        items: {
          resourceURI: string
          name: string
        }[]
      }
    }[]
  }
}

const URL = 'https://gateway.marvel.com/v1/public/characters'
const TS = '1614382676238'
const API_KEY = 'b15cdc5a47377347ab801525fb4ed751'
const HASH = 'efd72c43137c967b1c91dffe5eac384f'

export default function useHero () {
  const [heroID, setHeroID] = useState('')
  const [hero, setHero] = useState({} as MarvelHeroResponse)
  const history = useHistory()

  useEffect(() => {
    const id = history.location.pathname.split('/')
    setHeroID(id[2])
  }, [])

  useEffect(() => {
    fetchHero(heroID)
  }, [heroID])

  async function fetchHero (heroID: string) {
    const response = await axios.get<MarvelHeroResponse>(`${URL}/${heroID}?ts=${TS}&apikey=${API_KEY}&hash=${HASH}`)
    setHero(response.data)
  }

  return {
    hero,
    heroID
  }
}
