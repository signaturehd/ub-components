import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './styles.css'

import { BookCardComponent } from '../../components'

class Tab1 extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    const { books } = this.props
    return (
      <div className = { 'container-option1' }>
        {
          books.map((book, key) => {
              return <BookCardComponent/>
          })
        }
      </div>
    )
  }
}

export default Tab1
