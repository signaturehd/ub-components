import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './styles.css'

class BookCardComponent extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { title, author, description, onClick } = this.props

    return (
      <div className = {'card'} >
        <div className = {'card-header'} >
        </div>
        <div className = {'card-body'}>
          <h5>{ title }</h5>
          <h6>{ author }</h6>
          <p>{ description }</p>
        </div>
        <div className = {'card-footer'}>
          <small>{ author }</small>
          <button onClick = { () => onClick(this.props, false , true) }>Read More</button>
          <button onClick = { () => onClick(this.props, true, false) }>Rate this Book</button>
        </div>
      </div>
    )
  }
}

BookCardComponent.propTypes = {
  onClick : PropTypes.func,
  title : PropTypes.string,
  description : PropTypes.string,
  image : PropTypes.string,
  author : PropTypes.string,
  rating : PropTypes.number,
  id : PropTypes.string
}

BookCardComponent.defaultProps = {
  title : 'title',
  description : 'description',
  author : 'author',
  image : 'image',
  rating : 0,
}


export default BookCardComponent
