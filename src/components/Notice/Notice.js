/**
 * @summary 全局提示组件
 */

import { notification } from 'antd'

function notice(res) {
  const { data } = res
  if (data.message) {
    let method = 'error'
    if (data.code >= 2000 && data.code < 3000) {
      method = 'success'
    }
    return notification[method]({ message: data.message })
  }
  return null
}

export default notice
