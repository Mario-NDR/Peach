import React from 'react'
import PropTypes from 'prop-types'
import echarts from 'echarts'

import echartsColors from 'Constants/echartsColors'

class Line extends React.Component {

  static propTypes = {
    series: PropTypes.array.isRequired,

    data: PropTypes.array,
    options: PropTypes.object,
    xAxisData: PropTypes.array,
    style: PropTypes.object,
  }

  static defaultProps = {
    data: [],
    options: {},
    xAxisData: [],
    style: {},
  }

  constructor(props) {
    super(props)
    this.lineChart = null
  }

  componentDidMount() {
    const { data } = this.props
    this.lineChart = echarts.init(document.querySelector('#lineChart'))
    const option = this.setOption(data)
    this.lineChart.setOption(option)

    setTimeout(() => {
      this.resize()
    }, 20)

    window.onresize = () => {
      this.resize()
    }
  }

  componentDidUpdate() {
    const option = this.setOption()
    this.lineChart.setOption(option)
    setTimeout(() => {
      this.resize()
    }, 20)
  }

  resize = () => {
    echarts.getInstanceByDom(document.querySelector('#lineChart')).resize()
  }

  setOption = () => ({
    title: this.props.options.title || null,
    color: this.props.options.color || echartsColors,
    textStyle: {
      color: '#333',
    },
    animation: true,
    legend: {
      top: 'top',
      // data: []
      textStyle: {
        color: '#333',
      },
    },
    tooltip: {
      trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: this.props.xAxisData || [],
      axisLine: {
        lineStyle: { color: '#333' },
      },
    },
    yAxis: {
      type: 'value',
      axisLine: {
        lineStyle: { color: '#333' },
      },
      // axisTick: {
      //   inside: true
      // },
      // splitLine: {
      //   show: false
      // },
      // axisLabel: {
      //   inside: true,
      //   formatter: '{value}\n'
      // },
      // z: 10,
      // axisLine: {
      //   lineStyle: {
      //     color: '#333',
      //   },
      // },
    },
    // grid: {
    //   top: 110,
    //   left: 15,
    //   right: 15,
    //   height: 160
    // },
    // dataZoom: [ {
    //   type: 'inside',
    //   throttle: 50
    // } ],
    series: this.props.series,
  })

  render() {
    return <section id="lineChart" style={{ width: '100%', height: 350, ...this.props.style }}> line </section>
  }
}

export default Line
