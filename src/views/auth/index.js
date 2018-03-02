import React from 'react'
import { Route } from 'react-router'

import AuthComponent from './AuthComponent'
import benefits from './benefits'

export default () => (
  <Route component={ AuthComponent }>
    { benefits() }
  </Route>
)
