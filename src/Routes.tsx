import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import PaginationContextProvider from './contexts/PaginationContext'

import CharactersView from './views/CharactersView'

export default function Routes () {
  return (
    <Router>
      <PaginationContextProvider>
        <Switch>
          <Route component={CharactersView} exact path="/" />
        </Switch>
      </PaginationContextProvider>
    </Router>
  )
}
