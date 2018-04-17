import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './styles/sidebar.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class SideBar extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { textlink, icon , onClick, text, link} = this.props
    const modules =
    [
      {id: 0 , title: "Module 1", link: "/"},
      {id: 1 , title: "Module 2", link: "/module2"},
      {id: 2 , title: "Module 3", link: "/module3"},
      {id: 3 , title: "Module 4", link: "/module4"},
    ]
    return (
      <div className = {'_sidebar-overlay'}>
      <ul className = {'_link-list'}>
          {
            modules.map(function(d, idx)
            {
             return (
              <li className = {'_text-link'}
                  onClick = { onClick  }
                  key={idx}>
                  <a>
                    <i className = { '_icon' }></i>
                      <span className = {'_side-text'}>{d.title}</span>
                  </a>
              </li>
              )
           })
         }
      </ul>
      </div>
    )
  }
}
SideBar.propTypes = {
  text : PropTypes.string,
  icon : PropTypes.string,
  link : PropTypes.string,
  onClick : PropTypes.func,
}

SideBar.defaultProps = {
  text : 'title',
  icon : "image",
}
export {SideBar}
