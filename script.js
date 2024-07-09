// // Static product data
// const products = [
//     {
//         id: 1,
//         name: "Product 1",
//         description: "This is a great product.",
//         price: "$19.99",
//         image: "images/product1.jpg"
//     },
//     {
//         id: 2,
//         name: "Product 2",
//         description: "This product is also great.",
//         price: "$29.99",
//         image: "images/product2.jpg"
//     },
//     {
//         id: 3,
//         name: "Product 3",
//         description: "You'll love this product.",
//         price: "$39.99",
//         image: "images/product3.jpg"
//     },
//     {
//         id: 4,
//         name: "Product 4",
//         description: "This is another great product.",
//         price: "$49.99",
//         image: "images/product4.jpg"
//     }
// ];

// // Function to create product cards
// function createProductCards() {
//     const productGrid = document.querySelector('.product-grid');

//     products.forEach(product => {
//         const productCard = document.createElement('div');
//         productCard.classList.add('product-card');

//         productCard.innerHTML = `
//             <img src="${product.image}" alt="${product.name}">
//             <h3>${product.name}</h3>
//             <p>${product.description}</p>
//             <p>${product.price}</p>
//             <button>Add to Cart</button>
//         `;

//         productGrid.appendChild(productCard);
//     });
// }


// // Initialize product cards on page load
// document.addEventListener('DOMContentLoaded', createProductCards);


function display(){
    window.alert("Item was successfuly added to the cart");
}