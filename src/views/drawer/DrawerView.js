import React from 'react'
import { Switch, Route } from 'react-router-dom'
import BaseMVPView from '../common/base/BaseMVPView'
import ConnectView from '../../utils/ConnectView'
import BenefitsPartial from '../benefits/BenefitsPartial'
import Presenter from './presenter/DrawerPresenter'
import { GenericButton } from '../../ub-components/UButton/'
import { GenericCard } from '../../ub-components/Cards/'
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
            <img src={ require('../../images/logo.png') }
              className= {'_img-ub-logo'}/>
          {this.state.mobileView && <button onClick={this.toggleSideBar}>wad</button>}
          </div>
        {
          this.state.showSidebar &&
      <div class= {'flex-item'} id="canvas-left">
        <div class="fixed">
          <div className = "sidebar">
            Module 1 Insert Here  111111>
          </div>
        </div>
      </div>
        }
        <div className= {'main'}>
          <div className = {'card-frame'}>
            <GenericCard></GenericCard>
              <GenericCard></GenericCard>
                <GenericCard></GenericCard>
                  <GenericCard></GenericCard>
            <GenericButton onClick={ () => this.presenter.logout() }>Logout</GenericButton>
            <Switch>
              <Route path = '/benefits' render={(props) => {
            return <BenefitsPartial parent = { this } />
            }} />
          </Switch>
          </div>
        </div>
      </div>
    )
  }
}
  //#FF8A00
export default ConnectView(DrawerView, Presenter)
