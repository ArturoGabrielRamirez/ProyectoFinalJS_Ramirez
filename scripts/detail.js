import { createCard } from "./utils";
import { cards } from "./utils";

function findId(product) {
  const linkDelProducto = product.linkDetail
  const urlDelNavegador = window.location.pathname + window.location.search



  if (linkDelProducto == urlDelNavegador) {
    console.log(product)
    createCard(product)
  }
}


cards.forEach(findId)
