/**
 * @jinghh 活动管理 概况
 */
import React from 'react'
import PropTypes from 'prop-types'
import { Icon, Button } from 'antd'

import { IntlComponent } from 'Components/Common'
import ContentBox from 'Components/ContentBox'
import Subheader from 'Components/Subheader'

import style from './style.scss'

const OverviewItem = ({ title, number }) => (
  <div className={style.toSignUp}>
    <div className={style.icon}><Icon type="form" /> { title }</div>
    <div className={style.number}>{ number }个</div>
    <div style={{ marginTop: 10 }} align="center">
      <Button type="primary">立即创建</Button>
    </div>
  </div>
)
OverviewItem.propTypes = {
  title: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
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
          <OverviewItem title="报名活动" number={10} />
          <OverviewItem title="投票活动" number={10} />
          <OverviewItem title="竞猜活动" number={10} />
          <OverviewItem title="抽奖活动" number={10} />
        </div>
        <Subheader>趋势图</Subheader>
        <div className={style.bottomDetail}>趋势图</div>
      </ContentBox>
    )
  }
}

export default Home
