import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import './styles/drawer.css'
import { GenericButton } from '../../../../ub-components/UButton/'
class Drawer extends Component {
  constructor(props) {
    super(props)
  }
  render() {
  const Module1 = () => {
    return(<h2></h2>)
  }
  const Module2 = () => {
    return(<h2></h2>)
  }
    return (
      <div className = {'_main-content'}>
        <GenericButton
       text = "logout"
       onClick={ () => this.presenter.logout() }>
     </GenericButton>
        <div className = {'_option-components'}>
        </div>
      </div>
    )
  }
}
export {Drawer}
