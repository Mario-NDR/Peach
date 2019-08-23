/**
 * @summary 报名详情--报名人数
 */
import React from 'react'

import { IntlComponent } from 'Components/Common'

import style from './style.scss'

class SignUpNumber extends IntlComponent {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className={style.signUpNumber}>
        SignUpNumber
      </div>
    )
  }
}

export default SignUpNumber
