import React , { Component } from 'react'

import './styles/button.css'

class GenericButton extends Component {
  render () {
    const { text, onClick, type, disabled } = this.props

    return (
      <button
        className = { '_generic-button' }
        onClick = { onClick }
        disabled = {disabled}
        type = { type }
      >{ text }</button>
    )
  }
}

export default GenericButton
