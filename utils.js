function createCard(product) {
    console.log(window.location)

    const card = document.createElement("div")
    const card_img = document.createElement("img")
    const card_title = document.createElement("h3")
    const card_price = document.createElement("p")
    const card_cart_link = document.createElement("a")
    const card_detail_link = document.createElement("a")
    const section = document.querySelector(".card-container")

    card.className = "card"
    card_img.className = "card__img"
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
    if (window.location.pathname != "/") {
        card_detail = document.createElement("p")
        card_detail.className = "card__detail"
        card_detail.innerText = product.description 
    }
    
    section.append(card)
    card.append(card_img, card_title, card_detail || null, card_price, card_cart_link, card_detail_link)
}

export default createCard;