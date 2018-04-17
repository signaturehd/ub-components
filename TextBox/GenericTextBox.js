import React , { Component } from 'react'
import PropTypes from 'prop-types'
import './styles/textbox.css'


class GenericTextBox extends Component {
  render () {
    const { placeholder, onChange, type, maxLength } = this.props

    return (
      <div className = { '_input-container' } >
        <input type = { type }
          placeholder = { placeholder }
          onChange = { onChange }
          maxLength = { maxLength }
          className = {' _generic-textbox '}
        />
      </div>
    )
  }
}

GenericTextBox.propTypes = {
  placelhikder : PropTypes.string,
  onChange : PropTypes.func,
  maxLength : PropTypes.number,
  type : PropTypes.string
}

GenericTextBox.defaultProps = {
  placeholder : 'Generic TextBox',
  type : 'text',
  maxLength : 100
}


export default GenericTextBox
