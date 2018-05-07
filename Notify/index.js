import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './styles/styles.css'

class Notify extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { onClose, message, title, type } = this.props
    return (
      <div className = { 'notify-container' } >
        <div className = { `notify ${type}` }>
          <img
            src={ require('./images/x-circle.png') }
            className='close-button'
            onClick={ onClose }
          />
          <div className = { 'notify-title' }> { title } </div>
          <div className = { 'notify-message' }> { message } </div>
        </div>
      </div>
    )
  }
}

// its not about who is the best,
// its about who is first

Notify.propTypes = {
  onClose : PropTypes.func,
  type : PropTypes.string,
  message : PropTypes.string,
  title : PropTypes.string
}

Notify.defaultProps = {
  message : 'Notify Message',
  title : 'Notify Title',
  open : 'false'
}

export default Notify
