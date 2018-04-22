import React from 'react'
import { Switch, Route } from 'react-router-dom'


import ConnectView from '../../utils/ConnectView'
import Interactor from '../../domain/interactor/library/GetbooksInteractor'

import Presenter from './presenter/LibraryPresenter'
import BaseMVPView from '../common/base/BaseMVPView'
import ConnectPartial from '../../utils/ConnectPartial'

import { BookCardComponent , BookTabsComponent} from './components'

import { GenericButton } from '../../ub-components/UButton'

import './css/styles.css'

class LibraryView extends BaseMVPView {
  constructor (props) {
    super(props)
    this.state = {
        books : []
    }
  }

  componentDidMount () {
      this.presenter.getBooks()
  }

  books (books) {
    this.setState({ books })
    }

  render () {
    const { books, tabs } = this.state
    const style = {
          _pageheader : {
            height: 'auto',
            color: 'black',
            width: 'auto',
            padding: '1%',
            background: '#fefefe',
            boxShadow: '0 0 4px 0 rgba(0,0,0,0.20)'
          }
        }
    return (
      <div>
        <div style = { style._pageheader }>
          <div className = { 'page-header-buttons' }>
              <GenericButton
                text = "logout"
                onClick={ () => this.presenter.logout() }>
              </GenericButton>
          </div>
        </div>
        <h1>Library</h1>
        <div className = { 'tabs-container' }>
          <BookTabsComponent></BookTabsComponent>
        </div>
        <div className = {'library-container'}>
          {
            books.map((book, key) => (
                <BookCardComponent
                  title = { book.title }
                  author = { book.author }
                  image = { book.image }
                  description = { book.description }
                />
              ))
          }
        </div>
      </div>
    )
  }
}

export default ConnectPartial(LibraryView, Presenter)


// TODO {book.Title}{book.Author}{book.id}{book.Rating}
