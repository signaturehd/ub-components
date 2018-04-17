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
<<<<<<< HEAD
=======
    // TODO render tru react router each partial page, (profile, settings, benefits, etc)
>>>>>>> 1c6826246ce08608eb9de33189a3c0150e6ff637
    return (

      <div>
        <AppBar></AppBar>
        <button onClick={ () => this.presenter.logout() }>Logout</button>
        <Drawer>
        </Drawer>
        <Switch>
<<<<<<< HEAD
          <Route path = '/benefits' render={(props) => {
            return <BenefitsPartial parent = { this } />
          }} />
          <Route path = '/' render={(props) => {
            console.log('showing library')
            return <LibraryView parent = { this } />
          }} />
        </Switch>
=======
          <Route path = '/benefits' render={props => <BenefitsPartial parent = { this } />} />
          <Route path = '/library' render={props => 
             <LibraryView parent = { this } />
          } />
        </Switch>

>>>>>>> 1c6826246ce08608eb9de33189a3c0150e6ff637
      </div>
    )
  }
}
export default ConnectView(DrawerView, Presenter)
