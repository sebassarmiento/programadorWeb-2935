console.log('Init app')

var texts = ['Ed', 'Edd', 'Eddy']

function createListItems(array) {
  var mainList = document.getElementById('mainList')
  mainList.innerHTML = ""
  var liNode
  for (var i = 0; i < array.length; i++) {
    liNode = document.createElement('li')
    liNode.innerHTML = array[i]
    liNode.className = 'list-group-item'
    liNode.id = i
    mainList.appendChild(liNode)
  }
}

createListItems(texts)



