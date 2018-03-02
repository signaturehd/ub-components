import React from 'react'
import { IndexRoute } from 'react-router'
import { Route } from 'react-router-dom'

import Benefits from './Benefits'

import optical from './optical'

export default () => (
  <Route path='benefits'>
    <IndexRoute component={ Benefits } />
    { optical() }
  </Route>
)
