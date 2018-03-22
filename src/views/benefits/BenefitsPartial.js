import React from 'react'
import BaseMVPView from '../common/base/BaseMVPView'

import Presenter from './presenter/BenefitsPresenter'

import ConnectPartial from '../../utils/ConnectPartial'

class BenefitsPartial extends BaseMVPView {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        Benefits Partial
      </div>
    )
  }
}

export default ConnectPartial(BenefitsPartial, Presenter)
