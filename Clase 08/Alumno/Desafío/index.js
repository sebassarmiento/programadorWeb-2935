console.log('Init app')

var student = {
  firstName: 'Juan',
  lastName: 'Peréz',
  dni: 22999333,
  email: 'juan@gmail.com'
}

var student2 = {
  firstName: 'Marcos',
  lastName: 'Gomez',
  dni: '39876876',
  email: 'marcosgomez@gmail.com'
}

function createStudentNode(studentObj) {
  var mainList = document.getElementById('main-list')
  var mainListItem = document.createElement('li')
  mainListItem.className = 'list-group-item'
  mainListItem.id = studentObj.dni
  mainListItem.innerHTML = '<h1>' + studentObj.firstName + '</h1>' + '<h3>DNI: ' + studentObj.dni + '</h3>' + '<p>E-mail: ' + studentObj.email + '</p>'
  mainList.appendChild(mainListItem)
}

createStudentNode(student)
createStudentNode(student2)
