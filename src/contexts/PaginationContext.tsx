import { FC, createContext, useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import qs from 'query-string'

interface PaginationContextTypes {
  actualPage: number
  setActualPage: (value: number) => void
}

export const PaginationContext = createContext<PaginationContextTypes>({} as PaginationContextTypes)

// eslint-disable-next-line react/prop-types
const PaginationProvider: FC = ({ children }) => {
  const location = useLocation()
  const history = useHistory()

  const [actualPage, setActualPage] = useState(
    getActualPage() || 1
  )

  function getActualPage () {
    const queryParams = qs.parse(location.search)
    const page = queryParams.page

    return page ? Number(page) : undefined
  }

  useEffect(() => {
    const queryParams = qs.parse(location.search)

    history.push({
      search: qs.stringify({
        ...queryParams,
        page: actualPage
      })
    })
  }, [actualPage])

  return (
    <PaginationContext.Provider value={{ actualPage, setActualPage }}>
      {children}
    </PaginationContext.Provider>
  )
}

export default PaginationProvider
