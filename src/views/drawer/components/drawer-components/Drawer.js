import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import './styles/drawer.css'
import Presenter from './presenter/ComponentsPresenter'
import BenefitsPartial from '../../../benefits/BenefitsPartial'
import LibraryView from '../../../Library/LibraryView'
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
          {
            this.props.children
          }
        </div>
      </div>
    )
  }
}
export {Drawer, Presenter}
