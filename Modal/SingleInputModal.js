import React, { Component } from 'react'

import PropTypes from 'prop-types'
import { Modal, GenericButton } from '../../ub-components'

import './styles/modal.css'

import './css/modal.css'

class SingleInputModal extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const {
      inputArray,
      onClose,
      label,
<<<<<<< Updated upstream
      className,
=======
>>>>>>> Stashed changes
      selectedArray,
    } = this.props

    return (
      <Modal
        isDismisable = { true }
        onClose = { onClose }
      >
        <center>
          <h2>{label}</h2>
        </center>
<<<<<<< Updated upstream
          <br/>
=======
        <br/>
        <div
          className = { 'select-grid' }
        >
>>>>>>> Stashed changes
        {
          inputArray.length !== 0 &&
          inputArray.map((inputs, key) => (
            <GenericButton
              className = { 'single-input-modal-button' }
              key = { key }
              className = { 'select-button' }
              onClick = { () => selectedArray(inputs.id, inputs.name) }
              text = { inputs.name }
            />
          ))
        }
        </div>
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
        id : PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.number
        ])
      })
    )
  ),
}

SingleInputModal.defaultProps = {
  label : 'Single Input Modal',
  inputArray : [],
}

export default SingleInputModal
