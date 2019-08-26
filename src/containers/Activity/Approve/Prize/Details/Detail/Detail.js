/**
 * @summary 抽奖详情--活动详情
 */
import React from 'react'

import { Descriptions, Table } from 'antd'

import { IntlComponent } from 'Components/Common'

import style from './style.scss'

import img1 from './images/img1.png'

class Detail extends IntlComponent {

  constructor(props) {
    super(props)
    this.state = {}
  }

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

  columnsSetting = [
    {
      title: '奖品名称',
      dataIndex: 'prizeName',
      key: 'prizeName',
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
      title: '每日出奖数',
      dataIndex: 'everyDayPrize',
      key: 'everyDayPrize',
    },
    {
      title: '中奖概率',
      dataIndex: 'probability',
      key: 'probability',
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

  dataSource = [
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

  dataSourceSetting = [
    {
      prizeName: '一等奖',
      prizeInformation: 'gt203 威尼斯小熊+礼品盒',
      everyoneQuantity: 1,
      prizeQuantity: 2000,
      money: 99,
      source: '奖品库',
      stock: '3000',
      type: '邮寄',
      everyDayPrize: 20,
      probability: '1%',
      description: '请将中奖结果展示给现场工作人员进行领奖',
    },
    {
      prizeName: '二等奖',
      prizeInformation: 'gt203 威尼斯小熊+礼品盒',
      everyoneQuantity: 1,
      prizeQuantity: 2000,
      money: 99,
      source: '奖品库',
      stock: '3000',
      type: '邮寄',
      everyDayPrize: 20,
      probability: '1%',
      description: '请将中奖结果展示给现场工作人员进行领奖',
    },
    {
      prizeName: '三等奖',
      prizeInformation: 'gt203 威尼斯小熊+礼品盒',
      everyoneQuantity: 1,
      prizeQuantity: 2000,
      money: 99,
      source: '奖品库',
      stock: '3000',
      type: '邮寄',
      everyDayPrize: 20,
      probability: '1%',
      description: '请将中奖结果展示给现场工作人员进行领奖',
    },
    {
      prizeName: '幸运奖',
      prizeInformation: 'gt203 威尼斯小熊+礼品盒',
      everyoneQuantity: 1,
      prizeQuantity: 2000,
      money: 99,
      source: '奖品库',
      stock: '3000',
      type: '邮寄',
      everyDayPrize: 20,
      probability: '1%',
      description: '请将中奖结果展示给现场工作人员进行领奖',
    },
  ]

  render() {
    return (
      <div className={style.detail}>
        <div className={style.detailDes}>
          <Descriptions title="" column={1} style={{ marginLeft: 80, marginRight: 80 }}>
            <Descriptions.Item label="活动时间">2019-03-15 00：00 ~ 2019-03-16 00：00</Descriptions.Item>
            <Descriptions.Item label="活动详情">这里是活动说明，这里是活动说明，这里是活动说明，这里是活动说明，这里是活动说明，这里是活动说明，这里是活动说明，这里是活动说明，这里是活动说明，这里是活动说明，这里是活动说明，这里是活动说明，这里是活动说明，这里是活动说明，这里是活动说明，这里是活动说明，这里是活动说明，这里是活动说明，这里是活动说明，</Descriptions.Item>
            <Descriptions.Item label="用户抽奖总次数">不限制</Descriptions.Item>
            <Descriptions.Item label="用户每天抽奖次数">2</Descriptions.Item>
            <Descriptions.Item label="每人中奖次数">1</Descriptions.Item>
          </Descriptions>
          <Descriptions title="" column={1}>
            <Descriptions.Item label="奖品信息">
              <Table columns={this.columns} dataSource={this.dataSource} size="small" pagination={false} />
            </Descriptions.Item>
          </Descriptions>
          <Descriptions title="" column={1}>
            <Descriptions.Item label="抽奖活动奖品设置">
              <Table columns={this.columnsSetting} dataSource={this.dataSourceSetting} size="small" pagination={false} />
            </Descriptions.Item>
          </Descriptions>
        </div>
      </div>
    )
  }
}

export default Detail
