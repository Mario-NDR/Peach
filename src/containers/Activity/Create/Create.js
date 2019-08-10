/**
 * @summary 活动创建
 */
import React from 'react'

import { IntlComponent } from 'Components/Common'
import Bread from 'Components/Bread'
import Step from 'Components/Step'

import style from './style.scss'

class Create extends IntlComponent {

  constructor(props) {
    super(props)
    this.state = {}
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
        <div>
          <Step
            items={[
              { title: '活动类型选择' },
              { title: '活动内容配置' },
              { title: '奖品配置' },
              { title: '活动管理/审批' },
            ]}
          />
        </div>
      </div>
    )
  }
}

export default Create
