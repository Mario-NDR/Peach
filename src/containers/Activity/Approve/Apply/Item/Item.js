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
          <Link to="/app/activity/approve/apply/details">
            <img src={img} alt="" />
          </Link>
        </div>
        <div className={style.right}>
          <div className={style.title}><Link to="/app/activity/approve/apply/details">社区活动之免费洗车 </Link><Tag color="green">未开始</Tag></div>
          <div className={style.time}><Icon type="clock-circle" /> 今天 14:50 至 17:30</div>
          <div className={style.time}><Icon type="environment" /> 北京市朝阳区</div>
          <div className={style.time}><Icon type="user" /> 罗晓星</div>
          <div className={classnames('spaceBetween', style.operationBox)}>
            <div>
              <span className={style.label}>
                报名：
                <Link to={{ pathname: '/app/activity/approve/apply/details/applyCount', state: { active: 'applyCount' } }}>
                  <span className={style.value}>6</span>
                </Link>
              </span>
              <span className={style.label}>
                留言：
                <Link to={{ pathname: '/app/activity/approve/apply/details/message', state: { active: 'message' } }}>
                  <span className={style.value}>3</span>
                </Link>
              </span>
              <span className={style.label}>浏览：<span className={style.value}>19</span></span>
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
