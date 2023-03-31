import { createCard, loadToStorage } from "./utils"
import { Notify } from "notiflix"


Notify.info("Cargando Productos...")

loadToStorage()

fetch(`https://2jlyy.wiremockapi.cloud/productos`)
  .then(response => response.json())
  .then(productos => {
    function loadProduct(index) {
      if (index < productos.length) {
        createCard(productos[index]);
        setTimeout(() => {
          loadProduct(index + 1);
        }, 100);
      } else {
        Notify.success('Productos cargados correctamente');
      }
    }
    loadProduct(0);
  })
  .catch(() => {
    Notify.failure("Error al cargar los productos")
  }
  )


