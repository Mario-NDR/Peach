/**
 * @summary 报名详情
 */
import React from 'react'

import { IntlComponent } from 'Components/Common'

import style from './style.scss'

class SignUpDetails extends IntlComponent {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className={style.details}>
        SignUp-Details
      </div>
    )
  }
}

export default SignUpDetails
