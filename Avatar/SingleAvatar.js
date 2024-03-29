import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './styles/multipleAvatar.css'

class SingleAvatar extends Component {
  constructor (props) {
      super(props)
  }

  randomColor () {
    let setOfLetter = '0123456789ABCDEF'
    let hex = '#'
    for (var i = 0; i < 6; i++) {
      hex += setOfLetter[Math.floor(Math.random() * 16)];
    }
    return hex
  }

  convertInitial (name) {
    const profileInitial = name ? name : 'Empty Empty'
    let words = profileInitial.replace(/^\s+|\s+$/g, '').split(/\s+/g);
    let first = words[0].charAt(0)
    let last = words[words.length - 1].charAt(0)
    let splitUserInitial = first.toUpperCase()+''+last.toUpperCase()

    return splitUserInitial
  }

  isDataURL(s) {
    const regexBase64 = /^\s*data:([a-z]+\/[a-z0-9-+.]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s]*)\s*$/i;
    const regexUrl =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;

    if(regexUrl.test(s) === true || regexBase64.test(s) === true) {
      return true
    } else {
      return false
    }
  }

  render () {
    const {
      initials,
      fontSize,
      backgroundColor,
      width,
      height,
      margin,
      key,
      fontColor,
      borderColor,
      defaultColor
    } = this.props

    return (
      <h4
        key = { key }
        style = {{
          background: defaultColor ? 'black' : this.isDataURL(backgroundColor) ? `url(${backgroundColor})`: this.randomColor(),
          width: width,
          backgroundSize: this.isDataURL(backgroundColor) ? '': 'cover',
          height: height,
          backgroundPosition: 'center',
          borderRadius: '50px',
          color: fontColor,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: margin,
          border: borderColor,
        }}
        className = { `avatar-font${fontSize} avatar-${this.isDataURL(backgroundColor) ? 'base64' : 'text'}-settings` }
        >{ defaultColor ? this.isDataURL(backgroundColor) ? '' : '+'+this.convertInitial(initials): this.isDataURL(backgroundColor) ? '' : this.convertInitial(initials) }</h4>
    )
  }
}

SingleAvatar.propTypes = {
  fontSize: PropTypes.string,
  defaultColor: PropTypes.bool,
  initials: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  backgroundColor: PropTypes.string,
  fontColor: PropTypes.string,
  key: PropTypes.number,
  margin: PropTypes.string,
  borderColor: PropTypes.string,
}

SingleAvatar.defaultProps = {
  fontSize: 10,
  key: 0,
  defaultColor: false,
  initials: 'Empty Empty',
  margin: '0',
  width: '20px',
  height: '20px',
  borderColor: 'none',
  fontColor: '#fff',
}

export default SingleAvatar
