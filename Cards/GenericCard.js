import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './styles/styles.css'

class GenericCard extends Component {
  constructor (props) {
    super(props)
  }

  render () {

    const { onClick, title, description } = this.props

    return (
      <div className = {'card'} onClick = { onClick } >
        <div className = {'card-header'}>
          <h3>Title</h3>
        </div>
        <div className = {'card-body'}>
          <h4>{ title }</h4>
          <h5>{ description }</h5>
        </div>
        <div className = {'card-footer'}>
          <small>Footer</small>
        </div>
      </div>
    )
  }
}

GenericCard.propTypes = {
  onClick : PropTypes.func,
  title : PropTypes.string,
  description : PropTypes.string,
}

GenericCard.defaultProps = {
  title : 'Title',
  description : 'Description'
}

export default GenericCard
