import moment from 'moment'

// 时间戳转时间
export function formatTime(timestamp, format) {
  if (isNaN(+timestamp)) {
    throw new Error('时间戳格式错误')
  }
  return moment.unix(timestamp).format(format || 'YYYY-MM-DD HH:mm:ss')
}

// 零时区转东八区
export function zoneTransfer(time, format) {
  if (!time) {
    return '-'
  }
  return moment(time).utc().utcOffset(8).format(format || 'YYYY-MM-DD HH:mm')
}
