import React, { Component } from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'

import Module2 from '../../benefits/BenefitsPartial'

class RouterLink extends Component {
    constructor (props) {
        super (props)
    }
    render () {
        return (
            <BrowserRouter>
              <div>
                  <Switch>
                      <Route path = '/module1/new' component = { Module2 } />
                      <Route exact path = '/' component = { Todos } />
                      <Redirect from = '*' to = '/' />
                  </Switch>
              </div>
            </BrowserRouter>
        )
    }
}
export default RouterLink
