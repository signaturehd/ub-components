import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './styles.css'

class BookTabsComponent extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
    <main>
        <input id="tab1" type="radio" name="tabs"  />
        <label for="tab1">Tab 1</label>

        <input id="tab2" type="radio" name="tabs" />
        <label for="tab2">Tab 2</label>

        <input id="tab3" type="radio" name="tabs" />
        <label for="tab3">Tab 3</label>

        <section className = { 'section-content' } id="content1">
          <div className = {'library-container'}>
            <h2>dwada</h2>
          </div>
        </section>
        <section className = { 'section-content' }  id="content2">
          <div className = {'library-container'}>
            <h2>List of Books 2</h2>
          </div>
        </section>
        <section className = { 'section-content' }  id="content3">
          <div className = {'library-container'}>
            <h2>List of Books 3</h2>
          </div>
        </section>
    </main>
    )
  }
}

export default BookTabsComponent
