import network from 'Utils/network'
// import api from 'Constants/api'

// 获取规则
export function getRules(payload = {}) {
  return network.GET('/api/rules', payload, (data) => ({
    data,
    type: 'getRules',
  }))
}

// 规则下发，规则修改，规则删除
export function postRules(payload = {}) {
  return network.POST('/api/rules', payload, (data) => ({
    data,
    type: 'postRules',
  }))
}
