import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ReactDatePicker from 'react-datepicker'
import moment from 'moment'

import './css/datepicker.css'

class DatePicker extends Component {

  render() {
    const {
      selected,
      onChange,
      text,
      hint,
      errorMessage,
      disabled,
      maxDate,
      minDate,
      readOnly
    } = this.props

    return (
      <div className='datepicker-container'>
        <span className='datepicker-text'>{ text }</span>
        <ReactDatePicker
            selected={ selected }
            onChange={ onChange }
            placeholderText={ hint }
            minDate={ minDate }
            maxDate={ maxDate }
            disabled={ disabled }
            readOnly={ readOnly }
        />
        <img className = { 'datepicker-icon' } src = { require('./images/calendar.png') } />
        <div className = { 'date-grid-wrapper' }>
          <div></div>
          {
            errorMessage ?
            <span className = { 'error-message' }>
              { errorMessage }
            </span>
            :
            <span className = { 'error-message-null' }></span>
          }
        </div>
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
  disabled : PropTypes.bool,
  maxDate : PropTypes.object,
  minDate : PropTypes.object,
}

export default DatePicker
