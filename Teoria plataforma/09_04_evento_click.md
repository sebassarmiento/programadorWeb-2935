# Evento click

- El evento click puede ser escuchado usando el on-event handler, al settear la propiedad `onclick` de un nodo del DOM, el valor asignado es una función que se ejecuta cuando el usuario hace click en el elemento.

```html
<input type="button" id="button" />
```

```js
var button = document.getElementById('button')

button.onclick = showMessage

function showMessage(){
  console.log('El usuario hizo click')
}
```

> En este código al hacer click en el botón se va a mostrar un mensaje en consola que diga `'El usuario hizo click'`.

En todos los eventos se recibe un objeto `event` como primer parámetro que contiene propiedades que identifican que elemento fue clickeado.

```html
<input type="button" id="button" />
```

```js
var button = document.getElementById('button')

button.onclick = showMessage

function showMessage(event){
  var inputNode =  event.target
  
  console.log('El usuario hizo click en el elmento con id ' + inputNode.id)
}
```

> En este código al hacer click en el botón se va a mostrar un mensaje en consola que diga `'El usuario hizo click en el elmento con id button'`.