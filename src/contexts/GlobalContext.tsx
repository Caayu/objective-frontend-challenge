import { FC, createContext, useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import qs from 'query-string'

import { MarvelAPIResponse } from '../types/marvel-api-response'
import marvelAPI from '../services/marvelAPI'

interface GlobalContextTypes {
  actualPage: number
  setActualPage: (value: number) => void
  characters: MarvelAPIResponse
  setCharacters: (characters: MarvelAPIResponse) => void
}

export const GlobalContext = createContext<GlobalContextTypes>({} as GlobalContextTypes)

// eslint-disable-next-line react/prop-types
const GlobalProvider: FC = ({ children }) => {
  const location = useLocation()
  const history = useHistory()

  const [characters, setCharacters] = useState<MarvelAPIResponse>({} as MarvelAPIResponse)
  const [actualPage, setActualPage] = useState(
    getActualPage() || 1
  )

  function getActualPage () {
    const queryParams = qs.parse(location.search)
    const page = queryParams.page

    return page ? Number(page) : undefined
  }

  async function fetchCharacters (page: number) {
    const virtualPage = ((page - 1) * 10) <= 0
      ? 0
      : ((page - 1) * 10)

    try {
      const response = await marvelAPI.get('', {
        params: {
          limit: 10,
          offset: virtualPage
        }
      })
      setCharacters(response.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchCharacters(actualPage)
  }, [actualPage])

  useEffect(() => {
    const queryParams = qs.parse(location.search)

    console.log('MUDOU', characters)

    history.push({
      search: qs.stringify({
        ...queryParams,
        page: actualPage
      })
    })
  }, [actualPage, characters])

  return (
    <GlobalContext.Provider value={{ actualPage, setActualPage, characters, setCharacters }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalProvider
