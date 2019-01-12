import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Line } from 'react-chartjs-2';

import './styles/lineChart.css'

class LineChart extends Component {
  render(){
    const { data } = this.props
    const options = {
      annotation: {
         annotations: [{
           drawTime: 'afterDatasetsDraw',
           borderColor: 'red',
           borderDash: [2, 2],
           borderWidth: 2,
           mode: 'vertical',
           type: 'line',
           value: 10,
           scaleID: 'x-axis-0',
         }]
      },
      maintainAspectRation: false
    };

    return(
       <Line
         data={data}
         width={100}
         height={50}
         options={options}
       />
     )
   }
}

LineChart.propTypes = {
  data : PropTypes.object
}

LineChart.defaultProps = {
}

export default LineChart
