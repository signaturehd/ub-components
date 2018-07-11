import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './css/input.css'

class GenericInput extends Component {

  render () {

    const { text, style, hint, value, onChange, disabled, refCallback, errorMessage, type } = this.props

    return (
      <div style={ style } className='input-wrapper'>
        <span className='input-text'>{ text }</span>
        <input
          type={ type }
          ref={ refCallback }
          disabled={ disabled }
          onChange={ onChange }
          value={ value }
          className='input'
          placeholder={ hint } />
        { errorMessage && <span className='error-message'>{ errorMessage }</span> }
      </div>
    )
  }
}

GenericInput.propTypes = {
  refCallback: PropTypes.func,
  type: PropTypes.string,
  onChange: PropTypes.func,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  hint: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  disabled: PropTypes.bool,
  errorMessage: PropTypes.string,
}

export default GenericInput
