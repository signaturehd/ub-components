import React , { Component } from 'react'
import PropTypes from 'prop-types'
import './styles/textbox.css'

class GenericTextBox extends Component {
  render () {
    const { placeholder, onChange, type, maxLength, value } = this.props

    return (
      <div className = {'container'}>
        <div className ="group">
          <input
            type = { type }
            className = { 'text' }
            onChange = { onChange }
            maxLength = { maxLength }
            value = { value }
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
  type : PropTypes.string,
  value : PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
}

GenericTextBox.defaultProps = {
  type : 'text',
}

export default GenericTextBox
