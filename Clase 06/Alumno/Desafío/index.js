function includesText (string1, string2) {
  if (typeof string1 === 'string' && typeof string2 === 'string') {
    var string1UpperCase = string1.toUpperCase()
    var string2UpperCase = string2.toUpperCase()
    if(string2UpperCase.indexOf(string1UpperCase)!== -1){
      return true
    }else{
      return false
    }
  } else {
    return false
  }
}

console.log(includesText('Pa', 'Patricia'))
console.log(includesText('pa', 'Patricia'))
console.log(includesText('Patricia', 'Pa'))
console.log(includesText(2, 'Pa'))
