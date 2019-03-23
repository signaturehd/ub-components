import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './styles/multipleAvatar.css'

import { convertInitial } from '../../utils/initialUtils'
import { randomColor } from '../../utils/randomColorUtils'
import { isDataURL } from '../../utils/base65CheckerUtils'

class MultipleAvatar extends Component {
  constructor (props) {
      super(props)
  }

  checkInitials (data) {
    return convertInitial(data)
  }

  checkUrl (testUrl) {
    const validate = isDataURL(testUrl)
    return validate
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

    return (
      <div
        style = {{
          background: this.checkUrl(backgroundColor) ? `url(${backgroundColor})`: randomColor(),
          width: width,
          backgroundSize: this.checkUrl(backgroundColor) ? '': 'cover',
          height: height,
          backgroundPosition: 'center',
          borderRadius: '50px',
          color: fontColor,
        }}
        className = { `avatar-${this.checkUrl(backgroundColor) ? 'base64' : 'text'}-settings` }>
        <h4 className={ `avatar-font${fontSize}` }> { this.checkUrl(backgroundColor) ? '' : this.checkInitials('test test') }</h4>
      </div>
    )
  }
}

MultipleAvatar.propTypes = {
  fontSize: PropTypes.string,
  initials: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  backgroundColor: PropTypes.string,
  fontColor: PropTypes.string,
  base64 : PropTypes.blob,
}

MultipleAvatar.defaultProps = {
  fontSize: 10,
  initials: 'Empty Empty',
  width: '20px',
  height: '20px',
  fontColor: '#fff',
}

export default MultipleAvatar
