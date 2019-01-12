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
      disabled,
      errorMessage,
      onClick
    } = this.props

    return (
      <div>
        <center>
          <h4>{ placeholder }</h4>
        </center>
        <br/>
        <div className = { 'grid-global-columns-x3' }>
          {
            fileArray.length !== 0 &&
            fileArray.map((attachment, key) => (
              <div
                className = { 'multiple-input-border' }
                key = {key}>
                <h2 className = { 'multiple-attachment-name' }>{ attachment.name }</h2>
                <div className = { 'multiple-grid-image' }>
                  <GenericFileInput
                    keyId = { key }
                    onChange = { (e) => {
                        const updatedAttachment = [...fileArray]
                        const reader = new FileReader()
                        const file = e.target.files[0]
                        reader.onloadend=() => {
                          updatedAttachment[key].base64 = reader.result
                          updatedAttachment[key].file = file
                          setFile(updatedAttachment)
                        }
                        reader.readAsDataURL(file)
                      }
                    }
                    isMessage = { fileArray[key].file }
                    disabled = { disabled }
                    errorMessage = {
                      attachment &&
                      attachment.file &&
                      this.isValid(attachment.file.type)
                       ? 'Invalid File / Attach here the required files (e.g jpg, pdf, png, jpeg)' :
                       errorMessage
                     }
                  />
                  <div>
                    {

                      disabled ?
                      <div></div> :
                      attachment.base64 &&
                      <img
                        src={ require('./images/x-circle.png') }
                        className={ 'close-button' }
                        onClick={
                          () => {
                            const updatedAttachment = [...fileArray]
                            delete updatedAttachment[key].file
                            delete updatedAttachment[key].base64
                            setFile(updatedAttachment)
                            document.getElementById("#file-upload-"+key).type = ''
                            document.getElementById("#file-upload-"+key).type = 'file'
                          }
                        }
                      />
                    }
                  </div>
                </div>
                <div
                  style={ {
                    backgroundImage: `url( ${ attachment.base64 ? attachment.base64 : require('../../images/icons/default_image_loading.png') })`,
                    width: 'auto',
                    height: '100px',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    margin: 'auto',
                    objectFit: 'contain',
                  } }
                />
              </div>
            ))
          }
        </div>
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
          base64 : PropTypes.blob,
        })
      )
  ),
  placeholder : PropTypes.string,
  errorMessage : PropTypes.string,
  onResponse : PropTypes.func,
  setFile : PropTypes.func,
  disabled : PropTypes.bool,
}

MultipleFileUploader.defaultProps = {
  fileArray : [],
  placeholder : 'File Attachments',
}

export default MultipleFileUploader
