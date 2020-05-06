
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
     let model = product.model.toLowerCase();
     let brand = product.brand.toLowerCase();

     if (model.includes(searchQuery) || brand.includes(searchQuery)) {
       filteredProducts.push(product);
     }
   }
   appendProducts(filteredProducts);

 }


// setTimeout(function () {
 //resizeAllGridItems();
//}, 50);
