import React from 'react'
import { Switch, Route } from 'react-router-dom'

import PropTypes from 'prop-types'

import ConnectView from '../../utils/ConnectView'
import NewsInteractor from '../../domain/interactor/news/NewsInteractor'

import Presenter from './presenter/NewsPresenter'
import BaseMVPView from '../common/base/BaseMVPView';
import ConnectPartial from '../../utils/ConnectPartial';

import NewsCardComponent from './components/NewsCardComponent/NewsCardComponent'
import NewsModalComponent from '../newsview/NewsModalComponent'

import './styles/NewsStyles.css'

class NewsView extends BaseMVPView {
  constructor (props) {
    super(props)
    this.state = {
        news: [],
        show : false,
        searchString : "Search News"
    }
    this.updateSearch = this.updateSearch.bind(this)
  }
  updateSearch ()
  {
    this.setState({ searchString: this.refs.search.value.substr( 0 , 20) })
  }
  componentDidMount () {
      this.presenter.getNews()
  }

  news (news) {
  this.setState({news})
  this.refs.search.focus()
}

  render () {
    const { news, show, details } = this.state
    let _news = this.state.news
    let search = this.state.searchString.trim().toLowerCase()
    if (search.length > 0) {
      _news = _news.filter(function(news) {
        return news.title.toLowerCase().match(search);
      });
    }
    return (
      <div className = {'container'}>
        { super.render() }
        <h2>News Feed</h2>
        <input type = 'text'
               className = 'newsSearchBar'
               ref="search"
               value = { this.state.searchString }
               onChange = { this.updateSearch } />
        <div className = {'card-container'}>
        {
          _news.map((news, i) => <NewsCardComponent news = { news } onClick = { details => {this.setState({details, show: true})} } /> )
        }
        </div>
        {
          show &&
          <NewsModalComponent onClose = { () => this.setState({ show: false })} details = { details } />
        }
      </div>
    )
  }
}

export default ConnectPartial(NewsView, Presenter)
