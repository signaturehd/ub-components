import React from 'react'
import { Switch, Route } from 'react-router-dom'


import ConnectView from '../../utils/ConnectView'
import Interactor from '../../domain/interactor/library/GetbooksInteractor'

import Presenter from './presenter/LibraryPresenter'
import BaseMVPView from '../common/base/BaseMVPView'
import ConnectPartial from '../../utils/ConnectPartial'

import {
    BookCardComponent,
    BookTabsComponent
  } from './components'

import { GenericButton } from '../../ub-components/UButton'

import './css/styles.css'

class LibraryView extends BaseMVPView {
  constructor (props) {
    super(props)
    this.state = {
      books : [],
      showRating : false,
      showBook : false
    }
  }

  componentDidMount () {
      this.presenter.getBooks()
  }

  showBooks (books) {
    this.setState({ books })
  }

  render () {
    const { books, tabs } = this.state
    return (
      <div>
        <div>
          <div className = { 'page-header-buttons' }>
          </div>
        </div>
        <h1>Library</h1>
        <div className = { 'tabs-container' }>
          <BookTabsComponent books={ books } />
        </div>
      </div>
    )
  }
}

export default ConnectPartial(LibraryView, Presenter)


// TODO {book.Title}{book.Author}{book.id}{book.Rating}
