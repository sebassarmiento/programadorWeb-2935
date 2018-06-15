function includesText (string1, string2) {
  if (
    typeof string1 === 'string' &&
    typeof string2 === 'string' &&
    string1.toUpperCase().indexOf(string2.toUpperCase())
  ) {
    return true
  } else {
    return false
  }
}

console.log(includesText('Pa', 'Patricia'))
console.log(includesText('Patricia', 'Pa'))
console.log(includesText(2, 'Pa'))
