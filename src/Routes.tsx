import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import CharactersView from './views/CharactersView'

export default function Routes () {
  return (
    <Router>
      <Switch>
        <Route component={CharactersView} exact path="/" />
      </Switch>
    </Router>
  )
}
