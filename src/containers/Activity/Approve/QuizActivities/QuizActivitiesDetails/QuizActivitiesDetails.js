/**
 * @summary 竞猜详情
 */
import React from 'react'

import { IntlComponent } from 'Components/Common'
import Bread from 'Components/Bread'
import ContentBox from 'Components/ContentBox'
import Subheader from 'Components/Subheader'

import style from './style.scss'

class QuizActivitiesDetails extends IntlComponent {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className={style.details}>
        <Bread
          items={[
            { content: '活动' },
            { content: '活动审批' },
            { content: '活动详情' },
            { content: '有奖竞猜' },
          ]}
        />
        <ContentBox>
          <Subheader>活动详情：有奖竞猜</Subheader>
        </ContentBox>
      </div>
    )
  }
}

export default QuizActivitiesDetails
