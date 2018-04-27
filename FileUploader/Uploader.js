import React, { Component } from 'react'


class Uploader extends Component {
 constructor (props) {
  super(props)
  this.handleSubmit = this.handleSubmit.bind(this)
 }
 // highlight-range{4}
 handleSubmit (event) {
  event.preventDefault()
  alert(
   `Selected file - ${this.fileInput.files[0].name}`
  )
 }

 render () {
  return (
    <label>
     <input
      type="file"
      ref={input => {
       this.fileInput = input
      }}
     />
    </label>
  )
 }
}

export default Uploader
