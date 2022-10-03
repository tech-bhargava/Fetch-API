let bg_container = document.getElementById('bg');
let numberOfProducts = 20;

let fetchProducts = async () => {
  for (i = 1; i <= numberOfProducts; i++) {
    await getProduct(i);
  }
};

let getProduct = async (id) => {
  let url = `https://fakestoreapi.com/products/${id}`;
  let response = await fetch(url);
  let product = await response.json();
  createProductCard(product);
};

let createProductCard = (product) => {
  let productElement = document.createElement('div');
  productElement.classList.add('product');
  let productDisplay = `
 <div class="img_container">
      <img src="${product.image}" alt="{product.name}"/>
</div>
<div class="image_info">
     <h3>${product.title}</h3>
     <span class="price"><b>Price :</b> ${product.price} Rs</span>
     <span class="rate"> <b>Rating :</b> ${product.rating.rate}</span> <br/>
</div>`;

  productElement.innerHTML = productDisplay;
  bg_container.appendChild(productElement);
};

fetchProducts();
