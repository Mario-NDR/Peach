import network from 'Utils/network'

// 攻击流量
export function getAttackTrafficData(payload = {}) {
  return network.GET('/api/ip', payload, (data) => ({
    data,
    type: 'getAttackTrafficData',
  }))
}
