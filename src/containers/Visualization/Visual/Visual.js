/**
 * @summary 可视化
 */
import React from 'react'
import PropTypes from 'prop-types'
import { Tag, Icon, Spin, Divider, DatePicker, Card } from 'antd'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import moment from 'moment'

import { IntlComponent } from 'Components/Common'
import ContentBox from 'Components/ContentBox'
import Subheader from 'Components/Subheader'
import { Pie, MutiLine } from 'Components/Charts'
import { formatTime, zoneTransfer } from 'Utils/time'
import color from 'Utils/color'

import * as actions from '../action'
import style from './style.scss'

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />
const { RangePicker } = DatePicker

const defaultStartDate = moment().subtract(7, 'days')
const defaultEndDate = moment()

class Visual extends IntlComponent {

  static propTypes = {
    pieData: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      loadingPie: true,
      loadingLine: true,
    }
  }

  componentDidMount() {
    this.props.actions.getPieData()
    this.props.actions.getWavy({
      begintime: defaultStartDate.format('YYYY-MM-DDT+0800'),
      endtime: defaultEndDate.format('YYYY-MM-DDT23:59:59+0800')
    })
    this.props.actions.getVisualDate()
    this.timer = setInterval(() => {
      this.load()
    }, 1000 * 60)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.loadingPie !== nextProps.loadingPie) {
      this.setState({ loadingPie: false })
    }
    if (this.props.loadingLine !== nextProps.loadingLine) {
      this.setState({ loadingLine: false })
    }
  }

  load = () => {
    this.props.actions.getVisualDate()
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  onChange = (value) => {
    this.props.actions.getWavy({
      begintime: value[0].format('YYYY-MM-DDT+0800'),
      endtime: value[1].format('YYYY-MM-DDT23:59:59+0800'),
    })
  }

  disabledDate = (current) => {
    return current && current > moment().endOf('day')
  }

  render() {
    const { pieData, visualDate, wavyData } = this.props
    let sum = 0
    let last_clean = ''
    let total = 0
    let innerPieData = []
    let dateString = ''
    let timeArr = []
    let seriesName = []
    let seriesData = []
    let series = []
    if (Object.keys(pieData).length !== 0) {
      sum = pieData.sum
      last_clean = pieData.last_clean
      total = pieData.total
    }
    if (Object.keys(pieData).length !== 0 && pieData.data.length !== 0) {
      innerPieData = pieData.data.map((item) => {
        return { name: item.name, value: item.count }
      })
    }
    if (Object.keys(visualDate).length !== 0) {
      dateString = `${visualDate.days} 天 ${visualDate.hours} 小时 ${visualDate.minutes} 分`
    }
    if (Object.keys(wavyData).length !== 0) {
      timeArr = wavyData.time.map((item) => zoneTransfer(item, 'YYYY-MM-DD HH:mm:ss'))
      seriesName = Object.keys(wavyData.wavy_date)
      seriesData = Object.values(wavyData.wavy_date)
      series = seriesName.map((item, index) => {
        return { name: item, data: seriesData[index], type: 'line', smooth: true, areaStyle: {} }
      })
    }

    return (
      <div className={style.visual}>
        <ContentBox>
          <Subheader>请求统计</Subheader>
          <div className={style.top}>
            <div className={style.pieLeft}>
              <Spin spinning={this.state.loadingPie} indicator={antIcon} tip="加载中">
                <Pie
                  data={innerPieData}
                  width="100%"
                  height={450}
                  options={{
                    radius: ['40%', '65%'],
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
                    center: ['35%', '50%'],
                    title: {
                      show: true,
                      // text: '请求统计',
                      textStyle: { color: '#966', fontSize: 18 },
                      left: 'center',
                    },
                    color,
                  }}
                />
              </Spin>
            </div>
            <div>
              <Card title="累计处理请求:" type="inner" style={{ width: 300, marginBottom: 10 }}>
                <span>{`${total} 次`}</span>
              </Card>
              <Card title="告警数:" type="inner" style={{ width: 300, marginBottom: 10 }}>
                <span>{`${sum} 条`}</span>
              </Card>
              <Card title="最新日志:" type="inner" style={{ width: 300, marginBottom: 10 }}>
                {
                  typeof (last_clean) === 'string' ? '暂无清理时间' : <Tag color="#87d068">{formatTime(last_clean)}</Tag>
                }
              </Card>
              <Card title="累计运行时长:" type="inner" style={{ width: 300, marginBottom: 10 }}>
                <span>{dateString}</span>
              </Card>
            </div>
          </div>
          <Divider dashed />
          <Subheader>攻击类型统计</Subheader>
          <div className={style.line}>
            选择时间：
            <RangePicker
              format="YYYY-MM-DD"
              defaultValue={[defaultStartDate, defaultEndDate]}
              disabledDate={this.disabledDate}
              onChange={this.onChange}
            />
          </div>
          <Spin spinning={this.state.loadingLine} indicator={antIcon} tip="加载中">
            <MutiLine
              xAxisData={timeArr}
              series={series}
            />
          </Spin>
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
    loadingLine: state.visualReducer.loadingLine,
    wavyData: state.visualReducer.wavyData,
  }
}


function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Visual)
