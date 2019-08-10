/**
 * @summary 模板组件，新建组件时可复制此文件夹，改名即可
 */
import React from 'react'
// import PropTypes from 'prop-types'

import { IntlComponent } from 'Components/Common'

import style from './style.scss'

class Model extends IntlComponent {

  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section className={style.wrapper}>
        Model
      </section>
    )
  }
}

export default Model
