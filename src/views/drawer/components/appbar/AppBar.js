import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {SideBar} from '../../components/sidebar/'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

class AppBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mobileview : false,
      sideBar: true
    }
    this.updateViewState = this.updateViewState.bind(this)
    this.toggleSideBar = this.toggleSideBar.bind(this)
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
  render() {
    let containerClass = 'container'
      if (this.state.mobileView) containerClass = containerClass + ' mobileview'
    return (
      <div className = { containerClass }>
        <div className={'header'}>
          <div className = {'icon-header'}>
            <img
              src={ require('../../../../images/logo.png') }
              className= {'_img-ub-logo'}/>
          </div>
          {
            this.state.mobileView &&
          <a className= {'_round-button'}
            onClick={this.toggleSideBar}>
            <img
              src={ require('../../../../images/profile-picture.png')} >
            </img>
          </a>
        }
        </div>
      {
        this.state.showSidebar &&
        <div className= {'flex-item'} id="canvas-left">
          <div className = {'fixed'}>
            <SideBar></SideBar>
          </div>
        </div>
      }
    </div>
    )
  }
}

export {AppBar}
