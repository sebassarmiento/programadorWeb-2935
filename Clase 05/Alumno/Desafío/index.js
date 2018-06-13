
var Alumno = function (firstName, lastName, dni, email) {
  var id = dni

  this.firstName = firstName
  this.lastName = lastName
  this.dni = dni
  this.email = email

  this.getId = function () {
    return id
  }

  this.getFullName = function () {
    if (lastName === undefined) {
      return firstName
    } else {
      return firstName + ' ' + lastName
    }
  }
}


var alumno1 = new Alumno('Lucas', 'Martinez', 41134234, 'lmartinez@gmail.com')
var alumno2 = new Alumno('Marcos', 'Gutiérrez', 38256098, 'marcosGutiérrez@gmail.com')
var alumno3 = new Alumno('Tomas', 'Vino', 41151201, 'tomasvino@gmail.com')

console.log(alumno1)
console.log(alumno1.getId())
console.log(alumno1.getFullName())

console.log(alumno2)
console.log(alumno2.getId())
console.log(alumno2.getFullName())

console.log(alumno3)
console.log(alumno3.getId())
console.log(alumno3.getFullName())

var students = [
  {
    firstName: 'Juan',
    lastName: 'Pérez',
    dni: 45678987,
    email: 'juan@gmail.com'
  },
  {
    firstName: 'Ana',
    lastName: 'Fernandez',
    dni: 45678989,
    email: 'ana@gmail.com'
  },
  {
    firstName: 'Pedro',
    lastName: 'Mármol',
    dni: 45678956,
    email: 'pedro@gmail.com'
  }
]

var student
var newStudent
var newStudents = []

for (var i = 0; i < students.length; i++) {
  student = students[i]
  newStudent = new Alumno(student.firstName, student.lastName, student.dni, student.email)
  newStudents.push(newStudent)
}

console.log(newStudents[1].getId())
console.log(newStudents[2].getFullName())