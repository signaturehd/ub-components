import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './styles/multipleAvatar.css'

class MultipleAvatar extends Component {
  constructor (props) {
      super(props)
  }

  render () {
    const { children, className } = this.props

    return (
      <div className={ `header ${className}` }>
      </div>
    )
  }
}

MultipleAvatar.propTypes = {
  className: PropTypes.string,
}

MultipleAvatar.defaultProps = {
}

export default MultipleAvatar
