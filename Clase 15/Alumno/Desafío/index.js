$(document).ready(function () {
    console.log('Init App')

    var urlBase = 'https://swapi.co/api/people'

    function getData (url, cbk) {
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
              showCharacters(data.results)
              if(!data.next){
                  $('#add').hide(1000, function(){
                      $(this).remove()
                  })
              }else{
                  // No entiendo porque se ejecuta getData sin que haga click
                  $('#add').one('click', getData(data.next, getInfo))
              }
          }else{
              console.log('Error: ', error.responseText)
          }
      }

      function showCharacters(results){
          for(let i = 0; i < results.length; i++){
              if(results[i].height === 'unknown'){
                console.log(results[i].name + ' no se sabe cuanto mide.')
              }else{
                console.log(results[i].name + ' mide ' + results[i].height + 'cm ')
              }
          }
          console.log('-----------')
      }
  })
  