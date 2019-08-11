/**
 * @summary 首页 Tab页
 */
import React from 'react'
import { Table, Select, Input } from 'antd'
import classnames from 'classnames'

import { IntlComponent } from 'Components/Common'

import style from './style.scss'

const { Option } = Select
const { Search } = Input

class Home extends IntlComponent {

  constructor(props) {
    super(props)
    this.state = {}
  }

  columns = [
    {
      title: '序号',
      dataIndex: 'key',
      key: 'key',
    },
    {
      title: '活动名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '活动类型',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: '发布时间',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: '操作',
      key: 'operation',
      render: () => <a>推荐</a>
    },
  ]

  dataSource = [
    {
      key: '1',
      name: '达人秀',
      type: '投票活动',
      date: '2019-07-08',
    },
    {
      key: '2',
      name: '好声音',
      type: '投票活动',
      date: '2019-07-08',
    },
    {
      key: '3',
      name: '最美达人',
      type: '投票活动',
      date: '2019-07-08',
    },
    {
      key: '4',
      name: '抽奖活动',
      type: '抽奖活动',
      date: '2019-07-08',
    },
    {
      key: '5',
      name: '竞猜活动',
      type: '竞猜活动',
      date: '2019-07-08',
    },
  ]

  render() {
    return (
      <div className={style.home}>
        <div className={style.thirdTitle}>
          <span>当前推荐</span>
          <span>（最多支持8个活动，按照顺序在app端展示）</span>
        </div>
        <Table columns={this.columns} dataSource={this.dataSource} size="small" pagination={false} />
        <div className={classnames('mt32', style.thirdTitle)}>
          <span>全部活动</span>
        </div>
        <div className={classnames('spaceBetween', 'mb16')}>
          <div>
            <span className="mr16">活动类型</span>
            <Select style={{ width: 180 }} defaultValue="1">
              <Option key="1">投票活动</Option>
              <Option key="2">竞猜活动</Option>
              <Option key="3">抽奖活动</Option>
            </Select>
          </div>
          <div>
            <Search
              style={{ width: 300 }}
              placeholder="请输入活动名称"
              enterButton="搜索"
              onSearch={value => console.log(value)}
            />
          </div>
        </div>
        <Table columns={this.columns} dataSource={this.dataSource} size="small" pagination={false} />
      </div>
    )
  }
}

export default Home
