console.log('Init app')

var daysOfTheWeek = [
  'Lunes',
  'Martes',
  'Miércoles',
  'Miercoles',
  'Jueves',
  'Viernes',
  'Sábado',
  'Sabado',
  'Domingo',
  'Pato'
]

var days

for (var i = 0; i < daysOfTheWeek.length; i++) {
  days = daysOfTheWeek[i]

  switch (days) {
    case 'Lunes':
    case 'Martes':
    case 'Miércoles':
    case 'Miercoles':
    case 'Jueves':
    case 'Viernes':
      console.log(days + ' es un dia hábil')
      break;
    case 'Sábado':
    case 'Sabado':
    case 'Domingo':
      console.log(days + ' es fin de semana')
      break;
    default:
      console.log(days + ' no es un dia válido')
  }
}

