import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './styles/multipleAvatar.css'

import { convertInitial } from '../../utils/initialUtils'
import { randomColor } from '../../utils/randomColorUtils'

class SingleAvatar extends Component {
  constructor (props) {
      super(props)
  }

  checkInitials (data) {
    return convertInitial(data)
  }

  render () {
    const {
      initials,
      base64,
      fontSize,
      backgroundColor,
      width,
      height,
      fontColor,
    } = this.props
    console.log(backgroundColor)
    return (
      <div
        style = {{
          background: backgroundColor ? backgroundColor: randomColor(),
          width: width,
          height: height,
          borderRadius: '50px',
          color: fontColor,
        }}
        className = { `avatar-${backgroundColor ? 'base64' : 'text'}-settings` }>
        <h4 className={ `avatar-font${fontSize}` }> { backgroundColor ? '' : this.checkInitials('test test') }</h4>
      </div>
    )
  }
}

SingleAvatar.propTypes = {
  fontSize: PropTypes.string,
  initials: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  backgroundColor: PropTypes.string,
  fontColor: PropTypes.string,
  base64 : PropTypes.blob,
}

SingleAvatar.defaultProps = {
  fontSize: 10,
  initials: 'Empty Empty',
  width: '25px',
  height: '25px',
  fontColor: '#fff',
}

export default SingleAvatar
