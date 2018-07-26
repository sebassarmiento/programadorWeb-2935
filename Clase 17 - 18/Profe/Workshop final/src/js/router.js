import crossroads from 'crossroads'

import contactController from './controllers/contactController'
import localStorageController from './controllers/localStorageController'

function router () {
  crossroads.addRoute('#/contact', function () {
    $('#root').load('./partials/contact.html', contactController)
  })

  crossroads.addRoute('#/local-storage', function () {
    $('#root').load('./partials/local-storage.html', localStorageController)
  })

  crossroads.addRoute('#/people', function () {
    $('#root').load('./partials/people.html')
  })

  crossroads.addRoute('/', function () {
    $('#root').load('./partials/home.html')
  })

  $(window).on('hashchange', function () {
    crossroads.parse(window.location.hash)
  })

  crossroads.parse(window.location.hash)
}

export default router
