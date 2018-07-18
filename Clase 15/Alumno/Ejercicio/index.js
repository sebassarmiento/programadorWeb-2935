$(document).ready(function () {
  console.log('Init app')

  var urlBase = 'https://swapi.co/api/people/5/'

  function getData(url, cbk) {
    $.ajax(url)
      .done(function (data) {
        cbk(null, data)
      })
      .fail(function (error) {
        cbk(error)
      })
  }

  getData(urlBase, getInfo)

  function getInfo(error, data){
    if(!error){
      showCharacter(data)
    }else{
      console.log('Error: ', error.responseText)
    }
  }


  function showCharacter(characters){
    console.log(characters.name + ' ' + characters.height + 'cm '+ characters.eye_color + 'eyes.')
  }
})
