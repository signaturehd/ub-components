import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './styles/style.css'

class GenericLoader extends Component {
  render () {
    const { show } = this.props

    return (
      <div>
        {
          show &&
          <div className = { 'generic-loader' } >
            <img
              width = { 100 }
              height = { 100 }
              src= { require('../../images/mobileview/loading-gif-150x150(no-bg).gif')  }/>
          </div>
        }
      </div>
    )
  }
}

GenericLoader.propTypes = {
  width : PropTypes.number,
  show : PropTypes.bool,
}

GenericLoader.defaultProps = {
  width : 0,
  show : false,
}
export default GenericLoader
