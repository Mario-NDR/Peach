/**
 * @summary 概览
 */
import React from 'react'
import { IntlComponent } from 'Components/Common'

class Overview extends IntlComponent {

  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section>
        { this.localeMessage('helloworld') }
      </section>
    )
  }
}

export default Overview
