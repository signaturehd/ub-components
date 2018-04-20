import React, { Component } from 'react'
import FileInput from 'simple-react-file-uploader'

export default class Uploader extends Component {
    render () {
        return (

        <FileInput className={'Uploader'}
                multiple={false}
                onChange = {this.handleChange}
                accept="image/*"
            />
        )
    }
}



