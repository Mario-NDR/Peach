import React, { Component } from 'react'
import classnames from 'classnames'
import { Tag, Icon } from 'antd'

import img from './images/img.png'
import style from './style.scss'

class Item extends Component {
  render() {
    return (
      <div className={classnames('flex', style.item)}>
        <div className={style.imgBox}>
          <img src={img} alt="" />
        </div>
        <div className={style.right}>
          <div className={style.title}>幸运大抽奖 <Tag color="green">未开始</Tag></div>
          <div className={style.time}><Icon type="clock-circle" /> 2019-03-26 14:00 至 2019-04-02 14:56</div>
          <div className={classnames('spaceBetween', style.operationBox)}>
            <div>
              <span className={style.label}>总参与人数：<span className={style.value}>100</span></span>
              <span className={style.label}>总参与次数：<span className={style.value}>200</span></span>
              <span className={style.label}>总中奖人数：<span className={style.value}>10</span></span>
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
