import React, { Component } from 'react'

import PropTypes from 'prop-types'
import { Modal, GenericButton } from '../../ub-components'

import './styles/modal.css'

class SingleInputModal extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const {
      inputArray,
      onClose,
      label,
      className,
      selectedArray,
    } = this.props

    return (
      <Modal
        isDismisable = { true }
        onClose = { onClose }
      >
        <center>
          <h3>{label}</h3>
        </center>
          <br/>
        {
          inputArray.length !== 0 &&
          inputArray.map((inputs, key) => (
            <GenericButton
              className = { 'single-input-modal-button' }
              key = { key }
              onClick = { () => selectedArray(inputs.id, inputs.name) }
              text = { inputs.name }
            />
          ))
        }
      </Modal>
    )
  }
}

SingleInputModal.propTypes = {
  label : PropTypes.string,
  onClose : PropTypes.func,
  selectedArray : PropTypes.func,
  inputArray : PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.shape({
        name : PropTypes.string,
        id : PropTypes.number
      })
    )
  ),
}

SingleInputModal.defaultProps = {
  label : 'Single Input Modal',
  inputArray : [],
}

export default SingleInputModal
