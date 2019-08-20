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
            { content: '活动内容配置：抽奖活动' },
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
            <Link to="/app/activity/create/prize/luckyDrawPrize"><Button type="primary" size="large">下一步：奖品配置</Button></Link>
          </div>
          <Divider />
          <TagTitle>1、抽奖活动：基本信息</TagTitle>
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
          <TagTitle>2、抽奖设置</TagTitle>
          <Form>
            <FormItem
              conf={{
                getFieldDecorator,
                label: '用户抽奖总次数',
                type: 'Input',
                dataIndex: 'total',
                initialValue: '',
                placeholder: '不限制',
                maxLength: 80,
              }}
            />
            <FormItem
              conf={{
                getFieldDecorator,
                label: '用户每天抽奖次数',
                type: 'Input',
                dataIndex: 'everydayNumber',
                initialValue: '',
                placeholder: '',
                maxLength: 80,
              }}
            />
            <FormItem
              conf={{
                getFieldDecorator,
                label: '每人中奖次数',
                type: 'Input',
                dataIndex: 'everyoneNumber',
                initialValue: '',
                placeholder: '',
                maxLength: 80,
              }}
            />
          </Form>
        </ContentBox>
      </div>
    )
  }
}

export default Form.create()(Content)
