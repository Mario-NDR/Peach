/**
 * @summary 登录
 */
import React from 'react'
import PropTypes from 'prop-types'
import { Form, Button, Icon, message } from 'antd'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { history } from 'Src/Main'
import { IntlComponent } from 'Components/Common'
import FormItem from 'Components/FormItem'
import { doubleLineLayout } from 'Constants/layout'

import { login } from './actions'
import style from './style.scss'

const { Item } = Form

class Login extends IntlComponent {

  static propTypes = {
    form: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        if ((values.username === 'jinghh' || values.username === 'shichq') && values.password === 'mario999') {
          history.push('/app/home')
        } else {
          message.error('用户名或者密码错误，请重新输入')
        }
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div className={style.login}>
        <Form onSubmit={this.handleSubmit}>
          <p className={style.title}>{this.localeMessage('login')}</p>
          <FormItem
            conf={{
              getFieldDecorator,
              type: 'Input',
              label: '',
              dataIndex: 'username',
              rules: [ { required: true, message: '请输入用户名，最多30个字符' } ],
              autoFocus: 'autoFocus',
              layout: doubleLineLayout,
              placeholder: '请输入用户名',
              prefix: <Icon type="user" style={{ fontSize: '16px' }} />,
            }}
          />
          <FormItem
            conf={{
              getFieldDecorator,
              type: 'Input',
              htmlType: 'password',
              label: '',
              dataIndex: 'password',
              rules: [ { required: true, message: '请输入密码' } ],
              layout: doubleLineLayout,
              placeholder: '请输入密码',
              prefix: <Icon type="unlock" style={{ fontSize: '16px' }} />,
            }}
          />
          <Item>
            <Button className={style.loginButton} type="primary" htmlType="submit">
              { this.localeMessage('login') }
            </Button>
          </Item>
        </Form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ login }, dispatch)
}

export default connect(null, mapDispatchToProps)(Form.create()(Login))
