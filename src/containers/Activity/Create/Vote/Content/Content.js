/**
 * @summary 活动内容配置
 */
import React from 'react'
import PropTypes from 'prop-types'
import { Button, Divider, Form, Radio, } from 'antd'
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
            { content: '活动内容配置：投票活动' },
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
            <Link to="/app/activity/create/vote/prize"><Button type="primary" size="large">下一步：奖品配置</Button></Link>
          </div>
          <Divider />
          <TagTitle>1、投票活动：基本信息</TagTitle>
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
              {/* 活动封面TODO */}
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
          <TagTitle>2、投票设置</TagTitle>
          <div>
            <Form>
              <FormItem
                conf={{
                  getFieldDecorator,
                  label: '用户投票总次数',
                  type: 'Input',
                  dataIndex: 'count',
                  initialValue: '',
                  placeholder: '不限制',
                  maxLength: 80,
                }}
              />
              <FormItem
                conf={{
                  getFieldDecorator,
                  label: '用户每天投票次数',
                  type: 'Input',
                  dataIndex: 'everyDayCount',
                  initialValue: '',
                  placeholder: '1',
                  maxLength: 80,
                }}
              />
              <Form.Item label="允许单日同一项重复投票：" style={{ marginLeft: 128, display: 'flex', justifyContent: 'space-betwoon' }}>
                {getFieldDecorator('repeat')(
                  <Radio.Group>
                    <Radio value="yes">允许</Radio>
                    <Radio value="no">不允许</Radio><br />
                    <span style={{ fontSize: 12 }}>允许：单个用户可给单个选项重复投票；不允许：单个用户一天之内，不可给单个用户重复投票</span>
                  </Radio.Group>,
                )}
              </Form.Item>
              <Form.Item label="票数显示：" style={{ marginLeft: 225, display: 'flex', justifyContent: 'space-betwoon' }}>
                {getFieldDecorator('show')(
                  <Radio.Group>
                    <Radio value="yes">显示</Radio>
                    <Radio value="no">不显示</Radio><br />
                    <span style={{ fontSize: 12 }}>显示：可以看见所有项目的投票数；不显示：全部不可见</span>
                  </Radio.Group>
                )}
              </Form.Item>
              <Form.Item label="投票结果：" style={{ marginLeft: 225, display: 'flex', justifyContent: 'space-betwoon' }}>
                {getFieldDecorator('res')(
                  <Radio.Group>
                    <Radio value="yes">开启</Radio>
                    <Radio value="no">关闭</Radio><br />
                    <span style={{ fontSize: 12 }}>开启：投票排行榜所有人可见；关闭：所有人不可见</span>
                  </Radio.Group>
                )}
              </Form.Item>
              {/* 添加投票项TODO */}
              <div>添加投票项TODO</div>
            </Form>
          </div>
        </ContentBox>
      </div>
    )
  }
}

export default Form.create()(Content)
