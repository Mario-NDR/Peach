/**
 * @summary 抽奖活动
 */
import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { IntlComponent } from 'Components/Common'

import Content from './Content'
import LuckyDrawPrize from './LuckyDrawPrize'
import Approve from './Approve'

import style from './style.scss'

class Prize extends IntlComponent {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className={style.prize}>
        <Switch>
          <Route path="/app/activity/create/prize" component={Content} exact />
          <Route path="/app/activity/create/prize/luckyDrawPrize" component={LuckyDrawPrize} exact />
          <Route path="/app/activity/create/prize/approve" component={Approve} exact />
          <Route component={Error} />
        </Switch>
      </div>
    )
  }
}

export default Prize
