import React from 'react'
import { Switch, Route } from 'react-router-dom'
import BaseMVPView from '../common/base/BaseMVPView'
import ConnectView from '../../utils/ConnectView'
import BenefitsPartial from '../benefits/BenefitsPartial'
import Presenter from './presenter/DrawerPresenter'
import { GenericButton } from '../../ub-components/UButton/'
import { GenericCard } from '../../ub-components/Cards/'
import { AppBar } from './components/appbar/AppBar'
import { Drawer } from './components/drawer-components/Drawer'
import './styles/drawerview.css'

import LibraryView  from '../Library/LibraryView'

class DrawerView extends BaseMVPView {
  constructor (props) {
    super(props)
    }
  render () {
    return (

      <div>
        <AppBar></AppBar>
        <button onClick={ () => this.presenter.logout() }>Logout</button>
        <Drawer>
        </Drawer>
        <Switch>
          <Route path = '/benefits' render={(props) => {
            return <BenefitsPartial parent = { this } />
          }} />
          <Route path = '/' render={(props) => {
            console.log('showing library')
            return <LibraryView parent = { this } />
          }} />
        </Switch>
      </div>
    )
  }
}
export default ConnectView(DrawerView, Presenter)
