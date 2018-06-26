# Evento blur

- El evento blur puede ser escuchado usando el on-event handler, al settear la propiedad `onblur` de un nodo del DOM, el valor asignado es una función que se ejecuta cuando el usuario pierde el foco en el elemento. Este suele ser un evento muy usado para validar formularios.

```html
<input type="text" id="input-text" />
```

```js
var inputText = document.getElementById('input-text')

inputText.onblur = showMessage

function showMessage(){
  console.log('El usuario perdió foco')
}
```

> En este código al hacer perder el foco en el input se va a mostrar un mensaje en consola que diga `'El usuario perdió foco'`.

En todos los eventos se recibe un objeto `event` como primer parámetro que contiene propiedades que identifican que elemento fue clickeado, también para este caso nos va a dar el valor del input en el momento que se perdió el foco.

```html
<input type="text" id="input-text" />
```

```js
var inputText = document.getElementById('input-text')

inputText.onblur = showMessage

function showMessage(event){
  var inputNode =  event.target

  console.log('El usuario perdió foco y el input tiene el valor ' + inputNode.value)
}
```

> En este código al hacer click en el botón se va a mostrar un mensaje en consola que diga `'El usuario perdió foco y el input tiene el valor (valor de input en ese momento)'`.