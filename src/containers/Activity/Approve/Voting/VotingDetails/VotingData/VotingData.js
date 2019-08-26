/**
 * @summary 投票详情--活动数据
 */
import React from 'react'
import { Icon } from 'antd'

import { IntlComponent } from 'Components/Common'
import Subheader from 'Components/Subheader'
import { MutiLine } from 'Components/Charts'
import { genRandomNum } from 'Utils/number'

import style from './style.scss'

const xAxisData = [ '2019-02-01', '2019-02-02', '2019-02-03', '2019-02-04', '2019-02-05', '2019-02-06', '2019-02-07', '2019-02-08', '2019-02-09', '2019-02-10' ]

const mockValues1 = []
const mockValues2 = []
const mockValues3 = []
const mockValues4 = []
for (let i = 0; i < 10; ++i) {
  mockValues1.push(genRandomNum(1, 30))
  mockValues2.push(genRandomNum(1, 40))
  mockValues3.push(genRandomNum(1, 50))
  mockValues4.push(genRandomNum(1, 35))
}

const series = [
  {
    name: '活动一投票数',
    type: 'line',
    data: mockValues1,
  },
  {
    name: '活动二投票数',
    type: 'line',
    data: mockValues2,
  },
  {
    name: '活动三投票数',
    type: 'line',
    data: mockValues3,
  },
  {
    name: '活动四投票数',
    type: 'line',
    data: mockValues4,
  },
]

class VotingData extends IntlComponent {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className={style.votingData}>
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
        <div>
          <MutiLine xAxisData={xAxisData} series={series} />
        </div>
      </div>
    )
  }
}

export default VotingData
