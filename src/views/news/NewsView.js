import React from 'react'
import { Switch, Route } from 'react-router-dom'


import ConnectView from '../../utils/ConnectView'
import NewsInteractor from '../../domain/interactor/news/NewsInteractor'

import Presenter from './presenter/NewsPresenter'
import BaseMVPView from '../common/base/BaseMVPView';
import ConnectPartial from '../../utils/ConnectPartial';

import { NewsCardsComponent, NewsModalComponent } from './components'

import './css/styles.css'

class NewsView extends BaseMVPView {
  constructor (props) {
    super(props)
    this.state= {
        news: [],
        show : false
    }
  }

  componentDidMount () {
      this.presenter.getNews()
  }

  news (news) {this.setState({news})}

  render () {
    const { news, show, details } = this.state
    return (
      <div className = {'container'}>
        { super.render() }
        <h2>News Feed</h2>
        <NewsCardsComponent news = { news } onClick = { details => {this.setState({details, show: true})} } />
        {
          show &&
          <NewsModalComponent onClose = { () => this.setState({ show: false })} details = { details } />
        }
      </div>
    )
  }
}

export default ConnectPartial(NewsView, Presenter)
