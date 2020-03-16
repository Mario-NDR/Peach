/**
 * @summary 奖品库管理--查看发奖记录
 */
import React from 'react'

import { Link } from 'react-router-dom'
import { Table, Button, Input } from 'antd'

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
    },
    {
      title: '协议',
      dataIndex: 'content_type',
      key: 'content_type',
    },
    {
      title: '规则信息',
      dataIndex: 'msg',
      key: 'msg',
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
            { content: '服务端规则' },
          ]}
        />
        <ContentBox>
          <Subheader>已有规则展示</Subheader>
          <div className={style.search}>
            <div>
              奖品编号：
            <Input
              style={{ width: 250 }}
              placeholder="输入奖品编号"
            />
            </div>
            <div>
              奖品名称：
            <Input
              style={{ width: 250 }}
              placeholder="输入奖品名称，支持模糊搜索"
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
              <Button type="primary" size="large" ghost>查看发奖记录</Button>
            </Link>
            <Button size="large" type="primary">添加奖品</Button>
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
