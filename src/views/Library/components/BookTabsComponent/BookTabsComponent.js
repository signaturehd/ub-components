import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Switch, Route } from 'react-router-dom'
import Tab1 from '../Tab1Component/Tab1'
import Tab2 from '../Tab2Component/Tab2'
import Tab3 from '../Tab3Component/Tab3'
import './styles.css'

class BookTabsComponent extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    const { onTabLink, history } = this.props
    return (
    <main>
        <input id="tab1" type="radio" name="tabs"/>
        <label for="tab1"   onClick = { () => onTabLink(history.push('./books/tab1')) } > Tab 1</label>

        <input id="tab2" type="radio" name="tabs" />
        <label for="tab2" onClick = { () => onTabLink(history.push('./books/tab2')) } >Tab 2</label>

        <input id="tab3" type="radio" name="tabs" />
        <label for="tab3">Tab 3</label>

        <section className = { 'section-content' } id="content1">
          <div className = {'library-container'}>
            <Tab1></Tab1>
          </div>
        </section>
        <section className = { 'section-content' }  id="content2">
          <div className = {'library-container'}>
            <Tab2></Tab2>
          </div>
        </section>
        <section className = { 'section-content' }  id="content3">
          <div className = {'library-container'}>
          <Tab3></Tab3>
          </div>
        </section>
    </main>
    )
  }
}
export default BookTabsComponent
