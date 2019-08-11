import React from 'react'
import echarts from 'echarts'

class Funnel extends React.Component {

  componentDidMount() {
    const funnelChart = echarts.init(document.querySelector('#funnelChart'))
    const option = {
      title: {
        text: '任务统计',
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c}%',
      },
      // toolbox: {
      //   feature: {
      //     dataView: { readOnly: false },
      //     restore: {},
      //     saveAsImage: {}
      //   }
      // },
      legend: {
        data: [ '可利用数', 'web服务', '存活端口数' ],
      },
      calculable: true,
      series: [
        {
          name: '任务统计',
          type: 'funnel',
          // left: '10%',
          // top: 60,
          // x2: 80,
          // bottom: 60,
          // width: '80%',
          // height: {totalHeight} - y - y2,
          min: 0,
          max: 150,
          minSize: '10%',
          maxSize: '100%',
          sort: 'ascending',
          gap: 0,
          label: {
            normal: {
              show: true,
              position: 'inside'
            },
            emphasis: {
              textStyle: {
                fontSize: 20
              }
            }
          },
          labelLine: {
            normal: {
              length: 10,
              lineStyle: {
                width: 1,
                type: 'solid'
              }
            }
          },
          itemStyle: {
            normal: {
              borderColor: '#fff',
              borderWidth: 1
            }
          },
          data: [
            { value: 2, name: '可利用数' },
            { value: 100, name: 'web服务' },
            { value: 150, name: '存活端口数' },
          ]
        }
      ]
    }
    funnelChart.setOption(option)
  }

  render() {
    return <section id="funnelChart" style={{ width: 500, height: 300 }}> Funnel </section>
  }
}

export default Funnel
