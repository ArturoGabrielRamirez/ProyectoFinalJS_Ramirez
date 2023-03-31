# Proyecto Final de JavaScript

Este proyecto utiliza Vite para manejar la construcción y el desarrollo del mismo. A continuación se explica cómo instalar Vite y cómo correr el proyecto.

## Instalación de Vite

Para instalar Vite, primero asegúrese de tener Node.js (versión 12.0 o superior) instalado en su máquina. Luego ejecute el siguiente comando en su terminal para instalar Vite globalmente:

```bash
npm install -g create-vite
```

## Correr el proyecto

1. Clone el repositorio del proyecto en su máquina local.

2. Navegue hasta la carpeta del proyecto en su terminal.

3. Ejecute el siguiente comando para instalar las dependencias del proyecto:

```bash
npm install
```

4. Ejecute el siguiente comando para iniciar el servidor de desarrollo de Vite:

```bash
npm run dev
```

El proyecto ahora debe estar en ejecución en `http://localhost:5173/`

## Funciones del código

1. Al cargar la página, la función `loadToStorage()` se ejecuta para cargar los datos del carrito almacenados en el `localStorage`. Si la página actual es "cart.html", también se muestra el carrito y se actualiza el contador del carrito en la página.

2. Cuando el usuario selecciona un producto, la función `createCard(product)` crea una tarjeta de producto en la página utilizando un objeto de producto como argumento. Si la página actual no es la página principal o "index.html", se muestra la cantidad del producto seleccionado con botones para incrementar y decrementar la cantidad.

3. Al hacer clic en el botón de incrementar, la función `sumar()` incrementa el contador de cantidad del producto en uno. Por otro lado, al hacer clic en el botón de decrementar, la función `restar()` decrementa el contador en uno, siempre y cuando la cantidad sea mayor que cero.

4. Al hacer clic en el botón "Agregar al carrito", se ejecuta un evento que actualiza la cantidad del producto en el carrito y guarda el carrito actualizado en el `localStorage` utilizando la función `saveToStorage(carrito)`. La función `updateCartCounter(carrito)` se llama para actualizar el contador del carrito en la página.

5. Si el usuario visita la página "cart.html", la función `mostrarCarrito(carrito)` se ejecuta para mostrar los elementos del carrito en la página.

6. Cuando el usuario decide finalizar la compra, completa el formulario con sus datos y hace clic en el botón "Finalizar compra". La función `finalizarCompra(e)` se ejecuta para manejar el proceso de finalización de compra.

   - Si alguno de los campos obligatorios está vacío, se muestra una notificación de error y se detiene el flujo.
   - Si todos los campos obligatorios están completos, se crea un objeto "pedido" con los datos del formulario y los elementos del carrito, y se envía al servidor utilizando una solicitud `fetch`.
   - Si la solicitud se completa con éxito, se vacía el carrito y se actualizan el contador del carrito y la visualización del carrito. Se muestra una notificación de éxito con el ID del pedido.
   - Si ocurre un error durante la solicitud, se muestra una notificación de error con el mensaje del error.

Estas funciones trabajan juntas para proporcionar un flujo de compra completo y una experiencia de usuario fluida al interactuar con el carrito y finalizar la compra.