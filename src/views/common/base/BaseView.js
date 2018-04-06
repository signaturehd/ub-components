import React, { Component } from 'react'

import Loader from '../../../ub-components/Loader'

class BaseView extends Component {

  showLoading(message) {
    console.log(`loading: ${message}`)
  }

  hideLoading() {
    console.log('hide loading')
  }

  render () {
    return (
      <div>
        <Loader/>
      </div>
    )
  }

}

export default BaseView
