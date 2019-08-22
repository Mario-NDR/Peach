/**
 * @summary 活动内容配置
 */
import React from 'react'
import PropTypes from 'prop-types'
import { Button, Divider, Form, Icon } from 'antd'
import { Link } from 'react-router-dom'

import { IntlComponent } from 'Components/Common'
import Bread from 'Components/Bread'
import Step from 'Components/Step'
import ContentBox from 'Components/ContentBox'
import Subheader from 'Components/Subheader'
import TagTitle from 'Components/TagTitle'
import FormItem from 'Components/FormItem'

import style from './style.scss'

class Content extends IntlComponent {

  static propTypes = {
    form: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div className={style.content}>
        <Bread
          items={[
            { content: '活动' },
            { content: '活动创建' },
            { content: '活动内容配置：报名活动' },
          ]}
        />
        <ContentBox>
          <Subheader>活动创建</Subheader>
          <Step
            current={1}
            items={[
              { title: '活动类型选择' },
              { title: '活动内容配置' },
              { title: '奖品配置' },
              { title: '活动管理/审批' },
            ]}
          />
          <div className="flexEnd mt16">
            <Button className="mr16" size="large" onClick={() => window.history.go(-1)}>上一步</Button>
            <Button className="mr16" size="large" type="primary" ghost>预览</Button>
            <Button className="mr16" size="large" type="primary" ghost>保存草稿</Button>
            <Link to="/app/activity/create/apply/prize"><Button type="primary" size="large">下一步：奖品配置</Button></Link>
          </div>
          <Divider />
          <TagTitle>1、报名活动：基本信息</TagTitle>
          <div>
            <Form>
              <FormItem
                conf={{
                  getFieldDecorator,
                  label: '活动标题',
                  type: 'Input',
                  dataIndex: 'title',
                  initialValue: '',
                  placeholder: '请设置您的活动标题（最多80字符）',
                  maxLength: 80,
                }}
              />
              <FormItem
                conf={{
                  getFieldDecorator,
                  label: '活动封面',
                  type: 'Upload',
                  dataIndex: 'cover',
                  draggerNode: (
                    <div align="center">
                      <div className={style.cameraIcon}><Icon type="camera" /></div>
                      <div className={style.addCover}>添加海报</div>
                      <div>一张漂亮的活动海报可以吸引更多用户报名，同时可以增加传播效果</div>
                      <div className={style.suggest}>（建议尺寸：900*525，图片小于4M）</div>
                    </div>
                  ),
                }}
              />
              <FormItem
                conf={{
                  getFieldDecorator,
                  label: '活动时间',
                  type: 'RangePicker',
                  dataIndex: 'date',
                }}
              />
              <FormItem
                conf={{
                  getFieldDecorator,
                  label: '活动地址',
                  type: 'Input',
                  dataIndex: 'address',
                  initialValue: '',
                  placeholder: '请填写活动的详细地址',
                  maxLength: 80,
                }}
              />
              <FormItem
                conf={{
                  getFieldDecorator,
                  label: '活动人数',
                  type: 'Input',
                  dataIndex: 'amount',
                  initialValue: '',
                  placeholder: '请填写活动人数',
                  maxLength: 5,
                }}
              />
              <FormItem
                conf={{
                  getFieldDecorator,
                  label: '活动报名截止时间',
                  type: 'RangePicker',
                  dataIndex: 'deadline',
                }}
              />
              <FormItem
                conf={{
                  getFieldDecorator,
                  label: '联系人/电话',
                  type: 'Input',
                  dataIndex: 'tel',
                  initialValue: '',
                  placeholder: '请填写联系人电话',
                  maxLength: 30,
                }}
              />
              <FormItem
                conf={{
                  getFieldDecorator,
                  label: '活动详情',
                  type: 'TextArea',
                  dataIndex: 'detail',
                  initialValue: '',
                  placeholder: '150字以内',
                  maxLength: 150,
                }}
              />
            </Form>
          </div>
          <TagTitle>2、报名表单</TagTitle>
          <Form>
            <FormItem
              conf={{
                getFieldDecorator,
                label: '姓名',
                type: 'Input',
                dataIndex: 'name',
                initialValue: '',
                placeholder: '请填写你的姓名',
                maxLength: 30,
              }}
            />
            <FormItem
              conf={{
                getFieldDecorator,
                label: '电话',
                type: 'Input',
                dataIndex: 'phone',
                initialValue: '',
                placeholder: '请填写你的电话',
                maxLength: 30,
              }}
            />
          </Form>
          <TagTitle>3、发奖环节</TagTitle>
          <Form>
            <FormItem
              conf={{
                getFieldDecorator,
                label: '签到发奖',
                type: 'Radio',
                dataIndex: 'signIn',
                initialValue: 'allow',
                radios: [
                  { key: 'allow', value: '允许' },
                  { key: 'notAllow', value: '不允许' },
                ],
                style: { marginBottom: 0 },
              }}
            />
            <FormItem
              conf={{
                type: 'Text',
                label: ' ',
                colon: false,
                text: '允许：单个用户可给单个选项重复投票；不允许：单个用户一天之内，不可给单个用户重复投票',
              }}
            />
            <FormItem
              conf={{
                getFieldDecorator,
                label: '票数显示',
                type: 'Radio',
                dataIndex: 'showTicketAmount',
                initialValue: 'allow',
                radios: [
                  { key: 'allow', value: '显示' },
                  { key: 'notAllow', value: '不显示' },
                ],
                style: { marginBottom: 0 },
              }}
            />
            <FormItem
              conf={{
                type: 'Text',
                label: ' ',
                colon: false,
                text: '显示：可以看见所有项目的投票数；不显示：全部不可见',
              }}
            />
            <FormItem
              conf={{
                getFieldDecorator,
                label: '投票结果',
                type: 'Radio',
                dataIndex: 'applyResult',
                initialValue: 'allow',
                radios: [
                  { key: 'allow', value: '开启' },
                  { key: 'notAllow', value: '关闭' },
                ],
                style: { marginBottom: 0 },
              }}
            />
            <FormItem
              conf={{
                type: 'Text',
                label: ' ',
                colon: false,
                text: '开启：投票排行榜所有人可见；关闭：所有人不可见',
              }}
            />
            <FormItem
              conf={{
                getFieldDecorator,
                label: '签到奖品',
                type: 'Radio',
                dataIndex: 'signInPrize',
                initialValue: 'thing',
                radios: [
                  { key: 'thing', value: '实物奖品' },
                  { key: 'score', value: '积分奖品' },
                ],
                style: { marginBottom: 0 },
              }}
            />
            <FormItem
              conf={{
                getFieldDecorator,
                label: '发放方式',
                type: 'Radio',
                dataIndex: 'giveOutType',
                initialValue: 'live',
                radios: [
                  { key: 'live', value: '现场发放' },
                  { key: 'mail', value: '邮寄' },
                ],
                style: { marginBottom: 0 },
              }}
            />
            <FormItem
              conf={{
                getFieldDecorator,
                label: ' ',
                colon: false,
                type: 'Input',
                dataIndex: 'peopleAmountLimit',
                initialValue: '',
                placeholder: '请输入领奖人数限制',
                maxLength: 30,
              }}
            />
            <FormItem
              conf={{
                getFieldDecorator,
                label: ' ',
                colon: false,
                type: 'Input',
                dataIndex: 'prizeDesc',
                initialValue: '',
                placeholder: '请输入奖品的描述',
                maxLength: 30,
              }}
            />
            <FormItem
              conf={{
                getFieldDecorator,
                label: '分享奖品',
                type: 'Radio',
                dataIndex: 'sharePrize',
                initialValue: 'off',
                radios: [
                  { key: 'off', value: '关闭' },
                  { key: 'score', value: '积分' },
                ],
                style: { marginBottom: 0 },
              }}
            />
            <FormItem
              conf={{
                getFieldDecorator,
                label: ' ',
                colon: false,
                type: 'Input',
                dataIndex: 'scoreAmount',
                initialValue: '',
                placeholder: '请输入积分数量',
                maxLength: 30,
              }}
            />
          </Form>
        </ContentBox>
      </div>
    )
  }
}

export default Form.create()(Content)
