console.log('Init app')

var LS_KEY = 'studentsList'

// CARGA INICIAL DE LA APP
// Busco en el local storage y lo que hay lo guardo en localList

var localList = getLocalList(LS_KEY)

function getLocalList(key) {
    if (typeof key === 'string' && key in localStorage) {
      var parsed = localStorage.getItem(key)
      var parsed1 = JSON.parse(parsed)
      return parsed1
    } else {
      return []
    }
  }

var newStudentList = []
var localStudent
var newStudent

// Recorro localList y guardo cada estudiante como un objeto dentro de newStudentList
for(var i = 0;i<localList.length;i++){
    localStudent = localList[i]
    newStudent = new Student(
        localStudent.firstName,
        localStudent.lastName,
        localStudent.dni,
        localStudent.email
    )
    newStudentList.push(newStudent)
}

// Creo los nodos con lo que guarde en newStudentList

var mainList = document.getElementById('mainList')

for(var i = 0; i<newStudentList.length;i++){
    let eachStudent = newStudentList[i]
    let newStudentItemOnLoad = document.createElement('li')
    newStudentItemOnLoad.id += eachStudent.dni
    newStudentItemOnLoad.classList.add('list-group-item')
    newStudentItemOnLoad.innerHTML = '<h2>'+eachStudent.firstName+'</h2>'+'<h2>'+eachStudent.lastName+'</h2>'+'<h3>DNI: '+eachStudent.dni+'</h3>'+'<h2>'+eachStudent.email+'</h2>'
    mainList.appendChild(newStudentItemOnLoad)
}

function Student(firstName, lastName, dni, email) {
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




  // LEVANTAR NOMBRE Y VALIDARLO

  var firstNameInputNode = document.getElementById('firstName')

  firstNameInputNode.onblur = validateEmptyField

  function validateEmptyField(event){
      var inputNode = event.target
      if(!inputNode.value){
          inputNode.classList.remove('is-valid')
          inputNode.classList.add('is-invalid')
      } else {
          inputNode.classList.remove('is-invalid')
          inputNode.classList.add('is-valid')
      }
      // Habilito el boton si ambos (Nombre y dni) son validos
      if(dniInputNode.classList.contains('is-valid') && firstNameInputNode.classList.contains('is-valid') && emailInputNode.classList.contains('is-valid')){
        buttonAddStudent.classList.remove('disabled')
    }else{
        buttonAddStudent.classList.add('disabled')
    }
      
  }

  // Levantar apellido

  var lastNameInputNode = document.getElementById('lastName')


  // LEVANTAR DNI Y VALIDARLO

  var dniInputNode = document.getElementById('dni')

  dniInputNode.onblur = validateDniField

  function validateDniField(event){
      var inputNode = event.target

      var parsedValue = parseInt(inputNode.value, 10)
      // Busco si el dni ingresado ya existe
      for(var i = 0;i<newStudentList.length;i++){
          if(inputNode.value === newStudentList[i].dni){
            var dniExists = true
            break
          } else{
            var dniExists = false
          }
      }

      if(!inputNode.value||isNaN(parsedValue)||parsedValue<0||dniExists===true){
          inputNode.classList.remove('is-valid')
          inputNode.classList.add('is-invalid')
      } else {
          inputNode.classList.remove('is-invalid')
          inputNode.classList.add('is-valid')
      }

      // Habilito el boton
      if(dniInputNode.classList.contains('is-valid') && firstNameInputNode.classList.contains('is-valid')  && emailInputNode.classList.contains('is-valid')){
          buttonAddStudent.classList.remove('disabled')
      }else{
          buttonAddStudent.classList.add('disabled')
      }
  }

  // Levantar Email

  var emailInputNode = document.getElementById('email')

  emailInputNode.onblur = checkValidEmail

  function checkValidEmail(event){
    var node = event.target
    if(node.value.indexOf("@")>=0&&node.value.indexOf('.')>=0){
        node.classList.remove('is-invalid')
        node.classList.add('is-valid')
    }else{
        node.classList.remove('is-valid')
        node.classList.add('is-invalid')
    }
    if(dniInputNode.classList.contains('is-valid') && firstNameInputNode.classList.contains('is-valid')  && emailInputNode.classList.contains('is-valid')){
        buttonAddStudent.classList.remove('disabled')
    }else{
        buttonAddStudent.classList.add('disabled')
    }
}

  // BOTON AGREGAR ALUMNO

  var buttonAddStudent = document.getElementById('addStudentButton')

  buttonAddStudent.onclick = enviarDatos

  function enviarDatos(){
      if(!buttonAddStudent.classList.contains('disabled')){
        let newStudentItem = document.createElement('li')
        newStudentItem.innerHTML = '<h2>'+firstNameInputNode.value+'</h2>'+'<h2>'+lastNameInputNode.value+'</h2>'+'<h3>DNI: '+dniInputNode.value+'</h3>'+'<h2>'+emailInputNode.value+'</h2>'
        newStudentItem.classList.add('list-group-item')
        newStudentItem.id += dniInputNode.value
        mainList.appendChild(newStudentItem)
        // Actualizar cambios en localStorage
        newStudent = new Student(
            firstNameInputNode.value,
            lastNameInputNode.value,
            dniInputNode.value,
            emailInputNode.value
        )
        newStudentList.push(newStudent)
  
        var stringedList = JSON.stringify(newStudentList)
        localStorage.setItem(LS_KEY, stringedList)
      }
      // Limpiar el formulario
      firstNameInputNode.value = ''
      lastNameInputNode.value = ''
      dniInputNode.value = ''
      emailInputNode.value = ''
      buttonAddStudent.classList.add('disabled')
      firstNameInputNode.classList.remove('is-valid')
      dniInputNode.classList.remove('is-valid')
      emailInputNode.classList.remove('is-valid')
  }


  // Eliminar estudiante por el dni

  var deleteByDniInputNode = document.getElementById('deleteDni')

  var deleteDniButton = document.getElementById('deleteStudentButton')

  deleteByDniInputNode.onblur = checkDni

  function checkDni(event){
      let inputNode = event.target
    for(var i = 0;i<newStudentList.length;i++){
        if(inputNode.value === newStudentList[i].dni){
          var dniExists = true
          break
        } else{
          var dniExists = false
        }
    }
    if(dniExists === true){
        inputNode.classList.remove('is-invalid')
        inputNode.classList.add('is-valid')
        deleteDniButton.classList.remove('disabled')
    }else{
        inputNode.classList.remove('is-valid')
        inputNode.classList.add('is-invalid')
    }
 }

 deleteDniButton.onclick = deleteStudent


 function deleteStudent(event){
     if(!deleteDniButton.classList.contains('disabled')){
         // No  entiendo porque si no lo parseo es type number igual
     for(var i = 0;i<newStudentList.length;i++){
        if(deleteByDniInputNode.value === newStudentList[i].dni){
            newStudentList.splice(i, 1)
            break
        }else{
            console.log('No entro')
        }
    }
    // Elimino lo que hay en localStorage para actualizarlo
    localStorage.removeItem('studentsList')
    // Recorro newStudentList actualizado para subirlo al localStorage
for(var i = 0;i<newStudentList.length;i++){
    localStudent = newStudentList[i]
    newStudent = new Student(
        localStudent.firstName,
        localStudent.lastName,
        localStudent.dni,
        localStudent.email
    )
    let parsdeNewJson = JSON.stringify(newStudentList)
    localStorage.setItem('studentsList', parsdeNewJson)
}
    deleteDniButton.classList.add('disabled')
    deleteByDniInputNode.classList.remove('is-valid')
    // Borro el estudiante del HTML
    let studentId = document.getElementById(deleteByDniInputNode.value.toString())
    if(studentId){
        studentId.parentNode.removeChild(studentId)
    }else{
        console.log('No entro')
    }
    deleteByDniInputNode.value = ''
     }
 }

 // Buscar alumno por nombre

 var searchStudentInputNode = document.getElementById('searchText')
 var searchStudentButton = document.getElementById('searchStudentButton')
 var searchStudentList = document.getElementById('searchList')

 searchStudentButton.onclick = searchStudent

 function searchStudent(event){
     searchStudentList.innerHTML = ''
     let studentToSearch = searchStudentInputNode.value.toUpperCase()
     for(var i = 0;i<newStudentList.length;i++){
         let studentsArrayFirstName = newStudentList[i].firstName.toUpperCase()
         let studentsArrayLastName = newStudentList[i].lastName.toUpperCase()
         if(studentToSearch && (studentsArrayFirstName.indexOf(studentToSearch)!==-1 || studentsArrayLastName.indexOf(studentToSearch)!==-1)){
            let newSearchedStudent = document.createElement('li')
            newSearchedStudent.innerHTML = '<h2>'+newStudentList[i].firstName+'</h2>'+'<h2>'+newStudentList[i].lastName+'</h2>'+'<h3>DNI: '+newStudentList[i].dni+'</h3>'+'<h2>'+newStudentList[i].email+'</h2>'
            newSearchedStudent.classList.add('list-group-item')
            searchStudentList.appendChild(newSearchedStudent)
            break
         }else{
            searchStudentList.innerHTML = ''
         }
     }
 }
