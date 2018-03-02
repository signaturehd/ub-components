import React from 'react'
import { Route } from 'react-router-dom'

import BaseComponent from './BaseComponent'
import nonAuth from './nonAuth'
import auth from './auth'

export default () => (
  <Route component={ BaseComponent }>
    { auth() }
    { nonAuth() }
  </Route>
)
