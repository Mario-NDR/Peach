/**
 * 展开面板
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Icon } from 'antd'

import style from './style.scss'

class Dresser extends Component {

  static propTypes = {
    fields: PropTypes.array,
    ellipsis: PropTypes.bool,
  }

  static defaultProps = {
    fields: [],
    ellipsis: false,
  }

  constructor(props) {
    super(props)
    this.state = {
      show: false,
    }
  }

  renderContent = () => {
    const fields = [ ...this.props.fields ]
    const { ellipsis } = this.props
    if (_.isArray(fields)) {
      if (_.isEmpty(fields)) {
        return '-'
      }

      if (fields.length < 2) {
        return <div className={ellipsis && style.ellipsis} title={fields[0]}>{fields[0]}</div>
      }

      if (fields.length > 1) {
        if (this.state.show) {
          return (
            <section>
              {
                fields.map((item, index) => (
                  <div key={index} className={ellipsis && style.ellipsis} title={item}>{item}</div>
                ))
              }
              <div><Icon className={style.icon} onClick={this.toggleShow} type="up" /></div>
            </section>
          )
        } else {
          return (
            <section>
              <div className={ellipsis && style.ellipsis} title={fields[0]}>{fields[0]}</div>
              <div><Icon className={style.icon} onClick={this.toggleShow} type="down" /></div>
            </section>
          )
        }
      }
    }
  }

  toggleShow = () => {
    const { show } = this.state
    this.setState({ show: !show })
  }

  render() {
    return (
      <section>{ this.renderContent() }</section>
    )
  }
}

export default Dresser
