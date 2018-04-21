import React from 'react'
import BaseMVPView from '../common/base/BaseMVPView'

import Presenter from './presenter/BenefitsPresenter'
import './styles/benefits.css'
import ConnectPartial from '../../utils/ConnectPartial'
import { GenericCards } from '../../ub-components/Cards'
import { GenericButton } from '../../ub-components/UButton'

class BenefitsPartial extends BaseMVPView {
  constructor (props) {
    super(props)

    this.state = {
      accountNumber: '',
    }
  }

  showReleasingCenters (releasingCenters) {
    // TODO show to generic multilist dialog
  }

  onValidAccountNumber () {
    // TODO dismiss account number dialog
  }

  render () {
    const { accountNumber } = this.state
    const style = {
          _pageheader : {
            height: 'auto',
            color: 'black',
            width: 'auto',
            padding: '1%',
            background: '#fefefe',
            boxShadow: '0 0 4px 0 rgba(0,0,0,0.20)',
          }
        }
    return (
      <div>
        <div style = { style._pageheader }>
          <div className = { 'page-header-buttons' }>
            <GenericButton
              text = "logout"
              onClick={ () => this.presenter.logout() }>
            </GenericButton>
          </div>
        </div>
        <h1> Benefits</h1>
        <div className = { '_benefits-container' }>
            <GenericCards className = { '_option-1' } ></GenericCards>
            <GenericCards className = { '_option-1' } ></GenericCards>
            <GenericCards className = { '_option-1' } ></GenericCards>
        </div>
      </div>
    )
  }
}

export default ConnectPartial(BenefitsPartial, Presenter)
