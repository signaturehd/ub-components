import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './styles/style.css'

import Modal from '../Modal/Modal'

class GenericLoader extends Component {
  render () {
    const { show, validateLoading } = this.props

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
                  width = { 75 }
                  height = { 75 }
                  src= { require('../../images/mobileview/loading-gif-150x150(no-bg).gif')  }/>
              </div>
            </div>
          </Modal>
        }
      </div>
    )
  }
}

GenericLoader.propTypes = {
  width : PropTypes.number,
  show : PropTypes.bool,
  validateLoading : PropTypes.bool,
}

GenericLoader.defaultProps = {
  width : 0,
  show : false,
  validateLoading : false,
}
export default GenericLoader
