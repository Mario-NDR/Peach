export function ellipsis(string = '', limit = 15) {
  if (string.length > limit) {
    return `${string.substr(0, limit)}...`
  }
  return string
}
