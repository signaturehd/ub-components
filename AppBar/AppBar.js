import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './styles/appbar.css'


class SideBar extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <header>
        <img
        src={ require('../../images/logo.png') }
        className= {'_img-ub-logo'}
        />
        <div className = {'_appbar-contents'}>
        </div>
      </header>
    )
  }
}
export default SideBar
