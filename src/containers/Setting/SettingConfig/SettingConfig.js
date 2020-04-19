/**
 * @summary 系统配置 
 */
import React from 'react'
import { Button, Message, Form, Input, Divider, Select, Icon, Tooltip } from 'antd'
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

const formItemLayout = {
  labelCol: {
    xs: { span: 8 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 8 },
    sm: { span: 8 },
  },
}

const { Option } = Select

const dbStatusMap = {
  ready: '清理程序空闲',
  'waiting process': '等待清理',
  running: '正在清理',
}

class Visual extends IntlComponent {

  static propTypes = {}

  constructor(props) {
    super(props)
    this.state = {
      buttonLoading: false,
    }
  }

  async componentDidMount() {
    this.props.actions.getDbStatus()
    this.props.actions.getVersion({ operation: 'check' })
    const { form: { setFieldsValue } } = this.props
    const { data } = await axios.get('/api/setting')
    setFieldsValue({
      heartbeat_time: data.heartbeat_time.substring(0, data.heartbeat_time.length - 1),
      max_logfile_num: data.max_logfile_num,
      prefix: data.heartbeat_time.charAt(data.heartbeat_time.length - 1)
    })
  }

  // 日志清理
  handleClearLog = async () => {
    const { status } = await axios.post('/api/db')
    this.props.actions.getDbStatus()
    if (status >= 200 && status < 400) {
      Message.success('等待清理')
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

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields(async (err, values) => {
      const payload = {
        max_logfile_num: values.max_logfile_num,
        heartbeat_time: `${values.heartbeat_time}${values.prefix}`
      }
      if (!err) {
        if (values.max_logfile_num >= 1000) {
          Message.info('本地缓存日志文件较多，可能会占用额外存储空间')
        } else if (values.max_logfile_num <= 10) {
          Message.info('本地保存日志文件数量时间跨度较短')
        }
        try {
          const { data } = await axios.post('/api/setting', payload)
          Message.success(data)
        } catch (error) {
          console.info(error)
          Message.error('保存失败')
        }
      }
    })
  }

  render() {
    const { form: { getFieldDecorator }, version, dbStatus } = this.props

    const prefixSelector = getFieldDecorator('prefix')(
      <Select>
        <Option value="h">时</Option>
        <Option value="m">分</Option>
        <Option value="s">秒</Option>
      </Select>,
    )

    const instructions = (
      <Tooltip
        title="缓存日志数 > 1000，本地缓存日志文件较多，可能会占用额外存储空间。缓存日志数 < 10，本地保存日志文件数量时间跨度较短"
      >
        <Icon type="question-circle" style={{ width: 27 }} />
      </Tooltip>
    )

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
            当前客户端程序版本：
            <span style={{ color: '#43ad' }}>{version === 'no update' ? '预装版本' : version}</span>
          </div>
          <div>
            数据库清理状态：
            <span style={{ color: '#43ad' }}>{dbStatusMap[dbStatus]}</span>
          </div>
          <Divider />
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
          </div>
          <Divider />
          <div>
            <Form {...formItemLayout} onSubmit={this.handleSubmit}>
              <Form.Item label="日志上传间隔">
                {getFieldDecorator('heartbeat_time', {
                  rules: [ {
                    required: true,
                    pattern: new RegExp(/^[1-9]\d*$/, 'g'),
                    message: '输入正确的上传间隔!',
                  } ],
                })(
                  <Input addonAfter={prefixSelector} placeholder="输入日志上传时间" />,
                )}
              </Form.Item>
              <Form.Item label="缓存日志数">
                {getFieldDecorator('max_logfile_num', {
                  rules: [ {
                    required: true,
                    pattern: new RegExp(/^[1-9]\d*$/, 'g'),
                    message: '输入正确的缓存日志数!',
                  } ],
                })(
                  <Input addonAfter={instructions} placeholder="输入缓存日志数" />,
                )}
              </Form.Item>
              <Form.Item
                wrapperCol={{
                  xs: { span: 24, offset: 0 },
                  sm: { span: 16, offset: 8 },
                }}
              >
                <Button type="primary" htmlType="submit">
                  保存
                </Button>
              </Form.Item>
            </Form>
          </div>
        </ContentBox>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    setting: state.settingReducer.setting,
    version: state.settingReducer.version,
    dbStatus: state.settingReducer.dbStatus,
  }
}


function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(Visual))
