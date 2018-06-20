function getLocalList(key) {
  if (typeof key === 'string' && key in localStorage) {
    var parsed = localStorage.getItem(key)
    var parsed1 = JSON.parse(parsed)
    return parsed1
  } else {
    return []
  }
}

var studentsList = getLocalList('list')

console.log(studentsList)