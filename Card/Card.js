import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './styles/styles.css'

class Cards extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { onClick, children, className } = this.props

    return (
      <div className = { className } onClick = { onClick }>
        { children }
      </div>
    )
  }
}

Cards.propTypes = {
  children : PropTypes.node,
  onClick : PropTypes.func,
  className : PropTypes.string,
}

Cards.defaultProps = {
  children : null,
  className : 'card',
}

export default Card
