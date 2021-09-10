import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import New from './New'
import Document from './Document'

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/new">
        <New />
      </Route>
      <Route exact path="/:id">
        <Document />
      </Route>
    </Switch>
  )
}

export default App
