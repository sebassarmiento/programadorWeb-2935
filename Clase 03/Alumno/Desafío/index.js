var askedOperation = prompt('Ingrese la operación a realizar: sum, res, mul o div')




if (askedOperation === 'sum') {
  var firstValue = prompt('Ingrese el primer numero')

  firstValue = parseFloat(firstValue, 10)

  var secValue = prompt('Ingrese el segundo numero')

  secValue = parseFloat(secValue, 10)

  var result = firstValue + secValue

  console.log('El resultado de la suma es ' + result)
} else if (askedOperation === 'res') {
  var firstValue = prompt('Ingrese el primer numero')

  firstValue = parseFloat(firstValue, 10)

  var secValue = prompt('Ingrese el segundo numero')

  secValue = parseFloat(secValue, 10)

  var result = firstValue - secValue

  console.log('El resultado de la resta es ' + result)
} else if (askedOperation === 'mul') {
  var firstValue = prompt('Ingrese el primer numero')

  firstValue = parseFloat(firstValue, 10)

  var secValue = prompt('Ingrese el segundo numero')

  secValue = parseFloat(secValue, 10)

  var result = firstValue * secValue

  console.log('El resultado de la multiplicacion es ' + result)

} else if (askedOperation === 'div') {
  var firstValue = prompt('Ingrese el primer numero')

  firstValue = parseFloat(firstValue, 10)

  var secValue = prompt('Ingrese el segundo numero')

  while (secValue == 0) {
    secValue = prompt('Porfavor ingrese otro numero, 0 no es válido')
  }

  secValue = parseFloat(secValue, 10)

  var result = firstValue / secValue

  console.log('El resultado de la división es ' + result)
}