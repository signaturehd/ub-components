import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Redirect, Link, Route, Switch } from 'react-router-dom'

class RouterPane extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    const routes = [
      {
        path: '/',
        components: Module1
      },
      {
        path: '/module2',
        components: Module2
      }
    ]
  }
}
export default RouterPane
