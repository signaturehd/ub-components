import React , { Component } from 'react'

export default class GenericSelect extends Component {
  render () {
    const { text } = this.props

    return (
      <button>{ text }</button>
    )
  }
}
