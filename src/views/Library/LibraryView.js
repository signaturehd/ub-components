import React from 'react'
import { Switch, Route } from 'react-router-dom'


import ConnectView from '../../utils/ConnectView'
import Interactor from '../../domain/interactor/library/GetbooksInteractor'

import Presenter from './presenter/LibraryPresenter'
import BaseMVPView from '../common/base/BaseMVPView'
import ConnectPartial from '../../utils/ConnectPartial'

import { BookCardComponent } from './components'


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

<<<<<<< HEAD
  showBooks (books) {
    
    this.setState({showBooks:books})}
=======
  books (books) {
this.setState({ books })
}
>>>>>>> 49cf8e1339f4db9f2b5b50b3f6d949a1c184608c

  render () {
    const { books } = this.state

    return (
      <div className = {'library-container'}>
        <h2>Books</h2>
        {
<<<<<<< HEAD
          showBooks.map((book, key) => {
            return (
              <GenericCard
                title = { book.title }
                description = { book.Author }
              />
            )
          })
=======
          books.map((book, key) => (
              <BookCardComponent
                title = { book.title }
                author = { book.author }
                image = { book.image }
                description = { book.description }
              />
            ))
>>>>>>> 49cf8e1339f4db9f2b5b50b3f6d949a1c184608c
        }
      </div>
    )
  }
}

export default ConnectPartial(LibraryView, Presenter)


// TODO {book.Title}{book.Author}{book.id}{book.Rating}
