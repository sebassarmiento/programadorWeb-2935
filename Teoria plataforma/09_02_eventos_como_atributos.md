# Eventos como atributos

Existen dos formas de suscribirse a los eventos, como atributo en el HTML o semántica. La primera se realiza creando un atributo en nuestro tag HTML con el nombre del evento y asignarle una función para ejecutar.

```html
<input type="button" onclick="showMessage()" />
```

```js
function showMessage(){
  console.log('El usuario hizo click')
}
```

> En este código al hacer click en el botón se va a mostrar un mensaje en consola que diga `'El usuario hizo click'`.

*La desventaja de esta forma es que suele ensuciar nuestro HTML si queremos suscribir nuestro botón a varios eventos, porque cada evento es un atributo más. Si encima a esto también le agregamos que los elementos tienen sus propios atributos como clases o estilos el asunto empeora. Por este motivo a lo largo del curso vamos a utilizar la forma semántica.*

```html
<input type="button" class="btn-primary" onclick="showMessage()" onblur="showBlurMessage()" />
```

```js
function showMessage(){
  console.log('El usuario hizo click')
}

function showBlurMessage(){
  console.log('El usuario perdió el foco')
}
```

> En este código al hacer click en el botón se va a mostrar un mensaje en consola que diga `'El usuario hizo click''` y al perder el foco un mensaje que diga `'El usuario perdió el foco'`.