import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './styles/styles.css'

class GenericCard extends Component {
  constructor (props) {
    super(props)
  }

  render () {

    const { onClick, title, description, image, author, rating } = this.props

    const style = {
      cardStyle : {
        background : `url(${image}) rgba(0,0,0,0.4)`,
        backgroundSize : "contain",
        height: "120px"
      }
    }

    return (
      <div className = {'card'} onClick = { onClick } >
        <div
          style = { style.cardStyle }
        ></div>
        <div className = {'card-body'}>
          <h5>{ title }</h5>
          <h6>{ author }</h6>
          <p>{ description }</p>
        </div>
        <div className = {'card-footer'}>
          <small>{ author }</small>
        </div>
      </div>
    )
  }
}

GenericCard.propTypes = {
  onClick : PropTypes.func,
  title : PropTypes.string,
  description : PropTypes.string,
  image : PropTypes.string,
  author : PropTypes.string,
  rating : PropTypes.number,
}

GenericCard.defaultProps = {
  title : 'title',
  description : 'description',
  author : "author",
  image : "image",
  rating : 1,
}

export default GenericCard
