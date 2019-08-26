/**
 * @summary 报名详情--留言
 */
import React from 'react'
import { Tabs, Table, Modal, Input } from 'antd'

import { IntlComponent } from 'Components/Common'

import style from './style.scss'

const { TabPane } = Tabs
const { TextArea } = Input

class LeaveMessage extends IntlComponent {

  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
  }

  showModal = () => {
    this.setState({
      visible: true,
    })
  }

  handleOk = () => {
    this.setState({
      visible: false,
    })
  }

  // 取消
  handleCancel = () => {
    this.setState({
      visible: false,
    })
  }
  
  columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '回复内容',
      dataIndex: 'content',
      key: 'content',
    },
    {
      title: '留言时间',
      dataIndex: 'time',
      key: 'time',
    },
    {
      title: '操作',
      dataIndex: 'operation',
      key: 'operation',
      render: () => {
        return (
          <div>
            <a style={{ marginRight: 8 }} role="button" onClick={this.showModal}>回复</a>
            <a role="button">删除</a>
          </div>
        )
      },
    }
  ]

  dataSource = [
    {
      name: '罗晓星',
      content: '我想参加',
      time: '2016-09-05 15:00',
    },
    {
      name: '罗晓星',
      content: '我想参加',
      time: '2016-09-05 15:00',
    },
    {
      name: '罗晓星',
      content: '我想参加',
      time: '2016-09-05 15:00',
    },
    {
      name: '罗晓星',
      content: '我想参加',
      time: '2016-09-05 15:00',
    },
    {
      name: '绿地集团  回复 罗晓星',
      content: '欢迎大家',
      time: '2016-09-05 15:00',
    },
  ]

  render() {
    return (
      <div className={style.leaveMessage}>
        <Tabs defaultActiveKey="1">
          <TabPane tab="全部" key="1">
            <Table columns={this.columns} dataSource={this.dataSource} pagination={false} />
          </TabPane>
          <TabPane tab="未回复" key="2">
            <Table columns={this.columns} dataSource={this.dataSource} pagination={false} />
          </TabPane>
          <TabPane tab="已回复" key="3">
            <Table columns={this.columns} dataSource={this.dataSource} pagination={false} />
          </TabPane>
        </Tabs>
        <Modal
          title="回复"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <TextArea cols="64" rows="10" placeholder="500字以内" />
        </Modal>
      </div>
    )
  }
}

export default LeaveMessage
