/**
 * @sumary 攻击详情 攻击流量（ip）
 */
import React from 'react'
// import PropTypes from 'prop-types'
import { Table, Tooltip, Tag } from 'antd'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import moment from 'moment'

import { IntlComponent } from 'Components/Common'
import ContentBox from 'Components/ContentBox'
import Subheader from 'Components/Subheader'
import { zoneTransfer } from 'Utils/time'
import { ellipsis } from 'Utils/string'

import * as actions from '../../../Home/action'
import style from './style.scss'

moment.suppressDeprecationWarnings = true

class Home extends IntlComponent {

  constructor(props) {
    super(props)
    this.state = {}
  }

  columns = [
    {
      dataIndex: 'src',
      title: '源IP',
      key: 'src',
      align: 'center',
      render: (text) => (
        <div className={style.tableSrc}>
          {text}
        </div>
      )
    },
    {
      dataIndex: 'dest',
      title: '目的IP',
      key: 'dest',
      align: 'center',
      render: (text) => (
        <div className={style.tableDest}>
          {text}
        </div>
      )
    },
    {
      dataIndex: 'time',
      title: '时间',
      key: 'time',
      align: 'center',
      render: (text) => (
        <Tag color="#87d068">
          {zoneTransfer(text, 'YYYY-MM-DD HH:mm:ss')}
        </Tag>
      )
    },
    { dataIndex: 'event_type', title: '事件类型', key: 'event_type', align: 'center' },
    {
      dataIndex: 'action',
      title: '模式',
      key: 'action',
      align: 'center',
      render: (text) => {
        if (text === 'allowed') {
          return '告警模式'
        }
        return '阻止模式'
      }
    },
    {
      dataIndex: 'alert_message',
      title: '告警信息',
      key: 'alert_message',
      align: 'center',
      render: (text) => {
        return (
          <Tooltip title={text}>
            {ellipsis(text, 20)}
          </Tooltip>
        )
      }
    },
  ]

  componentDidMount() {
    this.props.actions.getMapDetailData()
  }

  render() {
    let { mapDetail } = this.props
    if (mapDetail.length !== 0) {
      mapDetail = mapDetail.map((item) => {
        return {
          src: item.src.ip,
          dest: item.dest.ip,
          time: item.time,
          event_type: item.event_type,
          action: item.action,
          alert_message: item.alert_message,
        }
      })
    }

    return (
      <ContentBox>
        <Subheader>概况</Subheader>
        <div className={style.tableList}>
          <Table
            bordered
            columns={this.columns}
            dataSource={mapDetail}
            rowKey={(r) => r.src}
          />
        </div>
        <Subheader>趋势图</Subheader>
        <div>
          Trend chart
        </div>
      </ContentBox>
    )
  }
}

function mapStateToProps(state) {
  return {
    // attackTrafficData: state.attackTrafficReducer.attackTrafficData,
    mapDetail: state.mapReducer.mapDetail,
  }
}


function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
