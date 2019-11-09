import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import { Film, PageNotFound } from './routes'

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path='/film/:filmId' component={Film} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
