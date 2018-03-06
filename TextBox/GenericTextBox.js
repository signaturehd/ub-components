import React , { Component } from 'react'
import './styles/textbox.css'


export default class GenericTextBox extends Component {
  render () {
    const { placeholder, onChange, type } = this.props

    return (
      <input type = { type }
        placeholder = { placeholder }
        onChange = { onChange }
        className = {' _generic-textbox '}
      />
    )
  }
}
