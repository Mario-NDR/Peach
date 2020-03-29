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
      dataIndex: 'time',
      title: '时间',
      key: 'time',
      align: 'center',
      // width: '17%',
      render: (text) => (
        <div className={style.tableTime}>
          {zoneTransfer(text, 'YYYY-MM-DD HH:mm:ss')}
        </div>
      )
    },
    {
      dataIndex: 'client_ip',
      title: '客户端',
      key: 'client_ip',
      align: 'center',
      // width: '15%',
      render: (text) => (
        <div className={style.tableDest}>
          {text}
        </div>
      )
    },
    {
      dataIndex: 'src',
      title: '源IP',
      key: 'src',
      align: 'center',
      // width: '15%',
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
      // width: '15%',
      render: (text) => (
        <div className={style.tableDest}>
          {text}
        </div>
      )
    },
    {
      dataIndex: 'alert_message',
      title: '告警信息',
      key: 'alert_message',
      align: 'center',
      // width: '30%',
      render: (text) => {
        return (
          <Tooltip title={text} className={style.tableTime}>
            {ellipsis(text, 40)}
          </Tooltip>
        )
      }
    },
    {
      dataIndex: 'action',
      title: '防御策略',
      key: 'action',
      align: 'center',
      // width: '8%',
      render: (text) => {
        console.log(text)
        if (text === 'allowed') {
          return (
          <Tag color="volcano">
            {'仅告警'}
          </Tag>
          )
        }
        return (
          <Tag color="green">
            {'已拦截'}
          </Tag>
        )
      }
    },
    {
      dataIndex: 'category',
      title: '攻击类型',
      key: 'category',
      align: 'center',
      // width: '8%',
      render: (text) => {
        console.log(text)
        if (text === 'A Network Trojan was detected') {
          return (
            <Tag color="red">
            {'木马活动'}
            </Tag>
          )
        } else if (text === 'Detection of a Network Scan') {
          return (
            <Tag color="lime">
            {'网络扫描'}
            </Tag>
          )
        } else if (text === 'Executable code was detected') {
          return (
            <Tag color="orange">
            {'恶意代码'}
            </Tag>
          )
        } else {
          return (
            <Tag color="orange">
            {'其他类型'}
            </Tag>
          )
        }
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
          category: item.category
        }
      })
    }

    return (
      <ContentBox>
        <Subheader>入侵防御记录</Subheader>
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
