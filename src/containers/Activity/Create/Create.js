/**
 * @summary 活动创建
 */
import React from 'react'
import { Radio, Button } from 'antd'

import { IntlComponent } from 'Components/Common'
import Bread from 'Components/Bread'
import Step from 'Components/Step'
import ContentBox from 'Components/ContentBox'
import Subheader from 'Components/Subheader'

import style from './style.scss'

class Create extends IntlComponent {

  constructor(props) {
    super(props)
    this.state = {
      value: 1,
    }
  }

  onTypeChange = e => {
    console.log('radio checked', e.target.value)
    this.setState({
      value: e.target.value,
    })
  }

  render() {
    return (
      <div className={style.create}>
        <Bread
          items={[
            { content: '活动' },
            { content: '活动创建' },
            { content: '活动类型选择' },
          ]}
        />
        <ContentBox>
          <Subheader>活动创建</Subheader>
          <Step
            items={[
              { title: '活动类型选择' },
              { title: '活动内容配置' },
              { title: '奖品配置' },
              { title: '活动管理/审批' },
            ]}
          />
          <div className="subtitle" style={{ marginTop: 32 }}>活动类型</div>
          <div>
            <span className={style.label}>选择活动类型：</span>
            <Radio.Group onChange={this.onTypeChange} value={this.state.value}>
              <Radio value={1}>报名活动</Radio>
              <Radio value={2}>投票活动</Radio>
              <Radio value={3}>竞猜活动</Radio>
              <Radio value={4}>抽奖活动</Radio>
            </Radio.Group>
          </div>
          <div className="flexEnd">
            <Button type="primary" size="large">下一步：活动内容配置</Button>
          </div>
        </ContentBox>
      </div>
    )
  }
}

export default Create
