var cars = [
  {
    model: 'Suran',
    brand: 'volkswagen',
    year: 2015
  },
  {
    model: `Audi TT`,
    brand: 'Audi',
    year: 2017
  },
  {
    model: `Gran turismo`,
    brand: 'Maserati',
    year: 2018
  }
]

var Auto = function (model, brand, year) {
  var id = Math.random()

  this.model = model
  this.brand = brand
  this.year = year

  this.getCarName = function () {
    return model + ' ' + brand + ' ' + year
  }
}

var auto1 = new Auto('Carrera GT', 'Porsche', 2010)
var auto2 = new Auto('Murciélago', 'Lamborghini', 2011)
var auto3 = new Auto('Spider', 'Ferrari', 2008)


console.log(auto1.getCarName())