import React, { Component } from 'react'
import GenericFileInput from '../TextBox/GenericFileInput'
import PropTypes from 'prop-types'

class MultipleFileUploader extends Component {
  constructor (props) {
    super(props)
  }

  fileChecker (file) {

  }

  isValid (attachment) {
    let file = attachment && attachment.split('/')
    file = file[file.length - 1]
    let isValid
    switch (file) {
      case 'jpg' :
        isValid = true
      case 'png' :
        isValid = true
      case 'jpeg' :
        isValid = true
      case 'pdf' :
        isValid = true
    }
    return isValid ? false : true
  }

  render () {
    const {
      fileArray,
      placeholder,
      setFile,
    } = this.props

    return (
      <div>
        <h4>{ placeholder }</h4>
        {
          fileArray.length !== 0 &&
          fileArray.map((attachment, key) => (
            <div key = {key}>
              <br/>
              <GenericFileInput
                text = { attachment.name }
                onChange = { (e) => setFile(e.target.files[0], key)}
                errorMessage = {
                  attachment &&
                  attachment.file &&
                  this.isValid(attachment.file.type) ? 'Invalid File' : '' }
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
