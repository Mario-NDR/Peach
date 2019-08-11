/**
 * @jinghh 活动管理 概况
 */
import React from 'react'

import { IntlComponent } from 'Components/Common'
import { Icon } from 'antd'

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
          <Icon type="form" />
          <span style={{ marginLeft: 15 }}>报名活动</span>
          </div>
          <div className={style.vote}>2</div>
          <div className={style.guess}>3</div>
          <div className={style.luckyDraw}>4</div>
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
