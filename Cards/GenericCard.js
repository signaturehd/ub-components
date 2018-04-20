import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './styles/styles.css'

class GenericCard extends Component {
  constructor (props) {
    super(props)
  }

  successConsole () {
    console.log('success')
  }
  render () {
    const { onClick, title, image } = this.props

    const style = {
      cardStyle : {
        background : `url(${image}) rgba(0,0,0,0.4)`,
        backgroundSize : 'contain',
        height: '200px'
      },
      fontStyle : {
        fontFamily : 'Roboto, sans-serif',
        fontSize : '25px'
      }
    }
    return (
      <div className = {'card'} onClick = { onClick } >
        <div
          style = { style.cardStyle } >
        </div>
        <small style = { style.fontStyle } > { title } </small>
        <div className = {'card-footer'}>
        </div>
      </div>
    )
  }
}

GenericCard.propTypes = {
  onClick : PropTypes.func,
  title : PropTypes.string,
  image : PropTypes.string,
}

GenericCard.defaultProps = {
  title : 'title',
  image : 'image',
}

export default GenericCard
