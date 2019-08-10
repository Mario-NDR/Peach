/**
 * @summary 登录
 */
import React from 'react'
import PropTypes from 'prop-types'
import { Form, Button, Icon } from 'antd'
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
    // this.props.form.validateFields((err, values) => {
    //   if (!err) {
    //     const payload = {
    //       username: values.username.trim(),
    //       password: values.password,
    //     }
    //     this.props.login(payload)
    //   }
    // })
    history.push('/app/overview')
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
              rules: [ { required: true, message: 'userNameRequired' } ],
              autoFocus: 'autoFocus',
              layout: doubleLineLayout,
              placeholder: 'userNameRequired',
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
              rules: [ { required: true, message: 'passwordRequired' } ],
              layout: doubleLineLayout,
              placeholder: 'passwordRequired',
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
