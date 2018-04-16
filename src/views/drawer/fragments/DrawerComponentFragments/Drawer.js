import React, { Component } from 'react'
import PropTypes from 'prop-types'


class Drawer extends Component {

  constructor(props) {
    super(props)
  }

  render () {
    const { onClose, children, fullHeight, width } = this.props

    const modalClass = 'modal' + (fullHeight ? ' full-height' : '')

    return (
    )
  }
}

export default Drawer
