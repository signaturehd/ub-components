import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './styles/styles.css'

class Cards extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    const { onClick, children } = this.props

    return (
      <div className = {'card'} onClick = { onClick }>
        { children }
      </div>
    )
  }
}

Cards.propTypes = {
  children : PropTypes.node,
  onClick : PropTypes.func,
}

Cards.defaultProps = {
  children : null,
}

export default Cards
