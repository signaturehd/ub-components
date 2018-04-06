import React, { Component } from 'react'
import PropTypes from 'prop-types'


import './styles/style.css'

class Loader extends Component {
  render () {

    const { width } = this.props

    return(
      <div className = { 'linear-activity' } >
        <div
        className = { width ? 'determinate' : 'indeterminate' }>
        </div>
      </div>
    )
  }
}

Loader.propTypes = {
  width : PropTypes.number,
}

Loader.defaultProps = {
  width : 0
}
export default Loader
