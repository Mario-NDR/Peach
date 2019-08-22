import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'
import { Tag, Icon } from 'antd'

import img from './images/img.png'
import style from './style.scss'

class Item extends Component {
  render() {
    return (
      <div className={classnames('flex', style.item)}>
        <div className={style.imgBox}>
          <Link to="/app/activity/approve/vote/details">
            <img src={img} alt="" />
          </Link>
        </div>
        <div className={style.right}>
          <div className={style.title}><Link to="/app/activity/approve/vote/details">最美同事评选 </Link><Tag color="green">未开始</Tag></div>
          <div className={style.time}><Icon type="user" /> 罗晓星</div>
          <div className={style.time}><Icon type="clock-circle" /> 2019-03-26 14:00 至 2019-04-02 14:56</div>
          <div className={classnames('spaceBetween', style.operationBox)}>
            <div>
              <span className={style.label}>总投票数：<span className={style.value}>10</span></span>
              <span className={style.label}>浏览量：<span className={style.value}>12 <a><Icon type="edit" /></a></span></span>
              <span className={style.label}>投票项：<span className={style.value}>7 <a><Icon type="copy" /></a></span></span>
            </div>
            <div className={style.operations}>
              <a><Icon type="edit" />编辑</a>
              <a><Icon type="delete" />删除</a>
              <a><Icon type="copy" />复制</a>
              <a><Icon type="share-alt" />分享</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Item
