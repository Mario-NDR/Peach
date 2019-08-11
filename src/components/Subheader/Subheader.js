/**
 * @summary 副标题
 */
import React from 'react'

import { IntlComponent } from 'Components/Common'

import style from './style.scss'

class Subheader extends IntlComponent {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className={style.subheader}>
        { this.props.children }
      </div>
    )
  }
}

export default Subheader
