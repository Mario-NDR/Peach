import network from 'Utils/network'

// 日志下载
export function getDownloadLog(payload = {}) {
  return network.GET('/api/downloadlog', payload, (data) => ({
    data,
    type: 'getDownloadLog',
  }))
}

// 日志清理
export function postLog(payload = {}) {
  return network.POST('/api/db', payload, (data) => ({
    data,
    type: 'postLog',
  }))
}

// 获取日志配置
export function getSetting(payload = {}) {
  return network.GET('/api/setting', payload, (data) => ({
    data,
    type: 'getSetting',
  }))
}

// 更新日志配置
export function postSetting(payload = {}) {
  return network.POST('/api/setting', payload, (data) => ({
    data,
    type: 'postSetting',
  }))
}

// 当前客户端程序版本
export function getVersion(payload = {}) {
  return network.GET('/api/update', payload, (data) => ({
    data,
    type: 'getVersion',
  }))
}
