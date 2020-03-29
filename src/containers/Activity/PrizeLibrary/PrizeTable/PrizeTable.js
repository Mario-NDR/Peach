/**
 * @summary 奖品库管理--查看发奖记录
 */
import React from 'react'

import { Link } from 'react-router-dom'
import { Table, Button, Input, Tag } from 'antd'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { IntlComponent } from 'Components/Common'
import ContentBox from 'Components/ContentBox'
import Bread from 'Components/Bread'
import Subheader from 'Components/Subheader'

import * as actions from '../action'
import style from './style.scss'

class PrizeTable extends IntlComponent {

  constructor(props) {
    super(props)
    this.state = {
      type: 'prizeRecord',
    }
  }

  columns = [
    {
      title: '规则编号',
      dataIndex: 'sid',
      key: 'sid',
      align: 'center',
      width: '10%',
      render: (text) => (
        <div className={style.tableText}>
          {text}
        </div>
      )
    },
    {
      title: '规则信息',
      dataIndex: 'msg',
      key: 'msg',
      align: 'center',
      render: (text) => (
        <div className={style.tableText}>
          {text}
        </div>
      )
    },
    {
      title: '传输协议',
      dataIndex: 'content_type',
      key: 'content_type',
      align: 'center',
      width: '8%',
      render: (text) => {
        return (
          <Tag color="geekblue">
          {text}
          </Tag>
        )
      }
    },

    {
      title: '漏洞类型',
      dataIndex: 'class_type',
      key: 'class_type',
      align: 'center',
      width: '8%',
      render: (text) => {
        if (text === '木马活动') {
          return (
            <Tag color="red">
            {text}
            </Tag>
          )
        } else if (text === '网络扫描') {
          return (
            <Tag color="lime">
            {text}
            </Tag>
          )
        } else {
          return (
            <Tag color="orange">
            {text}
            </Tag>
          )
        }
      }
    },
  ]

  componentDidMount() {
    this.props.actions.getRules({ server: 'server' })
  }

  render() {

    const { rules } = this.props
    const { type } = this.state


    return (
      <div className={style.prizeTable}>
        <Bread
          items={[
            { content: '规则管理' },
            { content: '全部规则' },
          ]}
        />
        <ContentBox>
          <Subheader>全部规则</Subheader>
          <div className={style.search}>
            <div>
              关键字搜索：
            <Input
              style={{ width: 250 }}
              placeholder="输入规则关键字，支持模糊搜索"
            />
            </div>
            <div>
              <Button type="primary">查询</Button>
              <Button style={{ marginLeft: 15 }}>重置</Button>
            </div>
          </div>
        </ContentBox>
        <ContentBox>
          <div className={style.operation} align="right">
            <Button size="large" onClick={() => window.history.go(-1)}>返回</Button>
            <Link to={`/app/activity/prizeLibrary/${type}`}>
              <Button type="primary" size="large" ghost>已应用规则</Button>
            </Link>
          </div>
          <div className={style.prizeTable}>
            <Table
              bordered
              columns={this.columns}
              dataSource={rules}
              rowKey={(r) => r.sid}
            />
          </div>
        </ContentBox>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    rules: state.rulesReducer.rules,
  }
}


function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(PrizeTable)
