import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import GlobalContextProvider from './contexts/GlobalContext'

import CharactersView from './views/CharactersView'

export default function Routes () {
  return (
    <Router>
      <GlobalContextProvider>
        <Switch>
          <Route component={CharactersView} exact path="/" />
        </Switch>
      </GlobalContextProvider>
    </Router>
  )
}
