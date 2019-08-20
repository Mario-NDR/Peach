/**
 * @summary 活动内容配置
 */
import React from 'react'
import PropTypes from 'prop-types'
import { Button, Divider, Form, Table, Modal, Upload, Icon } from 'antd'
import { Link } from 'react-router-dom'

import { IntlComponent } from 'Components/Common'
import Bread from 'Components/Bread'
import Step from 'Components/Step'
import ContentBox from 'Components/ContentBox'
import Subheader from 'Components/Subheader'
import TagTitle from 'Components/TagTitle'
import FormItem from 'Components/FormItem'

import img1 from './images/img1.png'

import style from './style.scss'

class Content extends IntlComponent {

  static propTypes = {
    form: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      selectedRowKeys: [],
      visibleEdit: false,
      visibleView: false,
    }
  }

  showModalEdit = () => {
    this.setState({
      visibleEdit: true,
    })
  }

  showModalView = () => {
    this.setState({
      visibleView: true,
    })
  }

  // 确认
  handleOk = (e) => {
    console.log(e)
    this.setState({
      visibleEdit: false,
      visibleView: false,
    })
  }

  // 取消
  handleCancel = (e) => {
    console.log(e)
    this.setState({
      visibleEdit: false,
      visibleView: false,
    })
  }

  columns = [
    {
      title: '信息',
      dataIndex: 'information',
      key: 'information',
      render: () => {
        return (
          <div style={{ display: 'flex', justifyContent: 'left' }}>
            <div>
              <img src={img1} alt="" />
            </div>
            <div>
              <div style={{ display: 'flex', justifyContent: 'left' }}>
                <div style={{ margin: 30 }}>1号选手</div>
                <div style={{ marginTop: 30 }}>票数0</div>
              </div>
              <div style={{ marginLeft: 20 }}>感谢为我投上您珍贵的一票</div>
            </div>
          </div>
        )
      }
    },
    {
      title: '操作',
      dataIndex: 'operation',
      key: 'operation',
      render: () => {
        return (
          <div>
            <Button shape="round" onClick={this.showModalEdit}>编辑</Button>
            <Button shape="round" onClick={this.showModalView} style={{ marginLeft: 10 }}>查看</Button>
            <Button shape="round" style={{ marginLeft: 10 }}>删除</Button>
          </div>
        )
      }
    },
  ]

  dataSource = [ { key: 1 }, ]

  onSelectChange = selectedRowKeys => {
    this.setState({ selectedRowKeys })
  }

  render() {
    const { getFieldDecorator } = this.props.form

    const { selectedRowKeys } = this.state

    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    }
    return (
      <div className={style.content}>
      {/* 编辑 */}
        <Modal
          title="编辑投票项"
          visible={this.state.visibleEdit}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <div>
            <Form>
              <Form.Item label="上传图片">
                <div>
                  {getFieldDecorator('dragger', {
                    valuePropName: 'fileList',
                    getValueFromEvent: this.normFile,
                  })(
                    <Upload.Dragger name="files">
                      <p className="ant-upload-drag-icon">
                        <Icon type="inbox" />
                      </p>
                      <p className="ant-upload-text">点击上传图片！</p>
                      <p className="ant-upload-hint">支持jpg、jpeg、png、bmp格式的图片，大小4Mb</p>
                    </Upload.Dragger>,
                  )}
                </div>
              </Form.Item>
              <Form.Item>
                <Button type="primary">
                  确定上传
                  </Button>
              </Form.Item>
              <FormItem
                conf={{
                  getFieldDecorator,
                  label: '编号',
                  type: 'Input',
                  dataIndex: 'ID',
                  initialValue: '',
                  placeholder: '',
                  maxLength: 80,
                }}
              />
              <FormItem
                conf={{
                  getFieldDecorator,
                  label: '名称',
                  type: 'Input',
                  dataIndex: 'name',
                  initialValue: '',
                  placeholder: '',
                  maxLength: 80,
                }}
              />
              <FormItem
                conf={{
                  getFieldDecorator,
                  label: '票数',
                  type: 'Input',
                  dataIndex: 'votes',
                  initialValue: '',
                  placeholder: '',
                  maxLength: 80,
                }}
              />
              <FormItem
                conf={{
                  getFieldDecorator,
                  label: '说明',
                  type: 'TextArea',
                  dataIndex: 'description',
                  initialValue: '',
                  maxLength: 60,
                }}
              />
            </Form>
          </div>
        </Modal>
        {/* 查看 */}
        <Modal
          title="详细信息"
          visible={this.state.visibleView}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img src={img1} alt="" />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
            <div>03号选手</div>
            <div style={{ marginLeft: 40 }}>票数：0</div>
          </div>
          <div className={style.detail}>感谢您为我投上珍贵的一票</div>
        </Modal>
        <Bread
          items={[
            { content: '活动' },
            { content: '活动创建' },
            { content: '活动内容配置：投票活动' },
          ]}
        />
        <ContentBox>
          <Subheader>活动创建</Subheader>
          <Step
            current={1}
            items={[
              { title: '活动类型选择' },
              { title: '活动内容配置' },
              { title: '奖品配置' },
              { title: '活动管理/审批' },
            ]}
          />
          <div className="flexEnd mt16">
            <Button className="mr16" size="large" onClick={() => window.history.go(-1)}>上一步</Button>
            <Button className="mr16" size="large" type="primary" ghost>预览</Button>
            <Button className="mr16" size="large" type="primary" ghost>保存草稿</Button>
            <Link to="/app/activity/create/vote/prize"><Button type="primary" size="large">下一步：奖品配置</Button></Link>
          </div>
          <Divider />
          <TagTitle>1、投票活动：基本信息</TagTitle>
          <div>
            <Form>
              <FormItem
                conf={{
                  getFieldDecorator,
                  label: '活动标题',
                  type: 'Input',
                  dataIndex: 'title',
                  initialValue: '',
                  placeholder: '请设置您的活动标题（最多80字符）',
                  maxLength: 80,
                }}
              />
              <FormItem
                conf={{
                  getFieldDecorator,
                  label: '活动封面',
                  type: 'Upload',
                  dataIndex: 'cover',
                  draggerNode: (
                    <div align="center">
                      <div className={style.cameraIcon}><Icon type="camera" /></div>
                      <div className={style.addCover}>添加海报</div>
                      <div>一张漂亮的活动海报可以吸引更多用户报名，同时可以增加传播效果</div>
                      <div className={style.suggest}>（建议尺寸：900*525，图片小于4M）</div>
                    </div>
                  ),
                }}
              />
              <FormItem
                conf={{
                  getFieldDecorator,
                  label: '活动时间',
                  type: 'DatePicker',
                  dataIndex: 'date',
                }}
              />
              <FormItem
                conf={{
                  getFieldDecorator,
                  label: '活动详情',
                  type: 'TextArea',
                  dataIndex: 'detail',
                  initialValue: '',
                  placeholder: '150字以内',
                  maxLength: 150,
                }}
              />
            </Form>
          </div>
          <TagTitle>2、投票设置</TagTitle>
          <div>
            <Form>
              <FormItem
                conf={{
                  getFieldDecorator,
                  label: '用户投票总次数',
                  type: 'Input',
                  dataIndex: 'count',
                  initialValue: '',
                  placeholder: '不限制',
                  maxLength: 80,
                }}
              />
              <FormItem
                conf={{
                  getFieldDecorator,
                  label: '用户每天投票次数',
                  type: 'Input',
                  dataIndex: 'everyDayCount',
                  initialValue: '',
                  placeholder: '1',
                  maxLength: 80,
                }}
              />
              <FormItem
                conf={{
                  getFieldDecorator,
                  style: { marginBottom: 0 },
                  label: '允许单日同一项重复投票',
                  type: 'Radio',
                  dataIndex: 'repeat',
                  initialValue: 'yes',
                  maxLength: 80,
                  radios: [
                    { key: 'yes', value: '允许' },
                    { key: 'no', value: '不允许' },
                  ]
                }}
              />
              <FormItem
                conf={{
                  getFieldDecorator,
                  label: ' ',
                  colon: false,
                  type: 'Text',
                  style: { fontSize: 12 },
                  text: '允许：单个用户可给单个选项重复投票；不允许：单个用户一天之内，不可给单个用户重复投票',
                }}
              />
              <FormItem
                conf={{
                  getFieldDecorator,
                  style: { marginBottom: 0 },
                  label: '票数显示',
                  type: 'Radio',
                  dataIndex: 'repeat',
                  initialValue: 'yes',
                  maxLength: 80,
                  radios: [
                    { key: 'display', value: '显示' },
                    { key: 'noDisplay', value: '不显示' },
                  ]
                }}
              />
              <FormItem
                conf={{
                  getFieldDecorator,
                  label: ' ',
                  colon: false,
                  type: 'Text',
                  style: { fontSize: 12 },
                  text: '显示：可以看见所有项目的投票数；不显示：全部不可见',
                }}
              />
              <FormItem
                conf={{
                  getFieldDecorator,
                  style: { marginBottom: 0 },
                  label: '投票结果',
                  type: 'Radio',
                  dataIndex: 'repeat',
                  initialValue: 'yes',
                  maxLength: 80,
                  radios: [
                    { key: 'open', value: '开启' },
                    { key: 'close', value: '关闭' },
                  ]
                }}
              />
              <FormItem
                conf={{
                  getFieldDecorator,
                  label: ' ',
                  colon: false,
                  type: 'Text',
                  style: { fontSize: 12 },
                  text: '开启：投票排行榜所有人可见；关闭：所有人不可见',
                }}
              />
              <Table
                columns={this.columns}
                dataSource={this.dataSource}
                size="size"
                pagination={false}
                rowSelection={rowSelection}
              />
            </Form>
          </div>
        </ContentBox>
      </div>
    )
  }
}

export default Form.create()(Content)
