import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './styles/style.css'

class HorizontalLoader extends Component {
  render () {
    const { width, show } = this.props

    return (
      <div>
        {
          show &&
          <div className = { 'linear-activity' } >
            <div
            className = { width ? 'determinate' : 'indeterminate' }>
            </div>
          </div>
        }
      </div>
    )
  }
}

HorizontalLoader.propTypes = {
  width : PropTypes.number,
  show : PropTypes.bool,
}

HorizontalLoader.defaultProps = {
  width : 0,
  show : false,
}
export default HorizontalLoader
