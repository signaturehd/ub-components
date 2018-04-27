import React , { Component } from 'react'
import PropTypes from 'prop-types'
import './styles/textbox.css'


class GenericTextBox extends Component {
  render () {
    const { placeholder, onChange, type, maxLength } = this.props

    return (
      <div className = {'container'}>
        <div className ="group">
          <input
            type = { type }
            className = { 'text' }
            onChange = { onChange }
            maxLength = { maxLength }
            required
          />
          <span className = { 'text-label' }>{ placeholder }</span>
          <span className ={ 'bar' }></span>
        </div>
      </div>
    )
  }
}

GenericTextBox.propTypes = {
  placelholder : PropTypes.string,
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
