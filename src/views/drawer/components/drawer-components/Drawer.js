import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {GenericCard} from '../../../../ub-components/Cards/'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import './styles/drawer.css'

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
        <div className = {'_option-components'}>
        </div>
        <div className = {'_option-content'}>
        </div>
        <div className = {'_components-content'}>
        </div>
      </div>
    )
  }
}
export {Drawer}
