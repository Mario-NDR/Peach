/**
 * @summary map wrapper
 */
import React from 'react'

import { IntlComponent } from 'Components/Common'

import style from './style.scss'

class BorderBox extends IntlComponent {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className={style.borderBox}>
        { this.props.children }

        {/* <div className={style.dot1} />
        <div className={style.dot2} />
        <div className={style.dot3} />
        <div className={style.dot4} /> */}
      </div>
    )
  }
}

export default BorderBox
