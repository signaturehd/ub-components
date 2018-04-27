import React , { Component } from 'react'

import PropTypes from 'prop-types'

import Modal from './Modal'
import GenericTextBox from '../TextBox/GenericTextBox'


class InputModal extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  render () {

    const {} = this.props

    return (
      <Modal
        onClose = { onClose }
      >
        <GenericTextBox
          type = { type }
          maxLength = { maxLength }
          onChange = { onChange }
          placeholder = { placeholder }
        />
      </Modal>
    )
  }
}

InputModal.propTypes = {
  onClose : PropTypes.func.important,
  onChange : PropTypes.func.important,
  type : PropTypes.string.important,
  placeholder : PropTypes.string,
  maxLength : PropTypes.number,
}

InputModal.defaultProps = {
  placeholder : 'input text'
  type : 'text',
  maxLength : 100
}
export default InputModal
