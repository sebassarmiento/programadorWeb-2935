
var studentsList = [
  {
    firstName: 'Juan',
    lastName: 'Pérez',
    dni: 45678987
  },
  {
    firstName: 'Ana',
    lastName: 'Fernandez',
    dni: 45678989
  },
  {
    firstName: 'Pedro',
    lastName: 'Mármol',
    dni: 45678956
  },
  {
    firstName: 'Pablo',
    lastName: 'Picapiedras',
    dni: 45678983
  }
]

var result = 'No se encontró el alumno (-1)'

function findStudent(text, array) {
  for (var i = 0; i < array.length; i++) {
    if (text === array[i].firstName || text === array[i].lastName) {
      result = 'El estudiante ' + text + ' se encontró en la posición ' + i
      return result
    }
  }
}


var searchName = prompt('Ingrese el estudiante que desea buscar')

findStudent(searchName, studentsList)

console.log(result)
