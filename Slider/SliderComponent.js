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
            defaultValue = { min }
            value = { valueText }
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
