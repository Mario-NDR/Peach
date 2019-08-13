/**
 * @jinghh 活动管理 概况
 */
import React from 'react'
import PropTypes from 'prop-types'
import { Icon, Button } from 'antd'
import { Link } from 'react-router-dom'

import { IntlComponent } from 'Components/Common'
import ContentBox from 'Components/ContentBox'
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
    name: '报名活动',
    type: 'line',
    data: mockValues1,
  },
  {
    name: '投票活动',
    type: 'line',
    data: mockValues2,
  },
  {
    name: '抽奖活动',
    type: 'line',
    data: mockValues3,
  },
  {
    name: '竞猜活动',
    type: 'line',
    data: mockValues4,
  },
]

const OverviewItem = ({ title, number, type }) => (
  <div className={style.toSignUp}>
    <div className={style.icon}><Icon type="form" /> { title }</div>
    <div className={style.number}>{ number }个</div>
    <div style={{ marginTop: 10 }} align="center">
      <Link to={`/app/activity/create/${type}`}><Button type="primary">立即创建</Button></Link>
    </div>
  </div>
)
OverviewItem.propTypes = {
  title: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
}

class Home extends IntlComponent {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <ContentBox>
        <Subheader>概况</Subheader>
        <div className={style.topDetail}>
          <OverviewItem title="报名活动" number={32} type="apply" />
          <OverviewItem title="投票活动" number={15} type="vote" />
          <OverviewItem title="竞猜活动" number={23} type="quiz" />
          <OverviewItem title="抽奖活动" number={17} type="prize" />
        </div>
        <Subheader>趋势图</Subheader>
        <div className={style.bottomDetail}>
          <MutiLine xAxisData={xAxisData} series={series} />
        </div>
      </ContentBox>
    )
  }
}

export default Home
