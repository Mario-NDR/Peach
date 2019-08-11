/**
 * @summary 活动通用设置
 */
import React from 'react'
import { Tabs } from 'antd'

import { IntlComponent } from 'Components/Common'
import Bread from 'Components/Bread'
import Subheader from 'Components/Subheader'
import ContentBox from 'Components/ContentBox'

import Home from './Home'
import style from './style.scss'

const { TabPane } = Tabs

class Settings extends IntlComponent {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className={style.settings}>
        <Bread
          items={[
            { content: '活动' },
            { content: '活动通用设置' },
          ]}
        />
        <ContentBox>
          <Subheader>活动通用设置</Subheader>
          <Tabs defaultActiveKey="1">
            <TabPane tab="首页" key="1">
              <Home />
            </TabPane>
            <TabPane tab="Home+" key="2">
              Home+
            </TabPane>
            <TabPane tab="Office+" key="3">
              Office+
            </TabPane>
            <TabPane tab="荟玩" key="4">
              荟玩
            </TabPane>
          </Tabs>
        </ContentBox>
      </div>
    )
  }
}

export default Settings
