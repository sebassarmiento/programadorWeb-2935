# Eventos semánticos

- La otra forma de suscribirse a los eventos es la semántica, esto implica que la asignación de la función se da en nuestro JavaScript. Para esto tenemos que obtener el nodo del elemento que queremos suscribir y luego asignare al evento la función que queremos ejecutar.

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

> En este código al hacer click en el botón se va a mostrar un mensaje en consola que diga `'El usuario hizo click''`.

Lo bueno de esta implementación es que si queremos registrar más de un evento simplemente los vamos agregando en el JavaScript sin ensuciar el HTML.

```html
<input type="button" id="button" />
```

```js
var button = document.getElementById('button')

button.onclick = showMessage

function showMessage(){
  console.log('El usuario hizo click')
}

button.onmouseover = showMessageOver

function showMessageOver(){
  console.log('El usuario paso el mouse sobre el botón')
}
```

> En este código al hacer click en el botón se va a mostrar un mensaje en consola que diga `'El usuario hizo click''` y al pasar el mouse por encima un mensaje que diga `'El usuario paso el mouse sobre el botón'`.
