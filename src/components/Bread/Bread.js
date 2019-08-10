/**
 * @summary 面包屑导航
 */
import React from 'react'
import PropTypes from 'prop-types'
import { Breadcrumb } from 'antd'
import { Link } from 'react-router-dom'
import classnames from 'classnames'

import style from './style.scss'

class Bread extends React.Component {

  static propTypes = {
    className: PropTypes.string,
    items: PropTypes.array,
  }

  static defaultProps = {
    className: '',
    items: [],
  }

  constructor(props, context) {
    super(props, context)
    this.renderItem = this.renderItem.bind(this)
    this.renderLink = this.renderLink.bind(this)
  }

  renderItem(item) {
    return (
      <Breadcrumb.Item key={item.content} className={style.breadcrumbItem}>
        {item.content}
      </Breadcrumb.Item>
    )
  }

  renderLink(item) {
    return (
      <Breadcrumb.Item key={item.content} className={style.breadcrumbItem}>
        <Link to={item.link}>{item.content}</Link>
      </Breadcrumb.Item>
    )
  }

  render() {
    const { items, className } = this.props
    if (!items || !items.length) {
      return null
    }

    return (
      <section className={style.breadcrumbWrap}>
        <Breadcrumb className={classnames(style.breadcrumbList, className)}>
          {
            items.map((item) => {
              if (item.link) {
                return this.renderLink(item)
              } else {
                return this.renderItem(item)
              }
            })
          }
        </Breadcrumb>
      </section>
    )
  }
}

export default Bread
