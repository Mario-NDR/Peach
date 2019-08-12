/**
 * @summary 我的活动
 */
import React from 'react'
import { Tabs } from 'antd'

import { IntlComponent } from 'Components/Common'
import Bread from 'Components/Bread'
import ContentBox from 'Components/ContentBox'
import Subheader from 'Components/Subheader'

import SignUp from './SignUp'
import Voting from './Voting'
import QuizActivities from './QuizActivities'
import LuckyDraw from './LuckyDraw'

import style from './style.scss'

const { TabPane } = Tabs

class Mine extends IntlComponent {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className={style.mine}>
        <Bread
          items={[
            { content: '活动' },
            { content: '我的活动' },
          ]}
        />
        <ContentBox>
          <Subheader>我的活动</Subheader>
          <Tabs defaultActiveKey="1">
            <TabPane tab="报名活动" key="1">
              <SignUp />
            </TabPane>
            <TabPane tab="投票活动" key="2">
              <Voting />
            </TabPane>
            <TabPane tab="竞猜活动" key="3">
              <QuizActivities />
            </TabPane>
            <TabPane tab="抽奖活动" key="4">
              <LuckyDraw />
            </TabPane>
          </Tabs>
        </ContentBox>
      </div>
    )
  }
}

export default Mine
