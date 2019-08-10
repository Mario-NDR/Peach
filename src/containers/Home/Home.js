/**
 * @summary 首页
 */
import React from 'react'
// import PropTypes from 'prop-types'

import { IntlComponent } from 'Components/Common'

import style from './style.scss'

class Home extends IntlComponent {

  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section className={style.wrapper}>
        Home
      </section>
    )
  }
}

export default Home
