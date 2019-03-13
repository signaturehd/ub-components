import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Slider } from 'material-ui-slider'

class SliderComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      valueText : ''
    }
  }

  componentWillReceiveProps (nextProps) {
    if(nextProps === '') {
      this.setState({ valueText : nextProps.min })
    } else {
      this.setState({ valueText : nextProps.defaultValue })
    }
  }

  render () {
    const {
      min,
      max,
      onChangeValue,
      text
    } = this.props

    const {
      valueText
    } = this.state

    const style = { width: 300 }

    return (
      <center>
        <div style={style}>
          <Slider
            color = 'rgb(255, 153, 0)'
            min = { min }
            max = { max }
            step = { 1 }
            defaultValue = { parseInt(valueText) }
            value = { parseInt(valueText) }
            onChange={ (value, e) => {
              onChangeValue(value, e)
              this.setState({ valueText : value })
            } }
          />
        </div>
        <h4 className = { 'unionbank-color-grey font-size-10px' }>{ text }</h4>
      </center>
    )
  }
}

SliderComponent.propTypes = {
}
SliderComponent.defaultProps = {
}

export default SliderComponent
