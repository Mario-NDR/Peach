/**
 * @summary 首页HUD
 */
import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { IntlComponent } from 'Components/Common'

import Map from './Map'
import style from './style.scss'
import * as actions from './action'

class Home extends IntlComponent {

  static propTypes = {
    mapDetail: PropTypes.array,
    data: PropTypes.array,
  }

  static defaultProps = {
    mapDetail: [],
    data: [],
  }

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this.loadData()
    console.info('useruseruseruseruseruseruseruseruseruseruseruseruseruseruseruseruseruseruser', this.props)
  }

  loadData = () => {
    this.props.actions.getMapDetailData()
  }

  render() {
    const { mapDetail } = this.props

    return (
      <section className={style.wrapper}>
        <Map data={mapDetail} />
      </section>
    )
  }
}

function mapStateToProps(state) {
  return {
    mapDetail: state.mapReducer.mapDetail,
  }
}


function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
