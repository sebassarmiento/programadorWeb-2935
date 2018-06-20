
console.log('Init app')

function saveLocallist(key, array) {
  if (typeof key === 'string' && Array.isArray(array)) {
    var stringed = JSON.stringify(array)
    localStorage.setItem(key, stringed)
  }
}

var studentsList = ['CARLOS', 'GERONIMO', 'NICOLAS', 'LUCAS', 'MARIA', 'FEDERICO', 'ANTONIO', 'LORNA', 'JULIAN', 'DIEGO', 'DANIELA', 'JUAN', 'MATEO', 'BARBARA', 'AGUSTIN', 'MARIO', 'MARIEL', 'ANA', 'FLORENCIA']

saveLocallist("list", studentsList)