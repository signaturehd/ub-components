import React , { Component } from 'react'

import PropTypes from 'prop-types'

import Modal from './Modal'
import GenericTextBox from '../TextBox/GenericTextBox'
import { GenericButton } from '../UButton'


class InputModal extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  render () {
    const { onClose, type, maxLength, onChange, placeholder, onSubmit, isDismisable } = this.props

    return (
      <form onSubmit = { onSubmit }>
        <Modal
          onClose = { onClose }
          isDismisable = { isDismisable }
        >
          <GenericTextBox
            type = { type }
            maxLength = { maxLength }
            onChange = { onChange }
            placeholder = { placeholder }
          />
          <br/>
          <GenericButton
            type = {'submit'}
            text = {'Submit'}
          />
        </Modal>
      </form>
    )
  }
}

InputModal.propTypes = {
  onClose : PropTypes.func,
  onChange : PropTypes.func,
  onSubmit : PropTypes.func,
  type : PropTypes.string,
  placeholder : PropTypes.string,
  maxLength : PropTypes.number,
}

InputModal.defaultProps = {
  placeholder : 'input text',
  type : 'text',
  maxLength : 100
}

export default InputModal
