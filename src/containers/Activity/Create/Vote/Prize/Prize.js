/**
 * @summary 奖品配置
 */
import React from 'react'
import PropTypes from 'prop-types'
import { Button, Divider, Form, Upload, Icon, Table } from 'antd'
import { Link } from 'react-router-dom'

import { IntlComponent } from 'Components/Common'
import Bread from 'Components/Bread'
import Step from 'Components/Step'
import ContentBox from 'Components/ContentBox'
import Subheader from 'Components/Subheader'
import TagTitle from 'Components/TagTitle'
import FormItem from 'Components/FormItem'

import style from './style.scss'

class Prize extends IntlComponent {

  static propTypes = {
    form: PropTypes.object.isRequired,
  }

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
      dataIndex: 'res',
      key: 'res',
    },
    {
      title: '每人发放数量',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: '奖品数量',
      dataIndex: 'prizeAmount',
      key: 'prizeAmount',
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
      key: 'img',
      render: () => {
        return (
          <a href="#">点击上传图片</a>
        )
      },
    },
    {
      title: '操作',
      key: 'operation',
      render: () => {
        return (
          <div>
            <a href="#" style={{ marginRight: 10 }}>编辑</a>
            <a href="#">开启</a>
          </div>
        )
      },
    }
  ]

  dataSource = [
    {
      key: 1,
      link: '分享',
      res: 'gt203 威尼斯小熊+礼品盒',
      amount: 1,
      prizeAmount: 2000,
      money: 99,
      source: '奖品库',
      stock: 3000,
      type: '邮寄',
      description: '凭兑奖券系现场工作人员兑奖',
    },
    {
      key: 2,
      res: '积分',
      amount: 500,
      prizeAmount: 200000,
      money: 0.1,
      source: '奖品库',
      stock: '无限制',
      type: 'APP发放',
      description: '积分已发放，请至我的积分中查看',
    },
  ]


  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div className={style.prize}>
        <Bread
          items={[
            { content: '活动' },
            { content: '活动创建' },
            { content: '奖品配置：投票活动' },
          ]}
        />
        <ContentBox>
          <Subheader>活动创建</Subheader>
          <Step
            current={2}
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
            <Link to="/app/activity/create/vote/approve"><Button type="primary" size="large">下一步：提交审批</Button></Link>
          </div>
          <Divider />
          {/* TODO */}
          <div>点击上传图片，编辑，开启，强退弹框TODO</div>
          <TagTitle>1、投票活动：预算设置</TagTitle>
          <div>
            <Form>
              <FormItem
                conf={{
                  getFieldDecorator,
                  label: '活动预算',
                  type: 'Input',
                  dataIndex: 'title',
                  initialValue: '10000',
                  placeholder: '',
                  maxLength: 80,
                }}
              />
              <Form.Item
                // {...layout}
                label="上传预算审批文件："
                extra="支持文件格式：.rar .zip .doc .docx .pdf .png .jpg，单个文件不能超过2M"
                style={{ marginLeft: 170, display: 'flex', justifyContent: 'space-betwoon' }}
              >
                {getFieldDecorator('files_names')(
                  <Upload style={{ paddingLeft: 0 }} accept=".rar, .zip, .doc, .docx, .pdf, .png, .jpg">
                    <Button type="primary">
                      <Icon type="upload" /> 选择文件
                    </Button>
                  </Upload>
                )}
                <Button
                  type="primary"
                  // onClick={this.handleStart}
                  // disabled={fileList.length === 0}
                  // loading={uploading}
                  style={{ marginTop: 10 }}
                >
                  开始上传
                </Button>
              </Form.Item>
            </Form>
          </div>
          <TagTitle>2、投票活动：奖品设置</TagTitle>
          <Table columns={this.columns} dataSource={this.dataSource} size="small" pagination={false} />
        </ContentBox>
      </div>
    )
  }
}

export default Form.create()(Prize)
