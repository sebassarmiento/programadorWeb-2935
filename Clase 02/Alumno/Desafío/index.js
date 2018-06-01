var gender = prompt('Ingrese Femenino o Masculino')

if (gender == "Femenino") {
    genderResult = "Sra."
} else if (gender == "Masculino") {
    genderResult = "Sr."
} else {
    console.log("No escribiste bien")
}

var age = prompt('Ingrese su edad')

if (age < 18) {
    ageResult = "usted es menor de edad no puede ingresar"
} else if (age >= 18) {
    ageResult = "usted es mayor de edad puede ingresar"
} else {
    console.log("No escribiste un numero")
}

resultadoFinal = genderResult + " " + ageResult

console.log(resultadoFinal)