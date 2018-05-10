import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { GenericTextBox } from '../'

import './styles/styles.css'

class FileUploader extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { onChange, value, placeholder } = this.props

    return (
      <div className = {'file-container'}>
        <div className ="file-group">
          <input
            type = { 'file' }
            className = { 'file' }
            onChange = { onChange }
            required
          />
          <span className = { 'file-text' }> { value } </span>
          <span className = { 'file-label' }>{ placeholder }</span>
          <span className ={ 'bar' }></span>
        </div>
      </div>
    )
  }
}

FileUploader.propTypes = {
  value : PropTypes.string,
  onChange : PropTypes.func,
  placeholder : PropTypes.string
}

FileUploader.defaultProps = {
}

export default FileUploader
