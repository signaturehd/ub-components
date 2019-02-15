import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Tooltip from 'rc-tooltip'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import 'rc-tooltip/assets/bootstrap_white.css'

import './styles/index.css'

class SliderComponent extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    const {
      min,
      max,
      onChangeValue,
    } = this.props

    const createSliderWithTooltip = Slider.createSliderWithTooltip;
    const Range = createSliderWithTooltip(Slider.Range);
    const Handle = Slider.Handle;

    const handle = (props) => {
    const { value, dragging, index, ...restProps } = props;
    const overLayStyle = { width : 20, margin: 0, height: 20 }

    return (
      <Tooltip
        prefixCls={ 'rc-slider-tooltip' }
        overlay={ value }
        visible={ dragging }
        placement={ 'top' }
        key={ index }
      >
      <Handle
        value={value}
        {...restProps} />
      </Tooltip>
      );
    };

    const wrapperStyle = { width: 400 };
    console.log(value)
    return (
      <center>
        <div style={wrapperStyle}>
          <Slider
            min={min}
            max={max}
            defaultValue={3}
            handle={handle} />
        </div>
      </center>
    )
  }
}

SliderComponent.propTypes = {
}
SliderComponent.defaultProps = {
}
export default SliderComponent
