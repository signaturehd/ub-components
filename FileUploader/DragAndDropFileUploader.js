import React , { Component } from 'react'
import Dropzone from 'react-dropzone'
import classNames from 'classnames'

class DragAndDropFileUploader extends Component {
	constructor(props) {
		super(props)
	}

	render(){
		const {
			onDrop,
		} = this.props

		return(
			<div className='video-uploading-button-size'>
        <Dropzone
					multiple={false}
					onDrop = { (e,f) => onDrop(e,f) }>
          {({ getRootProps, getInputProps, isDragActive }) => {
            return (
              <div
                {...getRootProps()}
                className={classNames('dropzone', 'width-height-100', 'align-center', { 'dropzone--isActive background-more-white': isDragActive })}
              >
                <input {...getInputProps()} />
                <div>
                  <div className={isDragActive ? 'upload-video-container onDrag-file-background' : 'upload-video-container'}>
                    <div className='padding-left-80px' >
                      <img src={require('./images/upload.png')} />
                    </div>
                    <div>
                      <p className='upload-video-title'>{isDragActive ? 'Drop your video file here' : 'Drag the video file here'}</p>
                    </div>
                    <div className='padding-left-80px'>
                      <label className='upload-video'>Upload</label>
                    </div>
                  </div>
                </div>
              </div>
            )
          }}
        </Dropzone>
  		</div>
		)
	}
}

export default DragAndDropFileUploader
