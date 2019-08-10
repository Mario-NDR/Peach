/**
 * @summary 步骤条
 */
import React from 'react'
import PropTypes from 'prop-types'
import { Steps } from 'antd'

import { IntlComponent } from 'Components/Common'

import style from './style.scss'

class Step extends IntlComponent {

  static propTypes = {
    className: PropTypes.string,
    size: PropTypes.string,
    items: PropTypes.array.isRequired,
    style: PropTypes.object,
  }

  static defaultProps = {
    className: '',
    style: {},
    size: 'normal',
  }

  render() {
    const { items } = this.props
    return (
      <section className={style.stepsWrapper}>
        <Steps
          className={this.props.className}
          style={this.props.style}
          size={this.props.size}
          current={1}
        >
          {
            items.map((item) => {
              return (
                <Steps.Step
                  key={item.title}
                  status={item.status}
                  title={item.title}
                />
              )
            })
          }
        </Steps>
      </section>
    )
  }
}

export default Step
