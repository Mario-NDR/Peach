/**
 * @summary 提交审批
 */
import React from 'react'
import { Button, Divider, Tabs, Descriptions, Table } from 'antd'
import { Link } from 'react-router-dom'

import { IntlComponent } from 'Components/Common'
import Bread from 'Components/Bread'
import Step from 'Components/Step'
import ContentBox from 'Components/ContentBox'
import Subheader from 'Components/Subheader'
import TagTitle from 'Components/TagTitle'

import img from './images/img.png'
import img1 from './images/img1.png'

import style from './style.scss'

const { TabPane } = Tabs

class Approve extends IntlComponent {

  constructor(props) {
    super(props)
    this.state = {}
  }

  columnsForm = [
    {
      title: '名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '必填',
      dataIndex: 'required',
      key: 'required',
    },
    {
      title: '提示',
      dataIndex: 'prompt',
      key: 'prompt',
    }
  ]

  columns = [
    {
      title: '发奖环节',
      dataIndex: 'link',
      key: 'link',
    },
    {
      title: '奖品信息',
      dataIndex: 'prizeInformation',
      key: 'namePrprizeInformationize',
    },
    {
      title: '每人发放数量',
      dataIndex: 'everyoneQuantity',
      key: 'everyoneQuantity',
    },
    {
      title: '奖品数量',
      dataIndex: 'prizeQuantity',
      key: 'prizeQuantity',
    },
    {
      title: '奖品单价',
      dataIndex: 'money',
      key: 'money',
    },
    {
      title: '奖品来源',
      dataIndex: 'source',
      key: 'source',
    },
    {
      title: '奖品库库存',
      dataIndex: 'stock',
      key: 'stock',
    },
    {
      title: '发奖方式',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: '兑奖说明',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: '奖品图片',
      dataIndex: 'img',
      key: 'img',
      render: () => {
        return (
          <div>
            <img src={img1} alt="" />
          </div>
        )
      }
    },
  ]

  dataSourceForm = [
    {
      name: '姓名',
      required: '是',
      prompt: '罗晓星',
    },
    {
      name: '电话',
      required: '是',
      prompt: '15669154098',
    },
  ]

  dataSource = [
    {
      link: '签到',
      prizeInformation: 'gt203 威尼斯小熊+礼品盒',
      everyoneQuantity: 1,
      prizeQuantity: 2000,
      money: 100,
      source: '自定义',
      stock: '自定义奖品无库存',
      type: '现场发放',
      description: '凭兑奖券系现场工作人员兑奖',
    },
    {
      link: '分享',
      prizeInformation: 'gt203 威尼斯小熊+礼品盒',
      everyoneQuantity: 1,
      prizeQuantity: 2000,
      money: 99,
      source: '奖品库',
      stock: '3000',
      type: '邮寄',
      description: '凭兑奖券系现场工作人员兑奖',
    },
  ]

  render() {
    return (
      <div className={style.approve}>
        <Bread
          items={[
            { content: '活动' },
            { content: '活动创建' },
            { content: '提交审批：报名活动' },
          ]}
        />
        <ContentBox>
          <Subheader>活动创建</Subheader>
          <Step
            current={3}
            items={[
              { title: '活动类型选择' },
              { title: '活动内容配置' },
              { title: '奖品配置' },
              { title: '活动管理/审批' },
            ]}
          />
          <div className="flexEnd mt16">
            <Button className="mr16" size="large" onClick={() => window.history.go(-1)}>上一步</Button>
            <Button className="mr16" size="large" type="primary" ghost>保存草稿</Button>
            <Link to="/app/activity/create"><Button type="primary" size="large">提交审批</Button></Link>
          </div>
          <Divider />
          <TagTitle>1、报名活动：信息确认</TagTitle>
          <div className={style.top}>
            <div className={style.imgBox}>
              <img src={img} alt="" />
            </div>
            <div style={{ fontSize: 16, fontWeight: 700, marginTop: 10 }}>报名活动标题</div>
          </div>
          <Divider />
          <Tabs>
            <TabPane tab="活动详情" key="1">
              <Descriptions title="" column={1} style={{ marginLeft: 80, marginRight: 80 }}>
                <Descriptions.Item label="活动时间">2019-03-15 00：00 ~ 2019-03-16 00：00</Descriptions.Item>
                <Descriptions.Item label="活动地址">上海市长宁区送红去天山西路</Descriptions.Item>
                <Descriptions.Item label="活动人数">不限</Descriptions.Item>
                <Descriptions.Item label="活动报名截止时间">2019-03-15  00:00</Descriptions.Item>
                <Descriptions.Item label="联系人/电话：">罗晓星/15669154095</Descriptions.Item>
                <Descriptions.Item label="活动详情">这里是活动说明，这里是活动说明，这里是活动说明，这里是活动说明，这里是活动说明，这里是活动说明，这里是活动说明，这里是活动说明，这里是活动说明，这里是活动说明，这里是活动说明，这里是活动说明，这里是活动说明，这里是活动说明，这里是活动说明，这里是活动说明，这里是活动说明，这里是活动说明，这里是活动说明，</Descriptions.Item>
              </Descriptions>
              <Table style={{ width: 600, marginLeft: 40 }} columns={this.columnsForm} dataSource={this.dataSourceForm} pagination={false} />
              <Divider />
              <div>奖品信息:</div>
              <Table columns={this.columns} dataSource={this.dataSource} size="small" pagination={false} />
            </TabPane>
          </Tabs>
        </ContentBox>
      </div>
    )
  }
}

export default Approve
