import React from 'react'
import PropTypes from 'prop-types'
import echarts from 'echarts'

class Line extends React.Component {

  static propTypes = {
    data: PropTypes.array,
  }

  static defaultProps = {
    data: [],
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
    }, 50)

    window.onresize = () => {
      this.resize()
    }
  }

  componentDidUpdate() {
    const { data } = this.props
    const option = this.setOption(data)
    this.lineChart.setOption(option)
  }

  resize = () => {
    echarts.getInstanceByDom(document.querySelector('#lineChart')).resize()
  }

  setOption = (data) => ({
    textStyle: {
      color: '#fff',
    },
    animation: true,
    legend: {
      top: 'bottom',
      data: []
    },
    tooltip: {
      triggerOn: 'none',
      position(pt) {
        return [ pt[0], 130 ]
      }
    },
    xAxis: {
      type: 'time',
      splitLine: {
        show: false
      },
      axisLine: {
        lineStyle: {
          color: '#eee',
        },
      },
    },
    yAxis: {
      type: 'value',
      axisTick: {
        inside: true
      },
      splitLine: {
        show: false
      },
      axisLabel: {
        inside: true,
        formatter: '{value}\n'
      },
      z: 10,
      axisLine: {
        lineStyle: {
          color: '#eee',
        },
      },
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
    series: [ {
      name: '模拟数据',
      type: 'line',
      smooth: true,
      stack: 'a',
      symbol: 'circle',
      symbolSize: 5,
      sampling: 'average',
      itemStyle: {
        normal: {
          color: '#FC9500'
        }
      },
      areaStyle: {
        normal: {
          opacity: 0.3,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [ {
            offset: 0,
            color: '#FC9500'
          }, {
            offset: 1,
            color: '#293f55'
          } ])
        }
      },
      data,
    } ],
  })

  render() {
    return <section id="lineChart" style={{ width: '100%', height: 350 }}> line </section>
  }
}

export default Line
