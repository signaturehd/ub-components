import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './styles/sidebar.css'

class SideBar extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { textlink, icon , onClick, text } = this.props
    const modules =
    [
      { id: 0 , title: 'Module 1' },
      { id: 1 , title: 'Module 2' },
      { id: 2 , title: '' },
      { id: 3 , title: '' },
    ]
    return (
      <div className = {'_sidebar-overlay'}>
        <ul className = {'_link-list'}>
            {
              modules.map((d, idx) => (
                <li className = {'_text-link'}
                    onClick = { onClick }
                    key={idx}>
                    <a>
                      <i className = { '_icon' }></i>
                        <span className = {'_side-text'}>{d.title}</span>
                    </a>
                </li>
                ))
           }
        </ul>
      </div>
    )
  }
}
SideBar.propTypes = {
  onClick : PropTypes.func,
  text : PropTypes.string,
  icon : PropTypes.string,
}

SideBar.defaultProps = {
  text : 'title',
  icon : 'image',
}
export default SideBar
