import React, {Component} from 'react'
import PropTypes from 'prop-types'

import { Modal } from '../../../../ub-components/'


class BookViewModalComponent extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { onClose } = this.props

    return(
      <Modal
        onClose = { onClose }
      >
        <h1>Viewing</h1>
      </Modal>
    )
  }
}

BookViewModalComponent.propTypes ={
  onClose : PropTypes.func
}

BookViewModalComponent.defaultProps = {

}

export default BookViewModalComponent
