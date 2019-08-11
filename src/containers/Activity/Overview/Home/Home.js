/**
 * @jinghh 活动管理 概况
 */
import React from 'react'

import { IntlComponent } from 'Components/Common'
import { Icon, Button } from 'antd'

import style from './style.scss'

class Home extends IntlComponent {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className={style.overview}>
        <div className={style.top}>
          <div className={style.dv} />
          <div className={style.title}>概况</div>
        </div>
        <div className={style.topDetail}>
          <div className={style.toSignUp}>
            <div className={style.icon}><Icon type="form" /> 报名活动</div>
            <div className={style.number}>10个</div>
            <div style={{ marginTop: 10 }} align="center">
              <Button type="primary">立即创建</Button>
            </div>
          </div>
          <div className={style.vote}>
            <div className={style.icon}><Icon type="form" /> 投票活动</div>
            <div className={style.number}>10个</div>
            <div style={{ marginTop: 10 }} align="center">
              <Button type="primary">立即创建</Button>
            </div>
          </div>
          <div className={style.guess}>
            <div className={style.icon}><Icon type="form" /> 竞猜活动</div>
            <div className={style.number}>10个</div>
            <div style={{ marginTop: 10 }} align="center">
              <Button type="primary">立即创建</Button>
            </div>
          </div>
          <div className={style.luckyDraw}>
            <div className={style.icon}><Icon type="form" /> 抽奖活动</div>
            <div className={style.number}>10个</div>
            <div style={{ marginTop: 10 }} align="center">
              <Button type="primary">立即创建</Button>
            </div>
          </div>
        </div>
        <div className={style.bottom}>
          <div className={style.dv} />
          <div className={style.title}>趋势图</div>
        </div>
        <div className={style.bottomDetail}>123</div>
      </div>
    )
  }
}

export default Home
