/**
 * @summary 页面标题和说明
 */
import React from 'react'
import PropTypes from 'prop-types'
import { Divider } from 'antd'

import { IntlComponent } from 'Components/Common'

import style from './style.scss'

class PageHeader extends IntlComponent {

  static propTypes = {
    header: PropTypes.string.isRequired,
    dsc: PropTypes.string,
  }

  static defaultProps = {
    dsc: null,
  }

  constructor(props) {
    super(props)
    this.state = {}
  }

  renderDsc = () => {
    const { dsc } = this.props
    if (dsc) {
      return <p>{this.localeMessage(dsc)}</p>
    }
    return null
  }

  render() {
    return (
      <section className={style.pageHeader}>
        <h5 className={style.header}>{ this.localeMessage(this.props.header) }</h5>
        { this.renderDsc() }
        <Divider />
      </section>
    )
  }
}

export default PageHeader
