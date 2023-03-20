export function createCard(product) {
  console.log(window.location)

  const card = document.createElement("div")
  const card_img = document.createElement("img")
  const card_title = document.createElement("h3")
  const card_price = document.createElement("p")
  const card_cart_link = document.createElement("a")
  const card_detail_link = document.createElement("a")
  const section = document.querySelector(".card-container")

  card.className = "card shadow-md hover:shadow-xl hover:cursor-pointer hover:scale-110 duration-300 bg-white"
  card_img.className = "card__img "
  card_title.className = "card__title"
  card_price.className = "card__price"
  card_cart_link.className = "card__cart-link"
  card_detail_link.className = "card__detail-link"

  card_img.src = product.image
  card_img.alt = product.alt
  card_title.innerText = product.title
  card_price.innerText = product.price
  card_detail_link.innerText = "More Details"
  card_cart_link.innerText = "Add To Cart"
  card_detail_link.href = product.linkDetail
  card_cart_link.href = product.linkCart


  let card_detail
  if (window.location.pathname != "/" && window.location.pathname != "/index.html") {
    card_detail = document.createElement("p")
    card_detail.className = "card__detail"
    card_detail.innerText = product.description
  }

  section.append(card)
  card.append(card_img, card_title, card_detail, card_price, card_cart_link, card_detail_link)
}

export const cards = [{
  image: "https://picsum.photos/200",
  alt: "imagen producto 1",
  title: "card1",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas illo vero nostrum corrupti vitae id voluptatum aut eligendi voluptates, sit sunt accusantium consectetur harum atque temporibus quas exercitationem perferendis soluta?",
  price: 100,
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
  id: 4,
  linkDetail: "/views/detail.html?id=4",
  linkCart: "/"
}]
