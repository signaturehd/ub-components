import React from 'react'
import { Switch, Route } from 'react-router-dom'
import BaseMVPView from '../common/base/BaseMVPView'

import ConnectView from '../../utils/ConnectView'

import BenefitsPartial from '../benefits/BenefitsPartial'
import Presenter from './presenter/DrawerPresenter'
import {SideBar} from '../../ub-components/SideBar/'
import {AppBar} from '../../ub-components/AppBar/'
import { GenericButton } from '../../ub-components/UButton/'
import './styles/styles.css'

class DrawerView extends BaseMVPView {

  constructor (props) {
    super(props)
    console.log({props})
  }


  render () {
    //TODO render tru react router each partial page, (profile, settings, benefits, etc)
    return (
      <div class="container">
         <AppBar>
         </AppBar>
       <nav>
         <SideBar>
            <lu className = {'module-list'}>
              <li  ClassName = {'module-item'} ></li>
            </lu>
         </SideBar>
       </nav>
       <main>
         <div className = { 'container-box' }>
           <div className = { 'card-field' }>
             <article>
                   <GenericButton text="Logout" onClick={ () => this.presenter.logout() }></GenericButton>
                     <Switch>
                       <Route path = '/benefits' render={(props) => {
                         return <BenefitsPartial parent = { this } />
                       }} />
                     </Switch>
             </article>
           </div>
         </div>
       </main>
  </div>
    )
  }
}
  //#FF8A00
export default ConnectView(DrawerView, Presenter)
