import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { apiGetRequest } from '../services/marvelAPI'
import { MarvelAPIHeroResponse } from '../services/types'

export default function useHero () {
  const [heroID, setHeroID] = useState('')
  const [hero, setHero] = useState({} as MarvelAPIHeroResponse)
  const history = useHistory()

  useEffect(() => {
    const id = history.location.pathname.split('/')
    setHeroID(id[2])
  }, [])

  useEffect(() => {
    fetchHero(heroID)
  }, [heroID])

  async function fetchHero (heroID: string) {
    const response = await apiGetRequest<MarvelAPIHeroResponse>(`/v1/public/characters/${heroID}`)
    setHero(response)
  }

  return {
    hero,
    heroID
  }
}
