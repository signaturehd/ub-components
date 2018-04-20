import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './styles/pageheaderview.css'

class PageHeaderView extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { onClick, title, description, image } = this.props

    const style = {
      _pageheader : {
        height: '20px',
        color: 'black',
        width: '100%',
        padding: '4%',
        background: '#fefefe',
        boxShadow: '0 1px 4px 0 rgba(0,0,0,0.20)',
      }
    }

    return (
      <div className = { '_page-header-view' } >
        <div style = { style._pageheader }>
          <h5> { title } </h5>
        </div>
      </div>
    )
  }
}

PageHeaderView.propTypes = {
  title : PropTypes.string,
  image : PropTypes.string,
  author : PropTypes.string,
}

PageHeaderView.defaultProps = {
  title : 'NaN',
  image : 'image',
}

export { PageHeaderView }
