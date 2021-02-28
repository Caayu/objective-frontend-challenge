import Routes from './Routes'

import GlobalStyles from './styles/global.styles'
import { useEffect } from 'react'

const App = () => {
  useEffect(() => {
  }, [])

  return (
    <>
      <Routes />
      <GlobalStyles />
    </>
  )
}

export default App
