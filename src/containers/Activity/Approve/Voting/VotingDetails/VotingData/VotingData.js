/**
 * @summary 投票详情--活动数据
 */
import React from 'react'

import { IntlComponent } from 'Components/Common'

import style from './style.scss'

class VotingData extends IntlComponent {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className={style.votingData}>
        VotingData
      </div>
    )
  }
}

export default VotingData
