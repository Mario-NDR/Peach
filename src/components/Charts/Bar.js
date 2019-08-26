import React from 'react'
import PropTypes from 'prop-types'
import echarts from 'echarts'

class Bar extends React.Component {

  static propTypes = {
    data: PropTypes.array,
  }

  static defaultProps = {
    data: [],
  }

  constructor(props) {
    super(props)
    this.barChart = null
  }

  componentDidMount() {
    const { data } = this.props
    this.barChart = echarts.init(document.querySelector('#barChart'))
    const option = this.setOption(data)
    this.barChart.setOption(option)

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
    this.barChart.setOption(option)
  }

  resize = () => {
    echarts.getInstanceByDom(document.querySelector('#barChart')).resize()
  }

  setOption = () => ({
    color: [ '#449ffc', '#faad15', '#1890ff' ],
    // color: [ '#1571f8', '#f00', '#ffba4a' ],
    textStyle: {
      color: '#333',
    },
    // TODO tooltip雷达类型顺序调整
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
      showContent: true,
    },
    // legend: {
    //   data: [ '资产探测', '漏洞探测', '挂马探测' ]
    // },
    grid: {
      left: '3%',
      right: '5%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        name: '',
        type: 'category',
        data: [ '1月', '2月', '3月', '4月', '5月', '6月', '7月' ],
        axisLine: {
          lineStyle: {
            color: '#eee',
          },
        },
        axisLabel: {
          fontSize: 18,
        },
        nameTextStyle: {
          fontSize: 18,
        },
      },
    ],
    yAxis: [
      {
        name: '',
        type: 'value',
        axisLine: {
          lineStyle: {
            color: '#eee',
          },
        },
        axisLabel: {
          fontSize: 18,
        },
        nameTextStyle: {
          fontSize: 18,
        },
      }
    ],
    series: [
      {
        name: '',
        type: 'bar',
        barWidth: '20%',
        // stack: 'node',
        data: [ 10, 11, 13, 11, 9, 12, 13 ],
      },
    ]
  })

  render() {
    return <section id="barChart" style={{ width: '80%', height: 350 }}> bar </section>
  }
}

export default Bar
