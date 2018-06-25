import React , { Component } from 'react'
import PropTypes from 'prop-types'
import './styles/textbox.css'

class GenericTextBox extends Component {
  render () {
    const {
      placeholder,
      onChange,
      type,
      maxLength,
      value,
      child,
      onClick,
      className,
      group,
      container
    }=this.props

    return (
      <div className={ container ? container : 'container' }>
        <div className={ group ? group : 'group'  }>
          <input
            type={ type }
            className={ `text ${className}` }
            onChange={ onChange }
            maxLength={ maxLength }
            value={ value }
            onClick={ onClick }
            required
          />
          <span className={ 'text-label' }>{ placeholder }</span>
          <span className={ 'bar' }></span>
        </div>
      </div>
    )
  }
}

GenericTextBox.propTypes={
  placelholder : PropTypes.string,
  onChange : PropTypes.func,
  maxLength : PropTypes.number,
  type : PropTypes.string,
  className : PropTypes.string,
  child : PropTypes.element,
  group : PropTypes.string,
  container : PropTypes.string,
  value : PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
}

GenericTextBox.defaultProps={
  type : 'text',
}

export default GenericTextBox
