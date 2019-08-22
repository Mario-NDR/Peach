/**
 * @summary 投票详情
 */
import React from 'react'

import { IntlComponent } from 'Components/Common'

import style from './style.scss'

class VotingDetails extends IntlComponent {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className={style.details}>
        Voting-Details
      </div>
    )
  }
}

export default VotingDetails
