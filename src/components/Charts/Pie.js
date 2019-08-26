import React from 'react'
import PropTypes from 'prop-types'
import echarts from 'echarts'

import echartsColors from 'Constants/echartsColors'

class Pie extends React.Component {

  static propTypes = {
    data: PropTypes.array,
    options: PropTypes.object,
    id: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    style: PropTypes.object,
  }

  static defaultProps = {
    data: [],
    options: {},
    id: 'pieChart',
    width: 350,
    height: 250,
    style: {},
  }

  constructor(props) {
    super(props)
    this.pieChart = null
  }

  componentDidMount() {
    const { data } = this.props
    this.pieChart = echarts.init(document.querySelector(`#${this.props.id}`))
    const option = this.setOption(data)
    this.pieChart.setOption(option)

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
    this.pieChart.setOption(option)
    setTimeout(() => {
      this.resize()
    }, 20)
  }

  resize = () => {
    echarts.getInstanceByDom(document.querySelector(`#${this.props.id}`)).resize()
  }

  setOption = (data) => ({
    title: this.props.options.title || null,
    color: this.props.options.color || echartsColors,
    textStyle: this.props.options.textStyle || null,
    tooltip: {
      trigger: 'item',
      formatter: '{b} : {c} ({d}%)',
      confine: true,
      extraCssText: 'white-space: pre-wrap;',
    },
    series: [ {
      type: 'pie',
      label: {
        normal: {
          // formatter: '{b}：\n{c} ({d}%)',
          formatter: (params) => {
            if (!params.name) {
              return `未知: \n${params.value}(${params.percent}%)`
            }
            if (params.name.length <= 20) {
              return `${params.name && params.name.substring(0, 20)}: \n${params.value}(${params.percent}%)`
            }
            return `${params.name && params.name.substring(0, 20)}...: \n${params.value}(${params.percent}%)`
          },
        },
      },
      radius: this.props.options.radius || [ 0, '55%' ],
      center: [ '50%', '60%' ],
      data,
      roseType: this.props.options.roseType || false,
    } ],
  })

  render() {
    return <section id={this.props.id} style={{ width: this.props.width || '100%', height: this.props.height, ...this.props.style }}> pie </section>
  }
}

export default Pie
