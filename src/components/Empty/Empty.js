/**
 * @summary
 */
import React from 'react'
import PropTypes from 'prop-types'

import { IntlComponent } from 'Components/Common'

import style from './style.scss'

class Model extends IntlComponent {

  static propTypes = {
    style: PropTypes.object,
  }

  static defaultProps = {
    style: null,
  }

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className={style.empty} style={this.props.style}>
        暂无数据
      </div>
    )
  }
}

export default Model
