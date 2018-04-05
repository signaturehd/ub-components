mport React from 'react'
import { Switch, Route } from 'react-router-dom'
import BaseMVPView from '../common/base/BaseMVPView'

import ConnectView from '../../utils/ConnectView'
import Interactor from '../../domain/interactor/library'

import Presenter from './presenter/LibraryPresenter'

class LibraryView extends Baseview {
    constructor(props)
    super (props)
    {
        
    }
   
   
render () {
    <div id="root"></div>
    
    //To retrieve keys from Data
    var keys = Object.keys(empdata.content);
 
    //iterate through the keys to get the underlying values
    var allEmps = keys.map((t) => empdata.content[t].map((e) => (<div><li>{e.id}-{e.Author}-{e.Title}{e.Rating}</li></div>)) );
    return (<div> </div>)
    return (<div>{allEmps}</div>)
    }
}

