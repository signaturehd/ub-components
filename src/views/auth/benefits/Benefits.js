import React, { Component, } from 'react'
import { UButton } from '../../../ub-components'

class Benefits extends Component {
  render () {
    return (
      <div>
        Hello Benefits
        <UButton.GenericButton
          text={ 'Custom Button Text' }
        />
      </div>
    )
  }
}

export default Benefits
