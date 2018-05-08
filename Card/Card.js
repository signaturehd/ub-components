import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './styles/styles.css'

class Card extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { onClick, children, className } = this.props

    return (
      <div className = { `card ${className}` } onClick = { onClick }>
        { children }
      </div>
    )
  }
}

Card.propTypes = {
  children : PropTypes.node,
  onClick : PropTypes.func,
  className : PropTypes.string,
}

Card.defaultProps = {
  children : null,
  className : 'card',
}

export default Card
