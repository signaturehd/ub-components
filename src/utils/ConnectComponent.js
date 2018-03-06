import React, { Component } from 'react'

export default function ConnectComponent (View, Presenter) {
  class ConnectComponent extends Component {
    constructor () {
      super()
    }

    render () {
      const presenter = new Presenter(this.props.container)

      return <View presenter = { presenter } { ...this.props } />
    }
  }

  return ConnectComponent
}
