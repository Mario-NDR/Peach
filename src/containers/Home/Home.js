/**
 * @summary 首页HUD
 */
import React from 'react'

import { IntlComponent } from 'Components/Common'

import Map from './Map'
// import BorderBox from './BorderBox' 
import style from './style.scss'

class Home extends IntlComponent {
  constructor(props) {
    super(props)
    this.state = {
      mapData: {}
    }
  }

  render() {
    const { mapData } = this.state
    return (
      <section className={style.wrapper}>
        <Map data={mapData} />
      </section>
    )
  }
}

export default Home
