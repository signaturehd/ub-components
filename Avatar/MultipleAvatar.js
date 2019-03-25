import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './styles/multipleAvatar.css'

import { SingleAvatar } from '../'

class MultipleAvatar extends Component {
  constructor (props) {
      super(props)
  }

  render () {
    const {
      initials,
      fontSize,
      backgroundColor,
      width,
      height,
      fontColor,
      avatarList,
      avatarListLength,
      margin,
      borderColor,
      defaultColor,
      avatarCountBool
    } = this.props

    return (
      <div style = {{
          display: 'flex',
        }}>
        {
          avatarList &&
          avatarList.slice(0, avatarListLength).map((avatar, key) =>
            <SingleAvatar
              key = { key }
              width = { height }
              height = { width }
              fontSize = { fontSize }
              initials = { avatar.name }
              margin = { margin }
              fontColor = { fontColor }
              backgroundColor = { avatar.imageUrl }
              borderColor = { borderColor }
            />
          )
        }
        {
          avatarCountBool &&
          <SingleAvatar
            width = { height }
            height = { width }
            fontSize = { fontSize }
            initials = { String(avatarList.length) }
            margin = { margin }
            defaultColor = { true }
            fontColor = { fontColor }
            backgroundColor = { backgroundColor }
            borderColor = { borderColor }
          />
        }
      </div>
    )
  }
}

MultipleAvatar.propTypes = {
  fontSize: PropTypes.string,
  initials: PropTypes.string,
  margin: PropTypes.string,
  avatarCount: PropTypes.number,
  defaultColor: PropTypes.bool,
  borderColorBool: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  backgroundColor: PropTypes.string,
  fontColor: PropTypes.string,
  avatarList : PropTypes.array,
  avatarListLength : PropTypes.number,
}

MultipleAvatar.defaultProps = {
  avatarList: [],
  avatarListLength : 0,
  avatarCountBool : false,
}

export default MultipleAvatar
