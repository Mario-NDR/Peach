/**
 * @sumary 攻击详情 攻击流量（ip）
 */
import React from 'react'
// import PropTypes from 'prop-types'
import { Table, Tooltip } from 'antd'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { IntlComponent } from 'Components/Common'
import ContentBox from 'Components/ContentBox'
import Subheader from 'Components/Subheader'
import { zoneTransfer } from 'Utils/time'
import { ellipsis } from 'Utils/string'

import * as actions from '../../action'
import style from './style.scss'

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
      render: (text) => (
        <div className={style.tableSrc}>
          {text}
        </div>
      )
    },
    { dataIndex: 'dest', title: '目的IP', key: 'dest' },
    {
      dataIndex: 'time',
      title: '时间',
      key: 'time',
      render: (text) => {
        return zoneTransfer(text, 'YYYY-MM-DD HH:mm:ss')
      }
    },
    { dataIndex: 'event_type', title: '事件类型', key: 'event_type' },
    {
      dataIndex: 'action',
      title: '模式',
      key: 'action',
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
    this.props.actions.getAttackTrafficData()
  }

  render() {
    const { attackTrafficData } = this.props
    return (
      <ContentBox>
        <Subheader>概况</Subheader>
        <div className={style.tableList}>
          <Table
            columns={this.columns}
            dataSource={attackTrafficData}
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
    attackTrafficData: state.attackTrafficReducer.attackTrafficData,
  }
}


function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
