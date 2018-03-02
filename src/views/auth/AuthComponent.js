import React, {Component} from 'react'

import { connect, } from 'react-redux'
import { bindActionCreators, } from 'redux'
import { SampleActions } from '../../actions'

const mapStateToProps = state => ({
  samples: state.samples,
})

const mapDispatchToProps = dispatch => ({
  actions:  {
    sampleActions: bindActionCreators(SampleActions, dispatch),
  },
})

class AuthComponent extends Component {
  render () {
    return (
      <div>
        { this.props.children }
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthComponent)
