import React , { Component } from 'react'

import './styles/button.css'

export default class GenericButton extends Component {
  render () {
    const { text, onClick, type } = this.props

    return (
      <button
        className = { '_generic-button' }
        onClick = { onClick }
        type = { type }
      >{ text }</button>
    )
  }
}
