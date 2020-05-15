"use strict";


// Intailize Materialize sidenav
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  let options = {
    edge: 'left'
  };
  var instances = M.Sidenav.init(elems, options);
});

// Search function

function search(value) {
  let searchQuery = value.toLowerCase();
  let filteredProducts = [];
  for (let product of products) {
    let productname = product.productname.toLowerCase();

    if (productname.includes(searchQuery)) {
      filteredProducts.push(product);
    }
  }
  appendProducts(filteredProducts);

}

// Collapsible

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.collapsible');
  var instances = M.Collapsible.init(elems);
});

// carousel

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems);
});


var instance = M.Carousel.init({
  fullWidth: true,
  indicators: true
});


// Append products Json

let products = [];


fetch('json/main.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    console.log(json);
    products = json;
    appendProducts(products);
  })

function appendProducts(productArray) {
  let htmlTemplate = "";

  for (let product of productArray) {
    console.log(product);
    htmlTemplate += `
        <div class="produkt">

          <div class="badgets-wish">
            <img src="images/wish.png" alt="ønskeseddel">
          </div>
          <img class="produkt-billede" src="${product.img}" alt="produkt-billede">
          <div class="produkt-tekst">
            <h4>${product.productname}</h4>
            <p>${product.text}.</p>
          </div>

            <div class="pris">
              <h2>${product.price} kr.</h2>
            </div>

            `;

            if (product.tilbud != false) {
              htmlTemplate += `
              <div class="tilbud">
                <h6>Tilbud</h6>
              </div>
              `;
            }

    if (product.fromprice != null) {
      htmlTemplate += `
            <div class="align-bottom">
              <p class="fromprice">${product.fromprice} kr.</p>
              <div class="placement">
              <img src="images/green-circle.png" alt="på lager">
              <p>Online (+20)</p>
              </div>
            </div>
         `;

    } else {
      htmlTemplate += `
    <div class="align-bottom">
      <div class="placement">
      <img src="images/green-circle.png" alt="på lager">
      <p>Online (+20)</p>
      </div>
    </div>

   `;
    }

    htmlTemplate += "</div>";



  }
  document.querySelector("#products-container").innerHTML = htmlTemplate;
}

appendProducts(products);

function addNewProduct() {
  let productname = document.querySelector("#productname").value;
  let text = document.querySelector("#text").value;
  let price = document.querySelector("#price").value;
  let img = document.querySelector("#img").value;
  let fromprice = document.querySelector("#fromprice").value;
  let tilbud = document.querySelector("#tilbud").value;

  let newProduct = {
    text: text,
    productname: productname,
    price: price,
    img: img,
    fromprice: fromprice,
    tilbud: tilbud,
  };
  products.push(newProduct);
  console.log(newProduct);
  appendProducts(products);
  document.querySelector("#text").value = "";
  document.querySelector("#productname").value = "";
  document.querySelector("#price").value = "";
  document.querySelector("#img").value = "";
  document.querySelector("#fromprice").value = "";
  document.querySelector("#tilbud").value = "";

  showPage("products");
};




// setTimeout(function () {
//resizeAllGridItems();
//}, 50);
