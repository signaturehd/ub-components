import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './styles/style.css'
import ContentLoader, {
  Facebook,
  Instagram,
  List,
  Code,
  BulletList
} from 'react-content-loader'

class SkeletalLoader extends Component {
  render () {
    const {
      height,
      width,
      shapeCircle,
      shapeBox,
      showFacebookComponent,
      showInstagramComponent,
      showBulletListComponent,
      showCodeComponent,
      showSizeContent,
    } = this.props

    return (
      <div>
        <ContentLoader
          height={height}
          width={width}
          speed={2}
          primaryColor="#fafafa"
          secondaryColor="#fff"
        >
        {
          shapeBox &&
        		<rect width="200.4" height="141.1" />
        }
        {
          showFacebookComponent &&
          <Facebook/>
        }

        {
          showInstagramComponent &&
          <Instagram />
        }

        {
          showCodeComponent &&
          <Code />
        }

        {
          showBulletListComponent &&
          <BulletList />
        }
        </ContentLoader>
      </div>
    )
  }
}

SkeletalLoader.propTypes = {
  width : PropTypes.number,
  height : PropTypes.number,
  shape : PropTypes.string,
  showFacebookComponent : PropTypes.bool,
  showInstagramComponent : PropTypes.bool,
  showCodeComponent : PropTypes.bool,
  showBulletListComponent : PropTypes.bool,
}

SkeletalLoader.defaultProps = {
  showFacebookComponent : false,
  showInstagramComponent : false,
  showCodeComponent : false,
  showBulletListComponent : false,
  width : 0,
  height : 0,
  shape: 'bar',
}
export default SkeletalLoader
