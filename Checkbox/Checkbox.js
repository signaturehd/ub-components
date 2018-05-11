import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './styles/styles.css'

class Checkbox extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { label, onChange, checked } = this.props

    return (
      <label className="material-checkbox">
        <input type="checkbox"
          checked= { checked }
          onChange = { onChange }
         />
        <span>{ label }</span>
      </label>
    )
  }
}


Checkbox.propTypes = {
  onChange : PropTypes.func,
  checked : PropTypes.bool,
  label : PropTypes.string,
}

export default Checkbox
