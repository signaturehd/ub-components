import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './styles.css'

class Tab1 extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { title, author, description } = this.props

    return (
      <div className = { 'container-option1' }>
      <h1> Tab 1 </h1>
      </div>
    )
  }
}

Tab1.propTypes = {
  onClick : PropTypes.func,
  title : PropTypes.string,
  description : PropTypes.string,
  image : PropTypes.string,
  author : PropTypes.string,
  rating : PropTypes.number,
  id : PropTypes.string
}

Tab1.defaultProps = {
  title : 'title',
  description : 'description',
  author : 'author',
  image : 'image',
  rating : 0,
}


export default Tab1
