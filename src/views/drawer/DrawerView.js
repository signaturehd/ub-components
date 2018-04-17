import React from 'react'
import { Switch, Route } from 'react-router-dom'
import BaseMVPView from '../common/base/BaseMVPView'
import ConnectView from '../../utils/ConnectView'
import BenefitsPartial from '../benefits/BenefitsPartial'
import LibraryView from '../Library/LibraryView'

import Presenter from './presenter/DrawerPresenter'
import { GenericButton } from '../../ub-components/UButton/'
import { GenericCard } from '../../ub-components/Cards/'
import { AppBar } from './components/appbar/AppBar'
import { SideBar } from './components/sidebar/SideBar'
import { Drawer } from './components/drawer-components/Drawer'
import './styles/drawerview.css'

class DrawerView extends BaseMVPView {
  constructor (props) {
    super(props)
    }
  render () {
      return (
        <div>
          <AppBar></AppBar>
          <SideBar></SideBar>
          <Drawer></Drawer>
          <div className = {'_main-content'}>
            <Switch>
              <Route path = '/' render={props =>
                <BenefitsPartial parent = { this } />} />
              <Route path = '/library' render={props =>
                <LibraryView parent = { this } />
                   } />
            </Switch>
          </div>
        </div>
    )
  }
}
export default ConnectView(DrawerView, Presenter)
