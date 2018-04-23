import React, {Component} from 'react'
import PropTypes from 'prop-types'

import { Modal } from '../../../../ub-components'


class BookRatingModalComponent extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { onClose } = this.props
    return(
      <Modal
        onClose = { onClose }
      >
        <h1>Rating</h1>
      </Modal>
    )
  }
}

BookRatingModalComponent.propTypes ={

}

BookRatingModalComponent.defaultProps = {

}

export default BookRatingModalComponent
