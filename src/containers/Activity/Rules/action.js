import network from 'Utils/network'
// import api from 'Constants/api'

// 获取规则
export function getRules(payload = {}) {
  return network.GET('/api/rules', payload, (data) => ({
    data,
    type: 'getRules',
  }))
}

// 规则下发
export function postRules(payload = {}) {
  return network.POST('/api/rules', payload, (data) => ({
    data,
    type: 'postRules',
  }))
}

// 规则修改
export function postChangeRules(payload = {}) {
  return network.POST('/api/rules/change', payload, (data) => ({
    data,
    type: 'postChangeRules',
  }))
}

// 删除所有已下发规则
export function delClientRules(payload = {}) {
  return network.POST('/api/rules/delall', payload, (data) => ({
    data,
    type: 'delClientRules',
  }))
}
