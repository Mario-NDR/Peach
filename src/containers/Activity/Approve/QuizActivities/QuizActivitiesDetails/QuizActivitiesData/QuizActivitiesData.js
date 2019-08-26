/**
 * @summary 竞猜详情--活动数据
 */
import React from 'react'
import { Icon } from 'antd'

import { IntlComponent } from 'Components/Common'
import Subheader from 'Components/Subheader'
import { Bar, Pie } from 'Components/Charts'

import style from './style.scss'

const data = [
  { name: '1月', value: 2895 },
  { name: '2月', value: 3475 },
  { name: '3月', value: 1745 },
  { name: '4月', value: 2556, selected: true },
]

class QuizActivitiesData extends IntlComponent {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className={style.quizActivitiesData}>
        <div className="flex mb16">
          <div className={style.dataItem}>
            <div className={style.dataItemLabel}>总投票数</div>
            <div className={style.dataItemValue}>126,560</div>
          </div>
          <div className={style.dataItem}>
            <div className={style.dataItemLabel}>浏览量</div>
            <div className={style.dataItemValue}>5660<span><Icon type="edit" className={style.icon} /></span></div>
          </div>
          <div className={style.dataItem}>
            <div className={style.dataItemLabel}>投票项</div>
            <div className={style.dataItemValue}>60<span><Icon type="file" className={style.icon} /></span></div>
          </div>
        </div>
        <Subheader>数据查看</Subheader>
        <div><Bar /></div>
        <div>
          <Pie
            width={450}
            data={data}
            options={{
              color: [ '#3e9efc', '#37cbcb', '#985ae0', '#f2607a', '#4ccc78', '#f9d447' ],
              radius: [ '40%', '60%' ],
              textStyle: { color: '#333', fontSize: 16 },
            }}
          />
        </div>
      </div>
    )
  }
}

export default QuizActivitiesData
