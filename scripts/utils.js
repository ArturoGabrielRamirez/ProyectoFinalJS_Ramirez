
export const cards = [{
  image: "https://picsum.photos/200",
  alt: "imagen producto 1",
  title: "card1",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas illo vero nostrum corrupti vitae id voluptatum aut eligendi voluptates, sit sunt accusantium consectetur harum atque temporibus quas exercitationem perferendis soluta?",
  price: 100,
  stock: 7,
  id: 1,
  linkDetail: "/views/detail.html?id=1",
  linkCart: "/"
},
{
  image: "https://picsum.photos/200",
  alt: "imagen producto 2",
  title: "card2",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas illo vero nostrum corrupti vitae id voluptatum aut eligendi voluptates, sit sunt accusantium consectetur harum atque temporibus quas exercitationem perferendis soluta?",
  price: 300,
  stock: 7,
  id: 2,
  linkDetail: "/views/detail.html?id=2",
  linkCart: "/"
},
{
  image: "https://picsum.photos/200",
  alt: "imagen producto 3",
  title: "card3",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas illo vero nostrum corrupti vitae id voluptatum aut eligendi voluptates, sit sunt accusantium consectetur harum atque temporibus quas exercitationem perferendis soluta?",
  price: 120,
  stock: 6,
  id: 3,
  linkDetail: "/views/detail.html?id=3",
  linkCart: "/"
},
{
  image: "https://picsum.photos/200",
  alt: "imagen producto 4",
  title: "card4",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas illo vero nostrum corrupti vitae id voluptatum aut eligendi voluptates, sit sunt accusantium consectetur harum atque temporibus quas exercitationem perferendis soluta?",
  price: 150,
  stock: 5,
  id: 4,
  linkDetail: "/views/detail.html?id=4",
  linkCart: "/"
}]

export const carrito = []
export let count = 0


export function createCard(product) {

  const card = document.createElement("div")
  const card_img = document.createElement("img")
  const card_content = document.createElement("div")
  const card_title = document.createElement("h3")
  const card_price = document.createElement("p")
  const card_stock = document.createElement("p")
  const card_button_cart = document.createElement("button")
  let card_detail_link = document.createElement("a")
  const section = document.querySelector(".card-container")


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
  card_img.className = "card__img w-full"
  card_content.className = "card__content p-2"
  card_title.className = "card__title"
  card_price.className = "card__price"
  card_stock.className = "card__stock"
  card_button_cart.className = "card__button-cart material-icons text-blue-800 hover:text-yellow-500 m-2"
  card_detail_link.className = "card__detail-link text-blue-800 hover:text-yellow-500 m-2"


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

    card_img.className = "w-full"
    card.className = "flex mx-auto"
    card_detail.className = "card__detail"
    card_counter.className = "card__counter"
    card_button_suma.className = "material-icons rounded-tr-lg rounded-br-lg bg-red-500 hover:bg-white text-white hover:text-black font-bold py-2 px-4 border-b-4 border-blue-800 hover:border-black rounded card__button-suma"
    card_button_resta.className = "material-icons rounded-tl-lg rounded-bl-lg bg-red-500 hover:bg-white text-white hover:text-black font-bold py-2 px-4 border-b-4 border-blue-800 hover:border-black rounded card__button-resta"

    card_detail.innerText = product.description
    card_button_resta.innerText = "remove"
    card_button_suma.innerText = "add"
    card_counter.innerText = count

    card_button_suma.addEventListener("click", sumar)

    card_button_resta.addEventListener("click", restar)

  }

  section.append(card)
  card.append(card_img, card_content)
  card_content.append(card_title, card_detail, card_price, card_stock, card_button_resta, card_button_suma, card_counter, card_button_cart, card_detail_link)
}

//



//



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

//