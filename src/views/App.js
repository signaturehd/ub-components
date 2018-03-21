import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import LoginView from './login/LoginView'

class App extends Component {

  render() {
    return (
      <div>
        <Switch>
          <Route exact path = '/' render={(props) => {
            return <LoginView container = { this.props.container } />
          }} />
        </Switch>
      </div>
    )
  }
}

export default App
