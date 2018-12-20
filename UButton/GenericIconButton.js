import React , { Component } from 'react'

import './styles/button.css'

class GenericIconButton extends Component {
  render () {
    const {
      imageUrl,
      className,
      genericWidth,
      genericHeight,
      backgroundColor,
      onClick
    } = this.props

    const styleImage = {
      spantStyle : {
        backgroundImage : `url(${ imageUrl })`,
        objectFit: 'cover',
        height: `${ genericHeight }`,
        width: `${ genericWidth }`,
      }
    }

    return (
      <button
        style = { {
          backgroundColor : backgroundColor,
        } }
        onClick = { onClick }
        className = { `generic-icon-button ${ className }` }
        >
        <span
          style = { styleImage.spantStyle }/>
      </button>
    )
  }
}

export default GenericIconButton
