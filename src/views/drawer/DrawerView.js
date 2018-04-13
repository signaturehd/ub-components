import React from 'react'
import { Switch, Route } from 'react-router-dom'
import BaseMVPView from '../common/base/BaseMVPView'
import ConnectView from '../../utils/ConnectView'
import BenefitsPartial from '../benefits/BenefitsPartial'
import Presenter from './presenter/DrawerPresenter'
import { GenericButton } from '../../ub-components/UButton/'
import { GenericCard } from '../../ub-components/Cards/'
import { SideBar } from '../../ub-components/SideBar/'
import './styles/styles.css'

class DrawerView extends BaseMVPView {

  constructor (props) {
    super(props)
    this.state = {
      mobileview : false,
      sideBar: true
    }
    this.updateViewState = this.updateViewState.bind(this)
    this.toggleSideBar = this.toggleSideBar.bind(this)
    console.log({props})
  }
  updateViewState() {
    if (!this.state.mobileView && document.documentElement.clientWidth < 1024) {
      this.setState({
        mobileView: true,
        showSidebar: false
      });
    } else if (document.documentElement.clientWidth > 1024) {
      this.setState({
        mobileView: false,
        showSidebar: true
      });
    }
  }
  toggleSideBar() {
    this.setState({
      showSidebar: !this.state.showSidebar
    })
  }
  componentWillMount() {
    this.updateViewState()
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateViewState)
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateViewState)
  }
  render () {
    let containerClass = 'container'
      if (this.state.mobileView) containerClass = containerClass + ' mobileview'
      return (
        <div className = { containerClass }>
          <div className={'header'}>
            <img
              src={ require('../../images/logo.png') }
              className= {'_img-ub-logo'}/>
            {this.state.mobileView &&
            <button
              onClick={this.toggleSideBar}>
              <img
                src={ require('../../images/profile-picture.png') }
                className= {'_img-ub-logo'}/>
            </button>}
          </div>
        {
          this.state.showSidebar &&
          <div className= {'flex-item'} id="canvas-left">
            <div className = {'fixed'}>
                <SideBar></SideBar>
            </div>
          </div>
        }
        <div className= {'main'}>
          <div className = {'card-frame'}>
            <GenericCard></GenericCard>
          </div>
          <div className = {'card-frame'}>
            <GenericCard></GenericCard>
          </div>
          <div className = {'card-frame'}>
            <GenericCard></GenericCard>
          </div>
          <div className = {'card-frame'}>
            <GenericCard></GenericCard>
          </div>
          <div className = {'card-frame'}>
            <GenericCard></GenericCard>
          </div>
          <div className = {'card-frame'}>
            <GenericCard></GenericCard>
          </div>
          <div className = {'card-frame'}>
            <GenericCard></GenericCard>
          </div>
          <div className = {'card-frame'}>
            <GenericCard></GenericCard>
          </div>
          <GenericButton onClick={ () => this.presenter.logout() }>Logout</GenericButton>
          <Switch>
            <Route path = '/benefits' render={(props) => {
          return <BenefitsPartial parent = { this } />
          }} />
        </Switch>
        </div>
      </div>
    )
  }
}
  //#FF8A00
export default ConnectView(DrawerView, Presenter)
