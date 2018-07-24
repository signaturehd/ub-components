import React, { Component } from 'react'

import PropTypes from 'prop-types'
import Modal from './Modal'
import GenericButton from '../UButton/GenericButton'

class SingleInputModal extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const {
      inputArray,
      onClose,
      label,
    } = this.props

    return (
      <Modal
        isDismisable = { true }
        onClose = { onClose }
      >
        <center>
          <h3>{label}</h3>
        </center>
        {
          inputArray.length !== 0 &&
          inputArray.map((inputs, key) => (
            <GenericButton
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
