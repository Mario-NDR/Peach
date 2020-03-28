/**
 * @summary 规则管理
 */
import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Table, Button, Input, Tag } from 'antd'

import Bread from 'Components/Bread'
import Subheader from 'Components/Subheader'
import ContentBox from 'Components/ContentBox'

import { IntlComponent } from 'Components/Common'
import * as actions from '../action'
import style from './style.scss'


class CheckRecord extends IntlComponent {

  static propTypes = {
    form: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      type: 'checkRecord',
    }
  }

  columns = [
    {
      title: '规则编号',
      dataIndex: 'sid',
      key: 'sid',
      align: 'center',
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
      title: '防御策略',
      dataIndex: 'type',
      key: 'type',
      align: 'center',
      render: (text) => {
        if (text === 'alert') {
          text = '告警'
          return (
            <Tag color="volcano">
            {text}
            </Tag>
          )
        } else {
          text = '拦截'
          return (
            <Tag color="geekblue">
            {text}
            </Tag>
          )
        }
      }
    },
    {
      title: '传输协议',
      dataIndex: 'content_type',
      key: 'content_type',
      align: 'center',
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
      render: (text) => {
        if (text === '木马活动') {
          return (
            <Tag color="volcano">
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
            <Tag color="cyan">
            {text}
            </Tag>
          )
        }
      }
    }
  ]

  componentDidMount() {
    this.props.actions.getRules({ server: 'client' })
  }

  render() {
    const { rules } = this.props
    const { type } = this.state

    return (
      <div className={style.CheckRecord}>
        <div className={style.viewRecord}>
          <Bread
            items={[
              { content: '规则管理' },
              { content: '已应用规则' },
            ]}
          />
          <ContentBox>
            <Subheader>客户端已应用规则</Subheader>
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
        </div>
        <ContentBox>
          <div className={style.operation} align="right">
            <Button size="large" onClick={() => { window.history.go(-1) }}>返回</Button>
            <Button size="large" type="primary" onClick={this.showModal}>修改应用策略</Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(CheckRecord)
