import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './styles/appbar.css'

class AppBar extends Component {
    constructor (props) {
        super(props)
    }

    render () {
        const { onClick, title, description, image, author, rating } = this.props

        const style = {
            cardStyle : {
                background : `url(${image}) rgba(0,0,0,0.4)`,
                backgroundSize : 'contain',
                height: '20px'
            }
        }
        return (
            <div className={'header'}>
                <div className = {'icon-header'}>
                    <img
                        src={ require('../../../../images/logo.png') }
                        className= {'_img-ub-logo'}/>
                </div>
                {
                    this.state.mobileView &&
                    <a className= {'_round-button'}
                       onClick={this.toggleSideBar}>
                        <img
                            src={ require('../../../../images/profile-picture.png')}
                            className = {'_img-ub-logo'} >
                        </img>
                    </a>
                }
            </div>
        )
    }
}

AppBar.propTypes = {
    onClick : PropTypes.func,
    title : PropTypes.string,
    description : PropTypes.string,
    image : PropTypes.string,
    author : PropTypes.string,
    rating : PropTypes.number,
}

AppBar.defaultProps = {
    title : 'title',
    description : 'description',
    author : 'author',
    image : 'image',
    rating : 1,
}

export { AppBar }
