/**
 * @summary 审批
 */
import React from 'react'

import { IntlComponent } from 'Components/Common'
import { Button } from 'antd'

import { NavLink } from 'react-router-dom'

import Bread from 'Components/Bread'
import Step from 'Components/Step'
import ContentBox from 'Components/ContentBox'
import Subheader from 'Components/Subheader'

import style from './style.scss'

class Lotus extends IntlComponent {

  constructor(props) {
    super(props)
    this.state = {}
  }

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
            items={[
              { title: '活动类型选择' },
              { title: '活动内容配置' },
              { title: '奖品配置' },
              { title: '提交审批' },
            ]}
          />
        </ContentBox>
        <ContentBox>
          <div className={style.operation} align="right">
            <NavLink to="/app/activity/approve">
              <Button size="large">返回</Button>
            </NavLink>
            <Button size="large">审批不通过</Button>
            <Button size="large" type="primary">审批通过</Button>
          </div>
        </ContentBox>
        <ContentBox>
          <div className={style.title}>活动审批：活动内容审核</div>
        </ContentBox>
      </div>
    )
  }
}

export default Lotus
