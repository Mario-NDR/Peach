/**
 * 把数字转换为“约x万”，例：43245 -> 约4万
 * @param {number} number 
 */
export function roughly(number = 0) {
  if (number !== 0 && !number) {
    return
  }

  if (isNaN(+number)) {
    console.error('error in function roughly: NaN')
    return
  }

  if (+number >= 10000) {
    return `约 ${Math.floor(+number / 10000)} 万`
  }

  if (+number < 10000) {
    return +number
  }
}

/**
 * 把“秒”转换为“时分秒”，例：3666 -> 1时1分6秒
 * @param {number} number 
 */
export function translateTime(number = 0) {
  if (number !== 0 && !number) {
    return
  }

  if (isNaN(+number)) {
    console.error('error in function translateTime: NaN')
    return
  }

  const hour = Math.floor(number / 3600)
  const minute = Math.floor((number % 3600) / 60)
  const second = Math.floor(number % 60)

  return `${hour}时${minute}分${second}秒`
}

/**
 * 生成范围在(m, n)之间的随机数
 * @param {number} m 
 * @param {number} n 
 */
export function genRandomNum(m, n) {
  return Math.round(Math.random() * (n - m) + m)
}

/**
 * 补0
 * @param {number | string} n 
 */
export function zeroPad(n) {
  return n < 10 ? `0${n}` : `${n}`
}
