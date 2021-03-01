import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Heros from './views/Heros'
import HeroDetail from './views/HeroDetail'

export default function Routes () {
  return (
    <Router>
      <Switch>
        <Route component={Heros} exact path="/heros" />
        <Route component={HeroDetail} exact path="/heros/:id" />
      </Switch>
    </Router>
  )
}
