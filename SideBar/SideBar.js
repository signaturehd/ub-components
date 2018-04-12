import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './styles/sidebar.css'

class SideBar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { textlink, icon , onClick} = this.props
    const style = {
      moduleStyle : {
        opacity: 0.3,
        color: "#FFFFFF"
      }
    }
    const list =
    [
      {id: 0 , title: "Home"},
      {id: 1 , title: "Inventory"},
      {id: 2 , title: ""},
      {id: 3 , title: ""}
    ]
    return (

      <div className = {'_sidebar-overlay'}>
      <ul className = {'_link-list'}>awdawdad
        <li className = {'_link-item'} onClick = { onClick }>awdawasdasdasads</li>
      </ul>
      </div>
    )
  }
}
export default SideBar
