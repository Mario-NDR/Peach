/**
 * @summary 活动管理-活动审批
 */
import React from 'react'

import { IntlComponent } from 'Components/Common'
import { Button, Divider, Tabs, Descriptions, Table, Icon, Checkbox, Modal, Input } from 'antd'

import Bread from 'Components/Bread'
import Step from 'Components/Step'
import ContentBox from 'Components/ContentBox'
import Subheader from 'Components/Subheader'
import TagTitle from 'Components/TagTitle'

import img from './images/img.jpg'
import style from './style.scss'

const { TabPane } = Tabs
const { TextArea } = Input
// const { Item } = Descriptions

class Lotus extends IntlComponent {

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

  // 确认
  handleOk = (e) => {
    console.log(e)
    this.setState({
      visible: false,
    })
  }

  // 取消
  handleCancel = (e) => {
    console.log(e)
    this.setState({
      visible: false,
    })
  }

  columns = [
    {
      title: '发奖环节',
      dataIndex: 'link',
    },
    {
      title: '奖品信息',
      dataIndex: 'res',
    },
    {
      title: '每人发放数量',
      dataIndex: 'quantity',
    },
    {
      title: '奖品数量',
      dataIndex: 'prizeQuantity',
    },
    {
      title: '奖品单价',
      dataIndex: 'money',
    },
    {
      title: '奖品来源',
      dataIndex: 'source',
    },
    {
      title: '奖品库库存',
      dataIndex: 'stock',
    },
    {
      title: '发奖方式',
      dataIndex: 'way',
    },
    {
      title: '兑奖说明',
      dataIndex: 'instructions',
    },
    {
      title: '奖品图片',
      dataIndex: 'img',
    },
  ]

  data = [
    {
      key: '1',
      link: '分享',
      res: '威尼斯小熊',
      quantity: 1,
      prizeQuantity: 2000,
      money: 99,
      source: '奖品库',
      stock: 3000,
      way: '邮寄',
      instructions: '现场工作人员兑奖',
      img: '这是奖品图片',
    },
    {
      key: '2',
      link: '分享',
      res: '威尼斯小熊',
      quantity: 1,
      prizeQuantity: 2000,
      money: 99,
      source: '奖品库',
      stock: 3000,
      way: '邮寄',
      instructions: '现场工作人员兑奖',
      img: '这是奖品图片',
    },
    {
      key: '3',
      link: '分享',
      res: '威尼斯小熊',
      quantity: 1,
      prizeQuantity: 2000,
      money: 99,
      source: '奖品库',
      stock: 3000,
      way: '邮寄',
      instructions: '现场工作人员兑奖',
      img: '这是奖品图片',
    },
    {
      key: '4',
      link: '分享',
      res: '威尼斯小熊',
      quantity: 1,
      prizeQuantity: 2000,
      money: 99,
      source: '奖品库',
      stock: 3000,
      way: '邮寄',
      instructions: '现场工作人员兑奖',
      img: '这是奖品图片',
    },
  ]


  render() {
    return (
      <div className={style.lotus}>
        <Bread
          items={[
            { content: '活动' },
            { content: '活动管理' },
            { content: '活动审批' },
          ]}
        />
        <ContentBox>
          <Subheader>活动审批</Subheader>
          <Step
            current={3}
            items={[
              { title: '活动类型选择' },
              { title: '活动内容配置' },
              { title: '奖品配置' },
              { title: '提交审批' },
            ]}
          />
        </ContentBox>
        <ContentBox>
          <Divider />
          <div className={style.operation} align="right">
            <Button size="large" onClick={() => { window.history.go(-1) }}>返回</Button>
            <Button size="large" onClick={this.showModal}>审批不通过</Button>
            <Modal
              title="活动审批 - 审批不通过"
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
            >
              <span>请确认活动内容与活动内容信息均已审核完毕。</span>
              <TextArea cols="64" rows="10" placeholder="请输入审批意见，140字以内" />
            </Modal>
            <Button size="large" type="primary" onClick={this.showModal}>审批通过</Button>
            <Modal
              title="活动审批 - 审批通过"
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
            >
              <span>请确认活动内容与活动内容信息均已审核完毕。</span>
              <TextArea cols="64" rows="10" placeholder="请输入审批意见，140字以内" />
            </Modal>
          </div>
        </ContentBox>
        <ContentBox>
          <TagTitle>活动审批：活动内容审核</TagTitle>
          <div className={style.heading}>
            <div className={style.imgBox}>
              <img src={img} alt="" />
            </div>
            <div className={style.title}>社区活动之免费洗车</div>
          </div>
          <Button style={{ marginLeft: 1000 }}>显示确认对话框</Button>
          <Divider />
          <Tabs defaultActiveKey="1">
            <TabPane tab="活动详情" key="1">
              <div>
                <Descriptions title="" column={1}>
                  <Descriptions.Item label="活动时间">2019-03-15 00：00 ~ 2019-03-16 00：00</Descriptions.Item>
                  <Descriptions.Item label="活动详情">这里是活动说明，这里是活动说明，这里是活动说明，这里是活动说明，这里是活动说明，这里是活动说明，这里是活动说明，这里是活动说明，这里是活动说明，这里是活动说明，这里是活动说明，这里是活动说明，这里是活动说明，这里是活动说明，这里是活动说明，这里是活动说明，这里是活动说明，这里是活动说明，这里是活动说明，</Descriptions.Item>
                  <Descriptions.Item label="用户抽奖总次数">不限制</Descriptions.Item>
                  <Descriptions.Item label="用户每天抽奖次数">2</Descriptions.Item>
                  <Descriptions.Item label="每人中奖次数">1</Descriptions.Item>
                </Descriptions>
              </div>
              <div style={{ marginTop: 20 }}>
                奖品信息：
                <Table columns={this.columns} dataSource={this.data} pagination={false} />
              </div>
              <div style={{ marginTop: 20 }}>
                抽奖活动奖品设置：
                <Table columns={this.columns} dataSource={this.data} pagination={false} />
              </div>
            </TabPane>
          </Tabs>
          <div style={{ marginTop: 20 }}>
            <TagTitle>活动审批：预算审核</TagTitle>
            <div>
              <Descriptions title="" column={1}>
                <Descriptions.Item label="活动预算">10000</Descriptions.Item>
                <Descriptions.Item label="奖品成本">9800</Descriptions.Item>
                <Descriptions.Item label="奖品库奖品成本">7600</Descriptions.Item>
                <Descriptions.Item label={(<span>预算审批文件下载</span>)}>
                  <div>
                    <Checkbox>文件名称1.rar</Checkbox>
                    <a href="#">
                      <Icon type="download" /> 下载文件
                    </a>
                    <br />
                    <Checkbox>文件名称2.rar</Checkbox>
                    <a href="#">
                      <Icon type="download" /> 下载文件
                    </a>
                    <br />
                    <Checkbox>文件名称3.rar</Checkbox>
                    <a href="#">
                      <Icon type="download" /> 下载文件
                    </a>
                  </div>
                </Descriptions.Item>
              </Descriptions>
            </div>
          </div>
        </ContentBox>
      </div>
    )
  }
}

export default Lotus
