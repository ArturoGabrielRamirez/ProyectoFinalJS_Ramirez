import { loadToStorage, finalizarCompra } from "./utils";

const finalizarCompraButton = document.getElementById("finalizarCompra")
finalizarCompraButton.addEventListener("click", finalizarCompra)
loadToStorage()