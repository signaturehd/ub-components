import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Cards } from '../../../../ub-components/'

import './styles.css'

class NewsCardsComponent extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { news } = this.props
    console.log('cards' + JSON.stringify(news))
    return (
      <div className = {'card-container'}>
        {
          news.map((news, i) => (
            <Cards>
              <div></div>
              <div className = {'card-body'}>
                <h3>{news.Title}</h3>
                <h5 dangerouslySetInnerHTML= {{__html : news.details.replace(/\r\n/g, '<br/>') }} ></h5>
              </div>
              <div className = {'card-footer'}>
                <small><a href = {news.linkUrl}>See More</a></small>
              </div>
            </Cards>
          ))
        }
      </div>
    )
  }
}

NewsCardsComponent.propTypes = {
  news : PropTypes.array.isRequired
}

NewsCardsComponent.defaultProps = {
  news : []
}

export default NewsCardsComponent
