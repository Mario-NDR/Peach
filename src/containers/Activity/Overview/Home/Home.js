/**
 * @sumary 攻击详情 攻击流量
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
    this.trendChart = null
  }

  columns = [
    {
      dataIndex: 'src',
      title: '源IP',
      key: 'src',
      align: 'center',
      width: '15%',
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
      width: '15%',
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
      width: '15%',
      render: (text) => (
        <Tag color="#87d068">
          {zoneTransfer(text, 'YYYY-MM-DD HH:mm:ss')}
        </Tag>
      )
    },
    {
      dataIndex: 'client_ip',
      title: '客户端',
      key: 'client_ip',
      align: 'center',
      width: '15%',
      render: (text) => (
        <div className={style.tableDest}>
          {text}
        </div>
      )
    },
    {
      dataIndex: 'action',
      title: '模式',
      key: 'action',
      align: 'center',
      width: '10%',
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
      width: '30%',
      render: (text) => {
        return (
          <Tooltip title={text}>
            {ellipsis(text, 40)}
          </Tooltip>
        )
      }
    },
  ]

  componentDidMount() {
    this.props.actions.getMapDetailData()
  }

  renderPagination = () => {
    return {
      pageSize: 20,
      showTotal: (totals) => `共 ${totals} 条数据`
    }
  }

  render() {
    let { mapDetail } = this.props
    if (mapDetail.length !== 0) {
      mapDetail = mapDetail.map((item) => {
        return {
          src: item.src.ip,
          dest: item.dest.ip,
          time: item.time,
          client_ip: item.client_ip,
          action: item.action,
          alert_message: item.alert_message,
        }
      })
    }

    return (
      <ContentBox>
        <Subheader>攻击流量概况</Subheader>
        <div className={style.tableList}>
          <Table
            bordered
            columns={this.columns}
            dataSource={mapDetail}
            pagination={this.renderPagination()}
            // rowKey={(r) => r.src}
          />
        </div>
      </ContentBox>
    )
  }
}

function mapStateToProps(state) {
  return {
    mapDetail: state.mapReducer.mapDetail,
  }
}


function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
