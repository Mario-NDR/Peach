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
