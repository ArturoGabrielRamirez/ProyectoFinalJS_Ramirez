import { Notify } from "notiflix"

export let carrito = localStorage.getItem("carrito") ? JSON.parse(localStorage.getItem("carrito")) : []
export let count = 0

export function saveToStorage(carrito) {
  localStorage.setItem("carrito", JSON.stringify(carrito))
}

export function createCard(product) {
  const card = document.createElement("div")
  const card_img = document.createElement("img")
  const card_content = document.createElement("div")
  const card_title = document.createElement("h3")
  const card_price = document.createElement("p")
  const card_stock = document.createElement("p")
  let card_button_cart = document.createElement("button")
  let card_detail_link = document.createElement("a")
  const section = document.querySelector(".card-container")
  const pokeball_buttons = document.createElement("div")

  card_button_cart.addEventListener("click", () => {
    let countProduct = count
    let productCopy = { ...product, count: countProduct }
    let found = false
    carrito.forEach((item) => {
      if (productCopy.id == item.id) {
        item.count = item.count + count
        found = true
      }
    })
    if (!found) {
      carrito.push(productCopy)
    }
    saveToStorage(carrito)
    updateCartCounter(carrito)
  })

  card.className = "card shadow-sm hover:shadow-xl hover:cursor-pointer hover:scale-110 duration-300 bg-white shadow-[rgba(0,0,0,0.5)] border-[1px] border-gray-500 rounded animate-fade-in"
  card_img.className = "card__img w-full h-64 object-cover shadow-md shadow-gray-400"
  card_content.className = "card__content p-2 bg-[#EF9A9F]"
  card_title.className = "card__title text-2xl mb-2 truncate"
  card_price.className = "card__price text-sm"
  card_stock.className = "card__stock text-sm text-white"
  card_button_cart.className = "card__button-cart text-white border border-red-700 hover:bg-red-800  font-medium rounded-lg text-sm px-4 py-2 text-center mt-2 dark:border-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900 w-full block bg-red-900"
  card_detail_link.className = "card__detail-link text-white border border-red-700 hover:bg-red-800  font-medium rounded-lg text-sm px-4 py-2 text-center mt-2 dark:border-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900 w-full block bg-red-900"

  card_img.src = product.image
  card_img.alt = product.alt
  card_title.innerText = product.title
  card_price.innerText = `Precio: $${product.price} `
  card_stock.innerText = `Stock: ${product.stock} `
  card_detail_link.innerText = "More Details"
  card_button_cart.innerText = "Agregar Al Carrito"
  card_detail_link.href = product.linkDetail

  let card_button_resta = ""
  let card_button_suma = ""
  let card_counter = ""
  let card_detail = ""

  if (window.location.pathname != "/" && window.location.pathname != "/index.html") {
    card_detail = document.createElement("p")
    card_button_resta = document.createElement("button")
    card_counter = document.createElement("p")
    card_button_suma = document.createElement("button")

    card_detail_link = ""

    card_img.className = "bg-white w-full max-w-[500px] shadow-sm shadow-[rgba(0,0,0,0.5)]"
    card.className = "flex mx-auto gap-7 shadow-sm shadow-[rgba(0,0,0,0.5)] bg-white"
    card_detail.className = "card__detail"
    pokeball_buttons.className = "flex flex-col m-auto w-32 mt-4 items-center justify-center pokeball__buttons "
    card_counter.className = "card__counter  absolute bg-white z-10 rounded-full border-black border-4 w-10 h-10 flex justify-center items-center font-bold"
    card_content.className = "card__content p-2 bg-white"
    card_button_suma.className = "material-icons border-black text-white bg-red-700 hover:bg-red-500 font-bold w-32 h-16 border-4 rounded-t-full card__button-suma"
    card_button_resta.className = "material-icons border-black text-black bg-white  hover:bg-gray-300 font-bold w-32 h-16 border-4 rounded-b-full card__button-resta"

    card_detail.innerText = product.description
    card_button_resta.innerText = "remove"
    card_button_suma.innerText = "add"
    card_counter.innerText = count

    card_button_suma.addEventListener("click", sumar)

    card_button_resta.addEventListener("click", restar)

  } else {
    card_button_cart = ""
  }

  section.append(card)
  card.append(card_img, card_content)
  card_content.append(card_title, card_detail, card_price, card_stock, pokeball_buttons, card_button_cart, card_detail_link)
  pokeball_buttons.append(card_button_suma, card_counter, card_button_resta)
}


export function emptyCart() {
  carrito.length = 0
  localStorage.clear()

  const containerCarrito = document.getElementById("carrito__container")

  containerCarrito.innerHTML = ""
}

export function loadToStorage() {
  const carrito = JSON.parse(localStorage.getItem("carrito")) || []
  updateCartCounter(carrito)
  if (window.location.pathname === "/views/cart.html") {
    mostrarCarrito(carrito)
  }
}

export function sumar() {
  count++
  document.querySelector(".card__counter").textContent = count
}

export function restar() {
  if (count > 0) {
    count--
    document.querySelector(".card__counter").textContent = count
  }
}

export function updateCartCounter() {
  const cartCounter = document.getElementById("cart-counter")
  const totalItems = carrito.reduce((total, item) => total + item.count, 0)
  cartCounter.textContent = totalItems
  console.log(carrito)
}

export function mostrarCarrito(cart) {
  const containerCarrito = document.getElementById("carrito__container")
  containerCarrito.innerHTML = ""
  const buttonEmptyCart = document.createElement("button")

  buttonEmptyCart.className = "text-white border border-red-700 hover:bg-red-800  font-medium rounded-lg text-sm px-4 py-2 text-center mt-2 dark:border-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900 w-full block bg-red-900"
  buttonEmptyCart.innerText = "Vaciar carrito"

  buttonEmptyCart.addEventListener("click", () => {
    emptyCart()
    updateCartCounter()
  })

  cart.forEach((item) => {
    const deleteButton = document.createElement("button")
    deleteButton.className = "delete__button flex self-end w-24 text-white border border-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-4 py-2 text-center mt-2 dark:border-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900 w-full block bg-red-900"
    deleteButton.innerText = `Borrar ${item.title}`
    const itemCarrito = document.createElement("div")
    const infoItem = document.createElement("p")
    const infoPrecio = document.createElement("p")
    const imagenProducto = document.createElement("img")

    deleteButton.addEventListener("click", () => {
      const filteredArray = cart.filter((itemId) => {
        if (item.id === itemId.id) {
          return false
        } else {
          return true
        }
      })
      carrito = filteredArray
      localStorage.setItem("carrito", JSON.stringify(filteredArray))
      mostrarCarrito(filteredArray)
      updateCartCounter()
    })

    itemCarrito.className = "flex itemCarrito inline-block mr-2 p-2 border border-gray-300 rounded"
    infoItem.className = "text-xl font-bold mb-2"
    infoPrecio.className = "text-xl font-bold mb-2"
    imagenProducto.className = "w-52 h-52 mr-2"

    infoItem.innerText = `${item.title} x ${item.count}`
    infoPrecio.innerText = `$${item.price * item.count}`
    imagenProducto.src = item.image


    itemCarrito.append(imagenProducto, infoItem, infoPrecio, deleteButton)

    containerCarrito.append(itemCarrito)
  })

  containerCarrito.append(buttonEmptyCart)
}



export function finalizarCompra(e) {
  e.preventDefault()
  const nombre = document.getElementById("inputNombre").value
  const email = document.getElementById("inputEmail").value
  const direccion = document.getElementById("inputDireccion").value
  const ciudad = document.getElementById("inputCiudad").value
  const provincia = document.getElementById("inputProvincia").value
  const mensaje = document.getElementById("textAreaMensaje").value

  if (!nombre || !email || !direccion || !ciudad || !provincia) {
    Notify.failure("Por favor, completa todos los campos obligatorios.");
    return;
  }

  const pedido = {
    nombre,
    email,
    direccion,
    ciudad,
    provincia,
    mensaje,
    carrito: carrito,
  }

  fetch(`https://2jlyy.wiremockapi.cloud/productos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(pedido)
  })
    .then((response) => {
      if (response.ok) {
        emptyCart()
        saveToStorage(carrito)
        updateCartCounter(carrito)
        mostrarCarrito(carrito)
      } else {
        Notify.failure("Ha ocurrido un error al realizar el pedido. Error: " + response.status);
      }
      return response.json()
    })
    .then((data) => {
      Notify.success("Pedido realizado con éxito. ID de pedido: " + data.id);
    })
    .catch((error) => {
      Notify.failure("Ha ocurrido un error, intentalo de nuevo. Error: " + error.message);
    })
}

