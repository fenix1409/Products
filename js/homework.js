let elProductsList = document.querySelector(".products-list");
let elSearch = document.querySelector(".search-input");

let productsData = []; 

function renderProducts(arr) {
    elProductsList.innerHTML = ""; 
    arr.forEach(item => {
        let elItem = document.createElement("li");
        elItem.innerHTML = `
        <div>
            <img src="${item.images[0]}" width="70" alt="${item.title}"/>
            <span class="text-green-300">ID: ${item.id}</span>
            <h2 class="text-green-300">Name: ${item.title}</h2>
            <p class="text-green-300">Description: ${item.description}</p>
            <strong class="text-green-300">Price: ${item.price}$</strong>
        </div>
        `;
        elProductsList.appendChild(elItem);
    });
}



fetch("https://dummyjson.com/products").then(res => res.json())
.then(data => {
        productsData = data.products; 
        renderProducts(productsData);  
    })
    .catch(err => {
        console.error("Error fetching products:", err);
    });




// Search function
function filterProducts() {
    const query = elSearch.value.toLowerCase(); 
    const filteredProducts = productsData.filter(item => 
        item.title.toLowerCase().includes(query)
    );  
    renderProducts(filteredProducts);  
}

elSearch.addEventListener("input", filterProducts);
// Search function