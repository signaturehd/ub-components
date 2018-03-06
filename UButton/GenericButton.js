import React , { Component } from 'react'
import 'styles/button.css'


export default class GenericButton extends Component {
  render () {
    const { text } = this.props

    return (
      <button className = { '_button-lg' }>{ text }</button>
    )
  }
}
