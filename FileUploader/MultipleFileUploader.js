import React, { Component } from 'react'
import GenericFileInput from '../TextBox/GenericFileInput'
import PropTypes from 'prop-types'

class MultipleFileUploader extends Component {
  constructor (props) {
    super(props)
  }

  fileChecker (file) {

  }

  render () {

    const {
      fileArray,
      placeholder,
      setFile
    } = this.props

    return (
      <div>
        <h4>{ placeholder }</h4>
        {
          fileArray.length !== 0 &&
          fileArray.map((attachment, key) => (
            <div key = {key}>
              <GenericFileInput
                text = { attachment.name }
                onChange = { (e) => setFile(e.target.files[0], key)}
              />
            </div>
          ))
        }
      </div>
    )
  }
}

MultipleFileUploader.propTypes = {
  fileArray : PropTypes.arrayOf(
      PropTypes.objectOf(
        PropTypes.shape({
          name : PropTypes.string,
          file : PropTypes.object,
          base64 : PropTypes.string,
        })
      )
  ),
  placeholder : PropTypes.string,
  onResponse : PropTypes.func,
  setFile : PropTypes.func,
}

MultipleFileUploader.defaultProps = {
  fileArray : [],
  placeholder : 'File Attachments',
}

export default MultipleFileUploader
