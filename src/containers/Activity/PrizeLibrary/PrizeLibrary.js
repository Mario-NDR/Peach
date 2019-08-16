/**
 * @summary 奖品库管理
 */
import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { IntlComponent } from 'Components/Common'
import ContentBox from 'Components/ContentBox'

import style from './style.scss'

import PrizeTable from './PrizeTable'
import CheckRecord from './CheckRecord'

class PrizeLibrary extends IntlComponent {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className={style.prizeLibrary}>
        <ContentBox>
          <Switch>
            <Route path="/app/activity/prizeLibrary" component={PrizeTable} exact />
            <Route path="/app/activity/prizeLibrary/prizeRecord" component={CheckRecord} exact />
            <Route component={Error} />
          </Switch>
        </ContentBox>
      </div>
    )
  }
}

export default PrizeLibrary
