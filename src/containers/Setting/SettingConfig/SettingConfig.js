/**
 * @summary 系统配置 
 */
import React from 'react'
import { Button, Message } from 'antd'
// import PropTypes from 'prop-types'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import axios from 'axios'
import moment from 'moment'

import { IntlComponent } from 'Components/Common'
import ContentBox from 'Components/ContentBox'
import Bread from 'Components/Bread'
import Subheader from 'Components/Subheader'

import * as actions from '../action'
import style from './style.scss'

class Visual extends IntlComponent {

  static propTypes = {}

  constructor(props) {
    super(props)
    this.state = {
      buttonLoading: false,
    }
  }

  componentDidMount() {}

  // 日志清理
  handleClearLog = async () => {
    const { status } = await axios.post('/api/db')
    if (status >= 200 && status < 400) {
      Message.success('日志清理完成')
    } else {
      Message.error('日志清理失败')
    }
  }

  // 日志下载
  handleDownloadLog = () => {
    this.setState({ buttonLoading: true })
    axios
      .get('/api/downloadlog')
      .then(res => {
        const a = document.createElement('a')
        const url = window.URL.createObjectURL(new Blob([ res.data ]))
        const filename = `log-${moment().locale('zh-cn').format('YYYY-MM-DD')}.txt`
        a.href = url
        a.download = filename
        a.click()
        window.URL.revokeObjectURL(url)
        this.setState({ buttonLoading: false })
        Message.success('日志下载完成')
      })
      .catch(() => {
        Message.error('日志下载失败')
      })
  }

  // handleDarkMode = () => {
  //   console.info('黑暗模式')
  // }

  render() {
    return (
      <div className={style.setting}>
        <Bread
          items={[ { content: '系统配置' }, { content: '配置项' } ]}
        />
        <ContentBox>
          <Subheader>配置项</Subheader>
        </ContentBox>
        <ContentBox>
          <div>
            <Button type="primary" onClick={this.handleClearLog}>入侵防御日志清理</Button>
            <Button
              loading={this.state.buttonLoading}
              type="primary"
              style={{ marginLeft: 20 }}
              onClick={this.handleDownloadLog}
            >
              系统运行日志下载
            </Button>
            {/* <Button
              style={{ marginLeft: 20 }}
              type="primary"
              onClick={this.handleDarkMode}
            >
              暗夜模式
            </Button> */}
          </div>
        </ContentBox>
      </div>
    )
  }
}

function mapStateToProps() {
  return {}
}


function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Visual)
