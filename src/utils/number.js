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

export function genRandomNum(m, n) {
  return Math.round(Math.random() * (n - m) + m)
}
