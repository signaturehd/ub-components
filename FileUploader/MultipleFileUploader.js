import React, { Component } from 'react'
import GenericFileInput from '../TextBox/GenericFileInput'
import PropTypes from 'prop-types'

class MultipleFileUploader extends Component {
  constructor (props) {
    super(props)
      this.state = {
        attachmentArray : []
    }
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
      disabled
    } = this.props

    const {
      attachmentArray
    } = this.props

    return (
      <div>
        <center>
          <h4 className = { 'font-weight-bolder' }>{ placeholder }</h4>
        </center>
        {
          fileArray.length !== 0 &&
          fileArray.map((attachment, key) => (
            <div key = {key}>
              <h2 className = { 'font-size-14px' }>{ attachment.name }</h2>
              <GenericFileInput
                onChange = { (e) => {
                  const updatedAttachment = [...fileArray]
                  const reader = new FileReader()
                  const file = e.target.files[0]
                  reader.onloadend=() => {
                    updatedAttachment[key].base64 = reader.result
                    updatedAttachment[key].file = file
                    this.setState({ fileArray : updatedAttachment })
                  }
                  reader.readAsDataURL(file)
                  }
                }
                disabled = { disabled }
                errorMessage = {
                  attachment &&
                  attachment.file &&
                  this.isValid(attachment.file.type) ? 'Invalid File' : '' }
              />
                <div>
                  <div className={ 'multiple-file-attachment-form' }>
                    <img
                      src={ require('./images/x-circle.png') }
                      className={ 'close-button' }
                      onClick={
                        () => {
                          const updatedAttachment = [...fileArray]
                          updatedAttachment[key].base64 = ''
                          updatedAttachment[key].file = ''
                          this.setState({ fileArray : updatedAttachment })
                        }
                      }
                    />
                  {
                    attachment.base64 ?
                    <div
                      style={ {
                        backgroundImage: `url('${attachment && attachment.base64}')`,
                        width: 'auto',
                        height: '60px',
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                      } }
                    >
                      <h6
                        className={ 'mpl-file-name' }>
                        {
                          attachment &&
                          attachment.file &&
                          this.isValid(attachment.file.type) ?
                              attachment.name : '' }
                      </h6>
                    </div>
                    :
                    <div></div>
                  }
                </div>
              </div>
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
  disabled : PropTypes.bool,
}

MultipleFileUploader.defaultProps = {
  fileArray : [],
  placeholder : 'File Attachments',
}

export default MultipleFileUploader
