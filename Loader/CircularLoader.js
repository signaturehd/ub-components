import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './styles/style.css'

class CircularLoader extends Component {
  render () {
    const { show } = this.props

    return (
      <div>
        {
          show &&
          <div className = { 'circular-loader' } >
            <span className = {'span-text'}
          </div>
        }
      </div>
    )
  }
}

Loader.propTypes = {
  width : PropTypes.number,
  show : PropTypes.bool,
}

Loader.defaultProps = {
  width : 0,
  show : false,
}
export default Loader
