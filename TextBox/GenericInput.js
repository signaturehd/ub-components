import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './styles/input.css'

class GenericInput extends Component {

  render () {

    const {
      text,
      style,
      hint,
      value,
      onChange,
      disabled,
      refCallback,
      errorMessage,
      type,
      readOnly,
      onClick
    } = this.props

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
          onClick={ onClick }
          readOnly= {readOnly}
          placeholder={ hint } />
        { errorMessage && <span className='error-message'>{ errorMessage }</span> }
      </div>
    )
  }
}

GenericInput.propTypes = {
  refCallback: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  readOnly: PropTypes.bool,
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
