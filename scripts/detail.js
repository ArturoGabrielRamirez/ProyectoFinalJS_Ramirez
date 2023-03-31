import { createCard,loadToStorage } from "./utils";

const params = window.location.search

loadToStorage()

fetch(`https://2jlyy.wiremockapi.cloud/productos${params}`)
  .then(response => response.json())
  .then(productos => {
    createCard(productos)
  })
  .catch(error => console.error(error))