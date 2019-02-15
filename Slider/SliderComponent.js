import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Slider, { createSliderWithTooltip } from 'rc-slider'
import 'rc-slider/assets/index.css';
import './styles/index.css'

function percentFormatter(v) {
  return v;
}

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

    const SliderWithTooltip = createSliderWithTooltip(Slider);
    return (
      <center>
        <div style={style}>
          <SliderWithTooltip
            min = { min }
            max = { max }
            value = { valueText }
            tipFormatter={percentFormatter}
            onChange={ (e) => {
              this.setState({ valueText : e })
              this.props.onChangeValue(e)
            } }
          />
        </div>
        <p className = { 'unionbank-color-grey font-size-12px' }>{ text }</p>
      </center>
    )
  }
}

SliderComponent.propTypes = {
}
SliderComponent.defaultProps = {
}
export default SliderComponent
