import React, { Component, } from 'react'
import { UButton } from '../../../ub-components'

class Main extends Component {
  render () {
    return (
      <div>
        Hello world
        <UButton.GenericButton
          text={ 'Custom Button Text' }
        />
      </div>
    )
  }
}

export default Main