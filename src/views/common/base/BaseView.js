import React, { Component } from 'react'

class BaseView extends Component {
  
  showLoading(message) {
    console.log(`loading: ${message}`)
  }

  hideLoading() {
    console.log('hide loading')
  }
}

export default BaseView
