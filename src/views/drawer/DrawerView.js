import React from 'react'
import { Switch, Route } from 'react-router-dom'
import BaseMVPView from '../common/base/BaseMVPView'
import ConnectView from '../../utils/ConnectView'
import LibraryView from '../Library/LibraryView'
import BenefitsPartial from '../benefits/BenefitsPartial'
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
    let displayShow = 'isActive'
    const display = {display : 'block'}
      return (
        <section className = {'grid-1'}>
          <div className = {'item-1'}>
            <AppBar></AppBar>
          </div>
          <div className = {'displayShow'}
               style = {display}>
            <SideBar
              onNavigaionClick={ path => this.props.history.push(path) }></SideBar>
          </div>
          <div className = {'item-3'}>
            <Drawer>
              <Switch>
                  <Route path = '/benefits' render={(props) => {
                     return <BenefitsPartial parent = { this } { ...props } />
                   }} />
                  <Route path = '/news' render={(props) => {
                     return <News parent = { this } { ...props } />
                   }} />
                 <Route path = '/transaction' render={(props) => {
                     return <Transaction parent = { this } { ...props } />
                   }} />
                 <Route path = '/faqs' render={(props) => {
                     return <Faqs parent = { this } { ...props } />
                   }} />
                 <Route path = '/settings' render={(props) => {
                     return <Settings parent = { this } { ...props } />
                   }} />
                 <Route path = '/books' render={(props) => {
                     return <LibraryView parent = { this } { ...props } />
                   }} />
             </Switch>
            </Drawer>
          </div>
          <div className = {'item-4'}>
            <div className = {'_option-components'}>
            </div>
          </div>
        </section>
    )
  }
}

export default ConnectView(DrawerView, Presenter)
