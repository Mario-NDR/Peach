/**
 * @summary 抽奖详情--中奖名单
 */
import React from 'react'
import { Table } from 'antd'

import { IntlComponent } from 'Components/Common'

import style from './style.scss'

class LuckyDrawList extends IntlComponent {

  constructor(props) {
    super(props)
    this.state = {}
  }

  columns = [
    {
      title: '中奖时间',
      dataIndex: 'time',
      key: 'time',
    },
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '手机号',
      dataIndex: 'telephoneNumber',
      key: 'telephoneNumber',
    },
    {
      title: '用户地址',
      dataIndex: 'userAddr',
      key: 'userAddr',
    },
  ]

  dataSource = [
    {
      time: '2016-09-05 15:00',
      name: '罗晓星',
      telephoneNumber: '15669154098',
      userAddr: '上海市漕河泾开发区高新产业科技园区C座20楼201室',
    },
    {
      time: '2016-09-05 15:00',
      name: '罗晓星',
      telephoneNumber: '15669154098',
      userAddr: '上海市漕河泾开发区高新产业科技园区C座20楼201室',
    },
    {
      time: '2016-09-05 15:00',
      name: '罗晓星',
      telephoneNumber: '15669154098',
      userAddr: '上海市漕河泾开发区高新产业科技园区C座20楼201室',
    },
    {
      time: '2016-09-05 15:00',
      name: '罗晓星',
      telephoneNumber: '15669154098',
      userAddr: '上海市漕河泾开发区高新产业科技园区C座20楼201室',
    },
  ]

  render() {
    return (
      <div className={style.luckyDrawList}>
        <Table columns={this.columns} dataSource={this.dataSource} size="small" pagination={false} />
      </div>
    )
  }
}

export default LuckyDrawList
