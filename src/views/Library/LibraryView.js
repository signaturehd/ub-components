import React from 'react'
import { Switch, Route } from 'react-router-dom'


import ConnectView from '../../utils/ConnectView'
import Interactor from '../../domain/interactor/library/GetbooksInteractor'

import Presenter from './presenter/LibraryPresenter'
import BaseMVPView from '../common/base/BaseMVPView';
import ConnectPartial from '../../utils/ConnectPartial';

 class LibraryView extends BaseMVPView {
    constructor (props) {
        super(props)
        this.state= {
            showBooks: []
        }
        
      }

      componentDidMount (){
          this.presenter.getBooks()
      }
        showBooks(books) {this.setState({showBooks:books})
        }


   
render () {  
    const { showBooks } = this.state
    return <div><h3>{ showBooks.map((book, key) => {
        return (
            <div>{book.Title}{book.Author}{book.id}{book.Rating}</div>
             
        )
       
        
    }) }</h3></div>
   
  
    
    }
}
export default ConnectPartial(LibraryView, Presenter)

