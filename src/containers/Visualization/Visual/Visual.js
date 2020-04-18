/**
 * @summary 规则策略 -- 全部规则
 */
import React from 'react'
import PropTypes from 'prop-types'
import { Tag, Icon, Spin } from 'antd'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { IntlComponent } from 'Components/Common'
import ContentBox from 'Components/ContentBox'
import Bread from 'Components/Bread'
import Subheader from 'Components/Subheader'
import { Pie } from 'Components/Charts'
import { formatTime } from 'Utils/time'
import color from 'Utils/color'

import * as actions from '../action'
import style from './style.scss'

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />

class Visual extends IntlComponent {

  static propTypes = {
    pieData: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      loadingPie: true,
    }
  }

  componentDidMount() {
    this.props.actions.getPieData()
    this.props.actions.getVisualDate()
    this.timer = setInterval(() => {
      this.load()
    }, 1000 * 60)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.loadingPie !== nextProps.loadingPie) {
      this.setState({ loadingPie: false })
    }
  }

  load = () => {
    this.props.actions.getVisualDate()
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    const { pieData, visualDate } = this.props
    let sum = 0
    let last_clean = ''
    let total = 0
    let innerPieData = []
    let dateString = ''
    if (Object.keys(pieData).length !== 0) {
      innerPieData = pieData.data.map((item) => {
        return { name: item.name, value: item.count }
      })
      sum = pieData.sum
      last_clean = pieData.last_clean
      total = pieData.total
    }
    if (Object.keys(visualDate).length !== 0) {
      dateString = `${visualDate.days} 天 ${visualDate.hours} 小时 ${visualDate.minutes} 分`
    }

    return (
      <div className={style.visual}>
        <Bread
          items={[ { content: '数据可视化' }, { content: '图表' } ]}
        />
        <ContentBox>
          <Subheader>数据可视化</Subheader>
          <div className={style.info}>
            <div className={style.infoVisual}>
              <div>
                <span>累计处理请求: </span>
                <span style={{ color: '#e8eb62' }}>{total}</span>
              </div>
              <div>
                <span>现存日志数: </span>
                <span style={{ color: '#e8eb62' }}>{sum}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ marginRight: 5 }}>日志清理时间: </span>
                {
                  typeof (last_clean) === 'string' ? '没有运行清理过程' : <Tag color="#87d068">{formatTime(last_clean)}</Tag>
                }
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ marginRight: 5 }}>此版本已运行: </span>
                <span>{dateString}</span>
              </div>
            </div>
          </div>
          <div className={style.pieLeft}>
            <Spin spinning={this.state.loadingPie} indicator={antIcon} tip="加载中">
              <Pie
                data={innerPieData}
                width="100%"
                height={450}
                options={{
                  radius: [ '40%', '65%' ],
                  textStyle: { fontSize: 16 },
                  legend: {
                    type: 'scroll',
                    orient: 'vertical',
                    right: 10,
                    top: 20,
                    bottom: 20,
                    data: innerPieData,
                    textStyle: { color: '#fff', fontSize: 12 },
                  },
                  label: {
                    normal: { show: false },
                  },
                  center: [ '35%', '50%' ],
                  title: {
                    show: true,
                    text: '请求统计',
                    textStyle: { color: '#966', fontSize: 18 },
                    left: 'center',
                  },
                  color,
                }}
              />
            </Spin>
          </div>
        </ContentBox>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    pieData: state.visualReducer.pieData,
    visualDate: state.visualReducer.visualDate,
    loadingPie: state.visualReducer.loadingPie,
  }
}


function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Visual)
