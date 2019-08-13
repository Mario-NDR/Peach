/**
 * @summary 提交审批
 */
import React from 'react'
import { Button, Divider } from 'antd'
import { Link } from 'react-router-dom'

import { IntlComponent } from 'Components/Common'
import Bread from 'Components/Bread'
import Step from 'Components/Step'
import ContentBox from 'Components/ContentBox'
import Subheader from 'Components/Subheader'
import TagTitle from 'Components/TagTitle'

import style from './style.scss'

class Approve extends IntlComponent {

  constructor(props) {
    super(props)
    this.state = {}
  }

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
          <div>
            我是表单
          </div>
        </ContentBox>
      </div>
    )
  }
}

export default Approve
