export function arrDiff(a, b) {
  for (let i = 0; i < b.length; i++) {
    for (let j = 0; j < a.length; j++) {
      if (a[j] === b[i]) {
        a.splice(j, 1)
        j -= 1
      }
    }
  }
  return a
}
