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
      }

      componentDidMount (){
          this.presenter.getBooks()
      }
        showBooks(books)
        
        {
            console.log (books)
        }


   
render () {  
    return(<div> set.this.state.</div>)
   
  
    
    }
}
export default ConnectPartial(LibraryView, Presenter)

