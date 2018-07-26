import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ReactDatePicker from 'react-datepicker'
import moment from 'moment'

import './css/datepicker.css'

class DatePicker extends Component {

  render() {
    const { selected, onChange, text, hint, errorMessage } = this.props

    return (
      <div className='datepicker-container'>
        <span className='datepicker-text'>{ text }</span>
        <ReactDatePicker
            selected={ selected }
            onChange={ onChange }
            placeholderText={ hint }
        />
        <img className='datepicker-icon' src={ require('./images/calendar.png') } />
        { errorMessage && <span className='error-message'>{ errorMessage }</span> }
      </div>
    )
  }
}

DatePicker.propTypes = {
  selected: PropTypes.object,
  onChange: PropTypes.func,
  hint: PropTypes.string,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  errorMessage: PropTypes.string,
}

export default DatePicker
