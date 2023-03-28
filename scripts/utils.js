
export const cards = [{
  image: "https://arturogabrielramirez.github.io/Proyecto_Ramirez/images/1.jpg",
  alt: "Gorros con tematica Pokemon",
  title: "Gorros Pokemon",
  description: "Gorros con diseño Pokemon a eleccion",
  price: 1800,
  stock: 7,
  id: 1,
  linkDetail: "/views/detail.html?id=1",
  linkCart: "/"
},
{
  image: "https://arturogabrielramirez.github.io/Proyecto_Ramirez/images/2.jpg",
  alt: "Funko Pop Eevee",
  title: "Funko Pop Eevee",
  description: "Muñeco Funko Pop coleccionable",
  price: 2100,
  stock: 7,
  id: 2,
  linkDetail: "/views/detail.html?id=2",
  linkCart: "/"
},
{
  image: "https://arturogabrielramirez.github.io/Proyecto_Ramirez/images/3.jpg",
  alt: "Pokeball Plus",
  title: "Pokeball Plus",
  description: "Joystick inalámbrico Ninintendo ",
  price: 2250,
  stock: 6,
  id: 3,
  linkDetail: "/views/detail.html?id=3",
  linkCart: "/"
},
{
  image: "https://arturogabrielramirez.github.io/Proyecto_Ramirez/images/4.jpg",
  alt: "Pikachu Toy",
  title: "Pikachu Toy",
  description: "Muñecos picachu y pichu coleccionables",
  price: 1890,
  stock: 5,
  id: 4,
  linkDetail: "/views/detail.html?id=4",
  linkCart: "/"
},
{
  image: "https://arturogabrielramirez.github.io/Proyecto_Ramirez/images/5.jpg",
  alt: "Llaveros Pokemon",
  title: "Llaveros Pokemon",
  description: "Coleccion Aleatoria de llaveros. Hazte con todos!",
  price: 1500,
  stock: 20,
  id: 5,
  linkDetail: "/views/detail.html?id=5",
  linkCart: "/"
},
{
  image: "https://arturogabrielramirez.github.io/Proyecto_Ramirez/images/6.jpg",
  alt: "Juego Pokemon Ruby y Zafiro para Nintendo 3DS",
  title: "Pokemon Ruby y Zafiro",
  description: "Hazte con este combo del 40% con esta super oferta",
  price: 1980,
  stock: 30,
  id: 6,
  linkDetail: "/views/detail.html?id=6",
  linkCart: "/"
},
{
  image: "https://arturogabrielramirez.github.io/Proyecto_Ramirez/images/7.jpg",
  alt: "Juego Pokemon Ultra Sol y Ultra Luna",
  title: "Pokemon Ultra Sol y Ultra Luna",
  description: "Ya disponible la nueva region!",
  price: 4200,
  stock: 20,
  id: 7,
  linkDetail: "/views/detail.html?id=7",
  linkCart: "/"
},
{
  image: "https://arturogabrielramirez.github.io/Proyecto_Ramirez/images/8.jpg",
  alt: "Estuche con tematica Pokemon para Nintendo Switch",
  title: "Estuche Nintendo",
  description: "Transporta tu consola con la mayor proteccion y comodidad",
  price: 1700,
  stock: 10,
  id: 8,
  linkDetail: "/views/detail.html?id=8",
  linkCart: "/"
},
{
  image: "https://arturogabrielramirez.github.io/Proyecto_Ramirez/images/evees.jpg",
  alt: "Peluches coleccionables de evoluciones de Eevee",
  title: "Peluches coleccionables",
  description: "Peluche de evee y sus evoluciones",
  price: 4350,
  stock: 18,
  id: 9,
  linkDetail: "/views/detail.html?id=9",
  linkCart: "/"
},
{
  image: "https://arturogabrielramirez.github.io/Proyecto_Ramirez/images/perladiamante.jpg",
  alt: "Juego Pokemon Perla y Diamante",
  title: "Pokemon Perla y Diamante",
  description: "Redescubri esta maravillosa entrega!",
  price: 3980,
  stock: 10,
  id: 10,
  linkDetail: "/views/detail.html?id=10",
  linkCart: "/"
},
{
  image: "https://arturogabrielramirez.github.io/Proyecto_Ramirez/images/headphones.png",
  alt: "Auriculares con tematica de Pokebola",
  title: "Headphones",
  description: "Auriculares Pokemon con cancelador de ruidos",
  price: 5350,
  stock: 8,
  id: 11,
  linkDetail: "/views/detail.html?id=11",
  linkCart: "/"
},
{
  image: "https://arturogabrielramirez.github.io/Proyecto_Ramirez/images/sun.jpg",
  alt: "Juego Pokemon Sun",
  title: "Pokemon Sun",
  description: "Juego Pokemon Sun para Nintendo 3DS",
  price: 2999,
  stock: 9,
  id: 12,
  linkDetail: "/views/detail.html?id=12",
  linkCart: "/"
},
{
  image: "https://arturogabrielramirez.github.io/Proyecto_Ramirez/images/moon.jpg",
  alt: "Juego Pokemon Moon",
  title: "Pokemon Moon",
  description: "",
  price: 2999,
  stock: 11,
  id: 13,
  linkDetail: "/views/detail.html?id=13",
  linkCart: "/"
},
{
  image: "https://arturogabrielramirez.github.io/Proyecto_Ramirez/images/joystick.jpg",
  alt: "Joystick amarillo con tematica de Pikachu",
  title: "Joystick",
  description: "Joystick Pokemon inalambrico. con alta capacidad de carga",
  price: 3990,
  stock: 5,
  id: 14,
  linkDetail: "/views/detail.html?id=14",
  linkCart: "/"
},
]

export const carrito = []
export let count = 0


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
    product.count = countProduct

    carrito.forEach((item) => {
      if (product.id == item.id) {
        console.log(item.count)
        console.log(count)
        item.count = item.count + count
      } else {
        carrito.push(product)
      }
    })
    if (carrito.length == 0) {
      carrito.push(product)
    }
    console.log(carrito)
  })

  card.className = "card shadow-md hover:shadow-xl hover:cursor-pointer hover:scale-110 duration-300 bg-white"
  card_img.className = "card__img w-full h-64 object-cover shadow-md shadow-gray-400"
  card_content.className = "card__content p-2"
  card_title.className = "card__title text-2xl mb-2 truncate"
  card_price.className = "card__price text-sm"
  card_stock.className = "card__stock text-sm text-gray-400"
  card_button_cart.className = "card__button-cart material-icons text-red-700 hover:text-white border border-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-8 py-4 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900 text-xl"
  card_detail_link.className = "card__detail-link text-red-700 hover:text-white border border-red-700 hover:bg-red-800  font-medium rounded-lg text-sm px-4 py-2 text-center mt-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900 w-full block"


  card_img.src = product.image
  card_img.alt = product.alt
  card_title.innerText = product.title
  card_price.innerText = `Precio: $${product.price} `
  card_stock.innerText = `Stock: ${product.stock} `
  card_detail_link.innerText = "More Details"
  card_button_cart.innerText = "add_shopping_cart"
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

    card_img.className = "bg-white w-full max-w-[500px] shadow-lg shadow-gray-400"
    card.className = "flex mx-auto gap-7"
    card_detail.className = "card__detail"
    pokeball_buttons.className = "flex flex-col w-32 mt-4 items-center justify-center pokeball__buttons relative "
    card_counter.className = "card__counter absolute bg-white z-10 rounded-full border-black border-4 w-10 h-10 flex justify-center items-center font-bold"
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

