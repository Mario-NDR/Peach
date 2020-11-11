/**
 * @summary 二次确认
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Modal, Button } from 'antd'

const { confirm } = Modal
const deleteStyle = { cursor: 'pointer' }

class ModalConfirm extends Component {

  static propTypes = {
    onOk: PropTypes.func.isRequired, // eslint-disable-line
    onClick: PropTypes.func,
    content: PropTypes.any.isRequired,
    type: PropTypes.string,
    style: PropTypes.object,
    title: PropTypes.string,
    description: PropTypes.string,
  }

  static defaultProps = {
    type: 'text',
    style: deleteStyle,
    title: '确定删除吗',
    description: '',
    onClick: null,
  }

  showConfirm = () => {
    const that = this
    confirm({
      title: this.props.title,
      content: this.props.description ? this.props.description : '',
      okText: '确定',
      cancelText: '取消',
      mask: false,
      onOk() {
        that.props.onOk()
      },
    })
  }

  handleClick = () => {
    if (this.props.onClick) {
      this.props.onClick(this.showConfirm)
    } else {
      this.showConfirm()
    }
  }

  render() {
    const { type } = this.props
    if (type === 'button') {
      return (
        <Button onClick={this.handleClick} style={this.props.style}>
          {this.props.content}
        </Button>
      )
    }
    return (
      <span role="button" onClick={this.handleClick} style={this.props.style}>
        {this.props.content}
      </span>
    )
  }
}

export default ModalConfirm
