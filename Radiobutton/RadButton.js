import React , { Component } from 'react'
import './styles/styles.css'

/* radbutton */
class RadButton extends Component {
    render () {
        return (

            <div className='md-radio'>
                <input id='1' name='g' defaultChecked type='radio' />
                <label htmlFor={1}>Option 1</label>
            </div>
        )
    }
};
export default RadButton
