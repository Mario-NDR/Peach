/**
 * @summary 规则策略 -- 全部规则
 */
import React from 'react'
import PropTypes from 'prop-types'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { IntlComponent } from 'Components/Common'
import ContentBox from 'Components/ContentBox'
import Bread from 'Components/Bread'
import Subheader from 'Components/Subheader'
import { Pie } from 'Components/Charts'

import * as actions from '../action'
import style from './style.scss'

// const color = ['#006666', '#006699', '#009999', '#0099CC', '#00CCCC', '#00CCFF']
const color = [
  '#7FC9FE',
  '#71E3E3',
  '#44dbad',
  '#7C90ED',
  '#BAE7FF',
  '#8EE0A1',
  '#FDAE20',
  '#02c7bf',
  '#04ceee',
  '#FD6E33',
  '#825BD6',
  '#FED47F',
  '#ABF5F5',
  '#0C70FD',
  '#099fc7',
  '#18BB8D',
  '#50cb73',
  '#b9f297',
  '#BAF5C4',
  '#BBE3C8',
  '#fbe069',
  '#fef682',
  '#E6214E',
  '#f04864',
  '#FC4A7E',
  '#f38597',
  '#FD7C43',
]

class Visual extends IntlComponent {

  static propTypes = {
    pieData: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this.props.actions.getPieData()
  }

  render() {
    const { pieData } = this.props
    let sum = 0
    let innerPieData = []
    if (Object.keys(pieData).length !== 0) {
      innerPieData = pieData.data.map((item) => {
        return { name: item.name, value: item.count }
      })
      sum = pieData.sum
    }
    console.info(sum)

    return (
      <div className={style.allRules}>
        <Bread
          items={[
            { content: '数据可视化' },
            { content: '图表' },
          ]}
        />
        <ContentBox>
          <Subheader>巴拉巴拉1</Subheader>
          <Pie
            data={innerPieData}
            width="100%"
            height={450}
            options={{
              radius: [ 0, '65%' ],
              textStyle: { fontSize: 16 },
              legend: {
                type: 'scroll',
                orient: 'vertical',
                right: 10,
                top: 20,
                bottom: 20,
                data: innerPieData,
                textStyle: { color: '#fff', fontSize: 12 },
              },
              label: {
                normal: { show: false },
              },
              center: [ '35%', '50%' ],
              title: {
                show: true,
                text: '巴拉巴拉2',
                textStyle: { color: '#966', fontSize: 18 },
                left: 'center',
              },
              color,
            }}
            // style={{ marginTop: 32 }}
          />
        </ContentBox>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    pieData: state.visualReducer.pieData,
  }
}


function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Visual)
