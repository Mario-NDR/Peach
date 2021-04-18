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
    userName: PropTypes.string,
  }

  static defaultProps = {
    userName: '',
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const map = new Map()
        map.set('jinghh', true)
        map.set('shichq', true)
        map.set('zhangsibo', true)
        if (map.get(values.username) && values.password === 'mario999') {
          this.props.login(values.username)
          history.push('/app/map')
          message.success(this.localeMessage('loginSuccessful'))
        } else {
          message.error(this.localeMessage('loginFailed'))
        }
      }
    })
  }

  handleCLickTourists = () => {
    const payload = '访客'
    this.props.login(payload)
    history.push('/app/map')
    message.success(this.localeMessage('loginSuccessfulVisitor'))
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
              rules: [ { required: true, message: this.localeMessage('userNameRequiredPlaceholder') } ],
              autoFocus: 'autoFocus',
              layout: doubleLineLayout,
              placeholder: this.localeMessage('userName'),
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
              rules: [ { required: true, message: this.localeMessage('passwordRequired') } ],
              layout: doubleLineLayout,
              placeholder: this.localeMessage('passwordRequired'),
              prefix: <Icon type="unlock" style={{ fontSize: '16px' }} />,
            }}
          />
          <div>以<a role="button" onClick={this.handleCLickTourists}>访客</a>身份访问</div>
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

function mapStateToProps(state) {
  return {
    userName: state.loginReducer.userName,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ login }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(Login))
