import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Switch, Route, Link } from 'react-router-dom'
import Tab1 from '../../fragments/Tab1Fragment/Tab1'
import Tab2 from '../../fragments/Tab2Fragment/Tab2'
import Tab3 from '../../fragments/Tab3Fragment/Tab3'
import './styles.css'

class BookTabsComponent extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { onTabLink, history , htmlFor, books } = this.props
    return (
    <main>
        <input className = { 'input-tab' } id="tab1" checked  type="radio" name="tabs" />
        <label htmlFor = 'tab1'  > Tab 1</label>

        <input className = { 'input-tab' } id="tab2" type="radio" name="tabs" />
        <label  htmlFor = 'tab2' >Tab 2</label>

        <input className = { 'input-tab' } id="tab3"  type="radio" name="tabs" />
        <label htmlFor = 'tab3' >Tab 3</label>

        <section id="content1">
            <Tab1 books={ books }></Tab1>
        </section>
        <section id="content2">
          <div className = {'library-container'}>
            <Tab2></Tab2>
          </div>
        </section>
        <section  id="content3">
          <div className = {'library-container'}>
            <Tab3></Tab3>
          </div>
        </section>
    </main>
    )
  }
}
export default BookTabsComponent
