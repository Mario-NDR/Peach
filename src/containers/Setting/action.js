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
