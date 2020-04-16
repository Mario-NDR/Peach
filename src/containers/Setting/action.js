import network from 'Utils/network'

// 获取规则
export function getxxx(payload = {}) {
  return network.GET('/api/xxx', payload, (data) => ({
    data,
    type: 'getxxx',
  }))
}
