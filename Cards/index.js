import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './styles/styles.css'

class GenericCards extends Component {

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

GenericCards.propTypes = {
  children : PropTypes.node,
  onClick : PropTypes.func,
}

GenericCards.defaultProps = {
  children : null,
}

export default GenericCards
