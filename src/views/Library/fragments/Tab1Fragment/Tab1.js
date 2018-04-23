import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './styles.css'

import { BookCardComponent,
  BookRatingModalComponent,
  BookViewModalComponent,
 } from '../../components'

class Tab1 extends Component {
  constructor (props) {
    super(props)
    this.state = {
      rating : false,
      view : false,
      details : null
    }
  }
  render () {
    const { books, details } = this.props
    return (
      <div className = {'library-container'}>
        {
          books.map((book, key) => <BookCardComponent key = { key } onClick = {(details, rating, view) => this.setState({details, rating, view}) } />)
        }

        {
          this.state.rating &&
          <BookRatingModalComponent details = { details } onClose = { () => this.setState({rating : false}) }/>
        }

        {
          this.state.view &&
          <BookViewModalComponent details = { details } onClose = { () => this.setState({view : false}) }/>
        }

      </div>
    )
  }
}

export default Tab1
