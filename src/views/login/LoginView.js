import React, { Component } from 'react'
import ConnectView from '../../utils/ConnectView'

import LoginPresenter from './presenter/LoginPresenter'

import BaseView from '../common/base/BaseView'

import { GenericButton } from '../../ub-components/UButton/'
import { GenericTextBox } from '../../ub-components/TextBox/'

import './presenter/login.css'

class LoginView extends BaseView {

  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: '',
    }

    this.presenter = props.presenter
    this.presenter.setView(this)
  }

  render () {
    return (
      <div className = { '_login-grid' }>
        <div className = { '_benefit-frame' }>
          <div className = { '_banner-logo' }></div>
        </div>
        <div className = { '._login-form-grid' }>
          <div className = {'_image-logo'}></div>
          <GenericTextBox
            onChange = { e => this.setState({ username: e.target.value }) }
            placeholder = { 'Employee Id' }
            type = { 'text' }/>
          <GenericTextBox
            onChange = { e => this.setState({ password: e.target.value }) }
            placeholder = { 'Password' }
            type = { 'password' }/>
          <GenericButton text="Hello"
            onClick = { () => this.presenter.login(this.state.username, this.state.password) }/>
        </div>
      </div>
    )
  }
}

export default ConnectView(LoginView, LoginPresenter)
