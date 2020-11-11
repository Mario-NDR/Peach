/**
 * @summary 内容容器 - padding:16px; background: #fff;
 */
import React from 'react'

import { IntlComponent } from 'Components/Common'

import style from './style.scss'

class ContentBox extends IntlComponent {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className={style.contentBox}>
        { this.props.children }
      </div>
    )
  }
}

export default ContentBox
