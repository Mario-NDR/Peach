/**
 * @summary 投票详情--活动详情
 */
import React from 'react'

import { Descriptions, Divider, Table } from 'antd'

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
      <div className={style.detail}>
        <div className={style.detailDes}>
          <Descriptions title="" column={1} style={{ marginLeft: 80, marginRight: 80 }}>
            <Descriptions.Item label="活动时间">2019-03-15 00：00 ~ 2019-03-16 00：00</Descriptions.Item>
            <Descriptions.Item label="活动详情">这里是活动说明，这里是活动说明，这里是活动说明，这里是活动说明，这里是活动说明，这里是活动说明，这里是活动说明，这里是活动说明，这里是活动说明，这里是活动说明，这里是活动说明，这里是活动说明，这里是活动说明，这里是活动说明，这里是活动说明，这里是活动说明，这里是活动说明，这里是活动说明，这里是活动说明，</Descriptions.Item>
            <Descriptions.Item label="用户投票总次数">不限制</Descriptions.Item>
            <Descriptions.Item label="用户每天投票次数">1</Descriptions.Item>
            <Descriptions.Item label="允许单日同一项重复投票">允许</Descriptions.Item>
            <Descriptions.Item label="票数显示">显示</Descriptions.Item>
            <Descriptions.Item label="投票结果">开启</Descriptions.Item>
            <Descriptions.Item label="投票项">
              <div style={{ display: 'flex', justifyContent: 'left' }}>
                <div>
                  <img src={img1} alt="" />
                </div>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'left' }}>
                    <div style={{ margin: 30 }}>1号选手</div>
                    <div style={{ marginTop: 30 }}>票数0</div>
                  </div>
                  <div style={{ marginLeft: 20 }}>感谢为我投上您珍贵的一票</div>
                </div>
              </div>
            </Descriptions.Item>
          </Descriptions>
          <Divider />
          <Descriptions title="" column={1}>
            <Descriptions.Item label="奖品信息">
              <Table columns={this.columns} dataSource={this.dataSource} size="small" pagination={false} />
            </Descriptions.Item>
          </Descriptions>
        </div>
      </div>
    )
  }
}

export default Detail
