/**
 * @summary 活动管理/审批
 */
import React from 'react'
import { Tabs } from 'antd'

import { IntlComponent } from 'Components/Common'
import Bread from 'Components/Bread'
import ContentBox from 'Components/ContentBox'
import Subheader from 'Components/Subheader'

import Apply from './Apply'
import Vote from './Vote'
import Quiz from './Quiz'
import Prize from './Prize'

import style from './style.scss'

const { TabPane } = Tabs

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
            { content: '活动审批' },
          ]}
        />
        <ContentBox>
          <Subheader>活动审批</Subheader>
          <Tabs defaultActiveKey="1">
            <TabPane tab="报名活动" key="1">
              <Apply />
            </TabPane>
            <TabPane tab="投票活动" key="2">
              <Vote />
            </TabPane>
            <TabPane tab="竞猜活动" key="3">
              <Quiz />
            </TabPane>
            <TabPane tab="抽奖活动" key="4">
              <Prize />
            </TabPane>
          </Tabs>
        </ContentBox>
      </div>
    )
  }
}

export default Approve
