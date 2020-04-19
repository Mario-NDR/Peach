/**
 * @summary 系统配置 
 */
import React from 'react'
import { Button, Message, Form, Input, Divider } from 'antd'
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

class Visual extends IntlComponent {

  static propTypes = {}

  constructor(props) {
    super(props)
    this.state = {
      buttonLoading: false,
    }
  }

  async componentDidMount() {
    const { form: { setFieldsValue } } = this.props
    const { data } = await axios.get('/api/setting')
    setFieldsValue({
      heartbeat_time: data.heartbeat_time,
      max_logfile_num: data.max_logfile_num
    })
  }

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

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        try {
          const { data } = await axios.post('/api/setting', values)
          Message.success(data)
        } catch (error) {
          console.info(error)
          Message.error('保存失败')
        }
      }
    })
  }

  render() {
    const { form: { getFieldDecorator } } = this.props
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
          </div>
          <Divider />
          <div>
            <Form {...formItemLayout} onSubmit={this.handleSubmit}>
              <Form.Item label="日志上传时间">
                {getFieldDecorator('heartbeat_time', {
                  rules: [ {
                    required: true,
                    message: '上传时间不能为空!',
                  } ],
                })(
                  <Input placeholder="输入日志上传时间" />,
                )}
              </Form.Item>
              <Form.Item label="缓存日志数">
                {getFieldDecorator('max_logfile_num', {
                  rules: [ {
                    required: true,
                    message: '缓存日志数不能为空!',
                  } ],
                })(
                  <Input placeholder="输入缓存日志数" />,
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
    setting: state.settingReducer.setting
  }
}


function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(Visual))
