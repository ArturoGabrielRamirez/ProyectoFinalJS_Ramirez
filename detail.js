import createCard from "./utils";


const cards = [{
    image: "https://picsum.photos/200",
    alt: "imagen producto 1",
    title: "card1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas illo vero nostrum corrupti vitae id voluptatum aut eligendi voluptates, sit sunt accusantium consectetur harum atque temporibus quas exercitationem perferendis soluta?",
    price: 100,
    id: 1,
    linkDetail: "/detail.html?id=1",
    linkCart: "/"
},
{
    image: "https://picsum.photos/200",
    alt: "imagen producto 2",
    title: "card2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas illo vero nostrum corrupti vitae id voluptatum aut eligendi voluptates, sit sunt accusantium consectetur harum atque temporibus quas exercitationem perferendis soluta?",
    price: 300,
    id: 2,
    linkDetail: "/detail.html?id=2",
    linkCart: "/"
},
{
    image: "https://picsum.photos/200",
    alt: "imagen producto 3",
    title: "card3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas illo vero nostrum corrupti vitae id voluptatum aut eligendi voluptates, sit sunt accusantium consectetur harum atque temporibus quas exercitationem perferendis soluta?",
    price: 120,
    id: 3,
    linkDetail: "/detail.html?id=3",
    linkCart: "/"
},
{
    image: "https://picsum.photos/200",
    alt: "imagen producto 4",
    title: "card4",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas illo vero nostrum corrupti vitae id voluptatum aut eligendi voluptates, sit sunt accusantium consectetur harum atque temporibus quas exercitationem perferendis soluta?",
    price: 150,
    id: 4,
    linkDetail: "/detail.html?id=4",
    linkCart: "/"
}]

function findId(product) {
    const linkDelProducto = product.linkDetail
    const urlDelNavegador = window.location.pathname + window.location.search



    if ( linkDelProducto == urlDelNavegador  ) {
        console.log(product)
         createCard(product)
     }
   }


cards.forEach(findId)





export default cards;