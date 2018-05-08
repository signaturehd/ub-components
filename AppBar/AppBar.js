import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './styles/appbar.css'

class AppBar extends Component {

  constructor (props) {
      super(props)
  }

  render () {
    const { children } = this.props

    return (
      <div className={ 'header' }>
        { children }
      </div>
    )
  }
}

AppBar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

AppBar.defaultProps = {
}

export default AppBar
