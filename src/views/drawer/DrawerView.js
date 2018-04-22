import React from 'react'
import { Switch, Route } from 'react-router-dom'
import BaseMVPView from '../common/base/BaseMVPView'
import ConnectView from '../../utils/ConnectView'
import LibraryView from '../library/LibraryView'
import BenefitsPartial from '../benefits/BenefitsPartial'
import Presenter from './presenter/DrawerPresenter'
import { AppBar } from './components/appbar/AppBar'
import { SideBar } from './components/sidebar/SideBar'
import { Drawer } from './components/drawer-components/Drawer'
import './styles/drawerview.css'

class DrawerView extends BaseMVPView {
  constructor (props) {
    super (props)
  }
  render () {
    const displayShow = 'isActive'
    const display = { display : 'block' }
      return (
        <div className = { 'grid-1' }>
          <div className = { '_drawer-header'}>
            <AppBar></AppBar>
          </div>
          <div className = { '_drawer-sidebar' }
               style = { display }>
            <SideBar
              onNavigaionClick = { path => this.props.history.push(path) } ></SideBar>
          </div>
          <div className = { '_drawer-main' }>
            { super.render() }
            <div className = { '_dynamic-component' }>
                <Drawer>
                  <Switch>
                    <Route path = '/benefits' render = { props => <BenefitsPartial parent = { this } { ...props } />}/>
                     <Route path = '/news' render = { props => <NewsView parent = { this } { ...props } />} />
                     <Route path = '/transactions' render = { props => <TransactionView parent = { this } { ...props } />} />
                     <Route path = '/faqs' render = { props => <Faqs parent = { this } { ...props } />} />
                     <Route path = '/settings' render = { props => <Settings parent = { this } { ...props } />} />
                     <Route path = '/books' render = { props => <LibraryView parent = { this } { ...props } />} />
                 </Switch>
                </Drawer>
            </div>
          </div>
        </div>
    )
  }
}

export default ConnectView(DrawerView, Presenter)
