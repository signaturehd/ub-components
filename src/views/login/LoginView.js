import React, { Component } from 'react'
import ConnectComponent from '../../utils/ConnectComponent'

import LoginPresenter from './presenter/LoginPresenter'

import LoginParam from '../../domain/user/param/LoginParam'

import BaseView from '../common/base/BaseView'

import { GenericButton } from '../../ub-components/UButton/'
import { GenericTextBox } from '../../ub-components/TextBox/'

import './presenter/login.css'

class LoginView extends BaseView {

  constructor(props) {
    super(props)

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
          <GenericTextBox placeholder = { 'Employee Id' } type = { 'text' }/>
          <GenericTextBox placeholder = { 'Password' } type = { 'password' }/>
          <GenericButton text="Hello"
            onClick = { () => this.presenter.login(LoginParam('1700387', 'a@17003877')) }/>
        </div>
      </div>
    )
  }
}

export default ConnectComponent(LoginView, LoginPresenter)
