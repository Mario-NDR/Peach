/**
 * @summary 关于
 */
import React from 'react'
import PropTypes from 'prop-types'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { IntlComponent } from 'Components/Common'
import ContentBox from 'Components/ContentBox'
import Bread from 'Components/Bread'
import Subheader from 'Components/Subheader'

import * as actions from '../action'
import style from './style.scss'

class Visual extends IntlComponent {

  static propTypes = {
    pieData: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {}

  render() {

    return (
      <div className={style.about}>
        <Bread
          items={[ { content: '关于我们' } ]}
        />
        <ContentBox>
          <Subheader>关于我们</Subheader>
        </ContentBox>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    pieData: state.visualReducer.pieData,
    visualDate: state.visualReducer.visualDate,
  }
}


function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Visual)
