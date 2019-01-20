import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './styles/style.css'

import Modal from '../Modal/Modal'

class GenericLoader extends Component {
  render () {
    const { show, validateLoading, message } = this.props

    return (
      <div>
        {
          show &&
          <Modal
            boxShadow = { 'none' }
            borderRadius = { 'none' }
            backgroundColor = { 'transparent' }
            modalOverlay = { validateLoading && '#fff' }
            >
            <div>
              <div className = { 'generic-loader' } >
                <img
                  width = { 100 }
                  height = { 100 }
                  src= { require('../../images/mobileview/loading-gif-150x150(no-bg).gif')  }/>
              </div>
              <br/>
              <h4>{ message }</h4>
            </div>
          </Modal>
        }
      </div>
    )
  }
}

GenericLoader.propTypes = {
  width : PropTypes.number,
  message : PropTypes.string,
  show : PropTypes.bool,
  validateLoading : PropTypes.bool,
}

GenericLoader.defaultProps = {
  width : 0,
  show : false,
  validateLoading : false,
  message : '',
}
export default GenericLoader
