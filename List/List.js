import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './styles/list.css'
class List extends Component {
  constructor (props) {
    super(props)
  }

  render () {

    const { title, description } = this.props

    return (
      <div className="valign-wrapper">
        <div className="title">
          { title }
          <br/>
          <span>{ description }</span>
        </div>
      </div>
    )
  }
}

List.propTypes = {
  title : PropTypes.string,
  description : PropTypes.string,
}

export default List
