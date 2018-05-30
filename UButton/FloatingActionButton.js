import React , { Component } from 'react'

import './styles/button.css'

class FloatingActionButton extends Component {
  render() {
    const {text, className, onClick} = this.props

    return(
      <button
        className = { `_btn-fab ${className}` }
        onClick = {onClick}
      >
      {text}
      </button>

    )
  }
}

export default FloatingActionButton
