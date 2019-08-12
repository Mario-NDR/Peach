/**
 * @summary 标签形状的title
 */
import React from 'react'

import { IntlComponent } from 'Components/Common'

import style from './style.scss'

class TagTitle extends IntlComponent {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className={style.tagTitle}>
        <div className={style.corner} />
        <div className={style.tag}>
          { this.props.children }
        </div>
      </div>
    )
  }
}

export default TagTitle
