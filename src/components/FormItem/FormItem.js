/**
 * @summary 表单项
 */
import React from 'react'
import PropTypes from 'prop-types'
import { Form, Input, Select, DatePicker, Radio, Switch } from 'antd'

import { flexLayout as formItemLayout } from 'Constants/layout'
import { IntlComponent } from 'Components/Common'

const { Item } = Form
const { Option } = Select
const { TextArea } = Input
const { Group } = Radio

class FormItem extends IntlComponent {

  static propTypes = {
    conf: PropTypes.object.isRequired,
  }

  renderOptions = () => {
    const { options } = this.props.conf
    if (!_.isArray || _.isEmpty(options)) {
      return null
    }
    return options && options.map(option => <Option key={option.key}>{option.value}</Option>)
  }

  renderRadios = () => {
    const { radios } = this.props.conf
    if (!_.isArray || _.isEmpty(radios)) {
      return null
    }
    return radios && radios.map(option => <Radio key={option.key} value={option.key}>{option.value}</Radio>)
  }

  renderElem = () => {
    const {
      type,
      width,
      placeholder,
      maxLength,
      mode,
      onChange,
      rows,
      autoFocus,
      htmlType,
      disabled,
      prefix,
      dropdownRender,
      text,
      checkedChildren,
      unCheckedChildren,
    } = this.props.conf

    const elems = {
      Input: (
        <Input
          placeholder={placeholder}
          maxLength={maxLength || 30}
          autoFocus={autoFocus}
          type={htmlType}
          disabled={disabled}
          onChange={onChange}
          prefix={prefix}
        />
      ),
      TextArea: (
        <TextArea
          placeholder={this.localeMessage(placeholder)}
          maxLength={maxLength || 50}
          style={{ resize: 'none' }}
          rows={rows || 3}
          disabled={disabled}
        />
      ),
      Select: (
        <Select
          mode={mode}
          onChange={onChange}
          dropdownRender={dropdownRender}
          placeholder={this.localeMessage(placeholder)}
        >
          { this.renderOptions() }
        </Select>
      ),
      DatePicker: (
        <DatePicker
          style={{ width }}
          placeholder={this.localeMessage(placeholder)}
        />
      ),
      Radio: (
        <Group onChange={onChange}>
          { this.renderRadios() }
        </Group>
      ),
      Text: (
        <span>{ text }</span>
      ),
      Switch: (
        <Switch
          checkedChildren={checkedChildren}
          unCheckedChildren={unCheckedChildren}
        />
      ),
    }

    return elems[type]
  }

  render() {
    const {
      layout,
      dataIndex,
      rules,
      colon,
      initialValue,
      getFieldDecorator,
      type,
      style,
    } = this.props.conf

    let { label } = this.props.conf

    const extra = {}

    if (rules) {
      rules.forEach(rule => {
        if (rule.message) {
          rule.message = this.localeMessage(rule.message)
        }
      })
      extra.rules = rules
    }
    if (initialValue) {
      extra.initialValue = initialValue
    }
    // if (label && _.isString(label)) {
    //   label = this.localeMessage(label)
    // }
    if (label === null) {
      label = ' '
    }

    if (type === 'Text') {
      return (
        <Item
          label={label}
          colon={colon}
          style={style}
          {...layout || formItemLayout}
        >
          { this.renderElem() }
        </Item>
      )
    }

    return (
      <Item
        label={label}
        colon={colon}
        style={style}
        {...layout || formItemLayout}
      >
        {getFieldDecorator(dataIndex, extra)(
          this.renderElem()
        )}
      </Item>
    )
  }
}

export default FormItem
