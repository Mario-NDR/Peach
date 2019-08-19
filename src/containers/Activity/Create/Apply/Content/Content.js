/**
 * @summary 活动内容配置
 */
import React from 'react'
import PropTypes from 'prop-types'
import { Button, Divider, Form } from 'antd'
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
              <div>活动封面TODO</div>
              <FormItem
                conf={{
                  getFieldDecorator,
                  label: '活动时间',
                  type: 'DatePicker',
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
                  type: 'DatePicker',
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
            报名表单
          </Form>
          <TagTitle>3、发奖环节</TagTitle>
          <Form>
            发奖环节
          </Form>
        </ContentBox>
      </div>
    )
  }
}

export default Form.create()(Content)
