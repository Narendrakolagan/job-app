import {Switch, Route} from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'
import FiltersGroup from './components/FiltersGroup'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound'
import Jobs from './components/Jobs'

import './App.css'

const App = () => (
  <>
    <Switch>
      <Route exact path="/login" component={Login} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/jobs" component={Jobs} />
      <Route component={NotFound} />
    </Switch>
  </>
)

export default App
