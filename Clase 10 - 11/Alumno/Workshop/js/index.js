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
    newStudentItemOnLoad.classList.add('list-group-item')
    newStudentItemOnLoad.innerHTML = '<h2>'+eachStudent.firstName+'</h2>'+'<h3>DNI: '+eachStudent.dni+'</h3>'
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
      if(dniInputNode.classList.contains('is-valid') && firstNameInputNode.classList.contains('is-valid')){
        buttonAddStudent.classList.remove('disabled')
    }else{
        buttonAddStudent.classList.add('disabled')
    }
      
  }

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
      if(dniInputNode.classList.contains('is-valid') && firstNameInputNode.classList.contains('is-valid')){
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
        newStudentItem.innerHTML = '<h2>'+firstNameInputNode.value+'</h2>'+'<h3>DNI: '+dniInputNode.value+'</h3>'
        newStudentItem.classList.add('list-group-item')
        mainList.appendChild(newStudentItem)
        // Actualizar cambios en localStorage
        newStudent = new Student(
            firstNameInputNode.value,
            null,
            dniInputNode.value,
            null
        )
        newStudentList.push(newStudent)
  
        var stringedList = JSON.stringify(newStudentList)
        localStorage.setItem(LS_KEY, stringedList)
      }
      // Limpiar el formulario
      firstNameInputNode.value = ''
      dniInputNode.value = ''
      buttonAddStudent.classList.add('disabled')
      firstNameInputNode.classList.remove('is-valid')
      dniInputNode.classList.remove('is-valid')
  }
