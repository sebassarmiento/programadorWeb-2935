
console.log('Init app')

var examResults = [7, 5, 6, 4, 3, 2, 8]

function calculo(notas) {

  var valorNota = 0

  for (var i = 0; i < notas.length; i++) {
    valorNota = valorNota + notas[i]
  }

  var result = valorNota / notas.length

  var resultFinal = 'Tu promedio es: ' + result

  console.log(resultFinal)
  return resultFinal

}

calculo(examResults)
