/**
 * @summary 奖品库管理
 */
import React from 'react'
import PropTypes from 'prop-types'

import { Table, Button, Input, Select, DatePicker, Modal, Form } from 'antd'

import Bread from 'Components/Bread'
import Subheader from 'Components/Subheader'
import ContentBox from 'Components/ContentBox'

import { IntlComponent } from 'Components/Common'
import FormItem from 'Components/FormItem'

import style from './style.scss'

const { Option } = Select

class CheckRecord extends IntlComponent {

  static propTypes = {
    form: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      visible: false,
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

  handleCancel = () => {
    this.setState({
      visible: false,
    })
  }

  columns = [
    {
      title: '奖品编号',
      dataIndex: 'serialNumber',
      key: 'serialNumber',
    },
    {
      title: '奖品名称',
      dataIndex: 'namePrize',
      key: 'namePrize',
    },
    {
      title: '发放日期',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: '发放数量',
      dataIndex: 'number',
      key: 'number',
    },
    {
      title: '活动申请剩余数量',
      dataIndex: 'remainNumber',
      key: 'remainNumber',
    },
    {
      title: '发放用户',
      dataIndex: 'user',
      key: 'user',
    },
    {
      title: '邮寄地址',
      dataIndex: 'add',
      key: 'add',
    },
    {
      title: '发放方式',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: '发奖活动',
      dataIndex: 'event',
      key: 'event',
    },
    {
      title: '发奖活动',
      dataIndex: 'activity',
      key: 'activity',
    },
    {
      title: '活动创建人',
      dataIndex: 'founder',
      key: 'founder',
    },
    {
      title: '发奖环节',
      dataIndex: 'tache',
      key: 'tache',
    },
    {
      title: '发奖结果',
      dataIndex: 'res',
      key: 'res',
    },
  ]

  dataSource = [
    {
      serialNumber: 'gt001',
      namePrize: '积分',
      date: '20190920 14:32:33',
      number: 500,
      remainNumber: 6500,
      user: '13023341231 李某某',
      add: '/',
      type: 'APP自动发奖',
      event: '社区垃圾分类',
      activity: '报名活动',
      founder: '管理员1号',
      tache: '签到',
      res: '成功',
    },
    {
      serialNumber: 'gt001',
      namePrize: '积分',
      date: '20190920 14:32:33',
      number: 500,
      remainNumber: 6500,
      user: '13023341231 李某某',
      add: '/',
      type: 'APP自动发奖',
      event: '社区垃圾分类',
      activity: '报名活动',
      founder: '管理员1号',
      tache: '签到',
      res: '成功',
    },
    {
      serialNumber: 'gt001',
      namePrize: '积分',
      date: '20190920 14:32:33',
      number: 500,
      remainNumber: 6500,
      user: '13023341231 李某某',
      add: '/',
      type: 'APP自动发奖',
      event: '社区垃圾分类',
      activity: '报名活动',
      founder: '管理员1号',
      tache: '签到',
      res: '失败',
    },
    {
      serialNumber: 'gt001',
      namePrize: '积分',
      date: '20190920 14:32:33',
      number: 500,
      remainNumber: 6500,
      user: '13023341231 李某某',
      add: '/',
      type: 'APP自动发奖',
      event: '社区垃圾分类',
      activity: '报名活动',
      founder: '管理员1号',
      tache: '签到',
      res: '成功',
    },
    {
      serialNumber: 'gt001',
      namePrize: '积分',
      date: '20190920 14:32:33',
      number: 500,
      remainNumber: 6500,
      user: '13023341231 李某某',
      add: '/',
      type: 'APP自动发奖',
      event: '社区垃圾分类',
      activity: '报名活动',
      founder: '管理员1号',
      tache: '签到',
      res: '失败',
    },
    {
      serialNumber: 'gt001',
      namePrize: '积分',
      date: '20190920 14:32:33',
      number: 500,
      remainNumber: 6500,
      user: '13023341231 李某某',
      add: '/',
      type: 'APP自动发奖',
      event: '社区垃圾分类',
      activity: '报名活动',
      founder: '管理员1号',
      tache: '签到',
      res: '成功',
    },
    {
      serialNumber: 'gt001',
      namePrize: '积分',
      date: '20190920 14:32:33',
      number: 500,
      remainNumber: 6500,
      user: '13023341231 李某某',
      add: '/',
      type: 'APP自动发奖',
      event: '社区垃圾分类',
      activity: '报名活动',
      founder: '管理员1号',
      tache: '签到',
      res: '成功',
    },
  ]

  render() {
    const { getFieldDecorator } = this.props.form
    
    return (
      <div className={style.CheckRecord}>
        <div className={style.viewRecord}>
          <Bread
            items={[
              { content: '活动' },
              { content: '奖品库管理' },
              { content: '查看发奖记录' },
            ]}
          />
          <ContentBox>
            <Subheader>奖品库管理：查看发奖记录</Subheader>
            <div className={style.search}>
              <div>
                活动名称：
                <Select placeholder="下拉选择活动" style={{ width: 250 }}>
                  <Option value="act1">活动一</Option>
                  <Option value="act2">活动二</Option>
                </Select>
              </div>
              <div>
                活动时间筛选：
                <DatePicker
                  style={{ width: 250 }}
                />
              </div>
              <div>
                <Button type="primary">查询</Button>
                <Button style={{ marginLeft: 15 }}>重置</Button>
              </div>
            </div>
            <div style={{ marginTop: 10 }}>
              用户手机号：
              <Input
                style={{ width: 236 }}
                placeholder="输入用户手机号查询"
              />
            </div>
          </ContentBox>
        </div>
        <ContentBox>
          <div className={style.operation} align="right">
            <Button size="large" onClick={() => { window.history.go(-1) }}>返回</Button>
            <Button size="large" type="primary" onClick={this.showModal}>导出当前发奖记录</Button>
            <Modal
              title="下载发奖记录"
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
            >
              <Form>
                <FormItem
                  conf={{
                    getFieldDecorator,
                    label: '奖品编号(自动)',
                    type: 'Input',
                    dataIndex: 'serialNumber',
                    initialValue: 'gt205',
                    placeholder: '',
                    maxLength: 80,
                    disabled: 'disabled',
                  }}
                />
                <FormItem
                  conf={{
                    getFieldDecorator,
                    label: '发奖活动',
                    type: 'Select',
                    dataIndex: 'awardActivity',
                    initialValue: '',
                    placeholder: '报名活动-社区垃圾分类评选',
                    maxLength: 80,
                  }}
                >
                  {this.renderOptions = () => {
                    return (
                      <div>
                        <Option value="activityOne">报名活动-社区垃圾分类评选1</Option>
                        <Option value="activityTwo">报名活动-社区垃圾分类评选2</Option>
                      </div>
                    )
                  }}
                </FormItem>
              </Form>
            </Modal>
          </div>
          <div className={style.prizeTable}>
            <Table columns={this.columns} dataSource={this.dataSource} size="middle" />
          </div>
        </ContentBox>
      </div>
    )
  }
}

export default Form.create()(CheckRecord)
