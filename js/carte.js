//Global things
var selectedProducts = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

var saveLocalStorage = function(){
    localStorage.setItem('cart', JSON.stringify(selectedProducts));
}

categories.forEach(category => {
    var productsContainer = document.querySelector('.products')

    productsContainer.innerHTML += '<h1>'+ category.name +'</h1>';
    productsContainer.innerHTML += '<div id="category-anchor-"'+ category.id +'></div>';

    var categoryListContainer = document.createElement('ul');
    categoryListContainer.id = 'category-ul-'+category.id;
    productsContainer.appendChild(categoryListContainer);

    var categoryProducts = products.filter(product => product.category_id === category.id);

    categoryProducts.forEach(product => {
        categoryListContainer.innerHTML +=
            "<li id='product-"+ product.id +"'>" +
            "<figure>" +
            "<img src='img/bouffe/"+ product.image +"'>" +
            "<span>"+ product.name +"</span>" +
            "<div class=\"info\">" +
            "<div class=\"moins\">" +
            "<span onclick='decrementProductNumber("+ product.id +")'>-</span>" +
            "</div>" +
            "<span class=\"number\">0</span>" +
            "<div class=\"plus\">" +
            "<span onclick='incrementProductNumber("+ product.id +")'>+</span>" +
            "</div>" +
            "</div>" +
            "<div class=\"ajout\">" +
            "<div class=\"button-ajouter\">" +
            "<span class=\"ajouter\" onclick='addProductToCart("+product.id+")'>Ajouter</span>" +
            "</div>" +
            "</div>" +
            "</figure>" +
            "</li>"
    })
})

var getActualProductNumber = function(productId){
    var productDiv = document.querySelector('li#product-'+productId);

    return productDiv.querySelector('.number');
}

var incrementProductNumber = function(productId){
    var productNumber = getActualProductNumber(productId);

    var actualNumber = parseInt(productNumber.innerHTML);

    if(actualNumber < 9){
        productNumber.innerHTML = actualNumber + 1;
    }
}

var decrementProductNumber = function(productId){
    var productNumber = getActualProductNumber(productId);

    var actualNumber = parseInt(productNumber.innerHTML);

    if(actualNumber > 0){
        productNumber.innerHTML = parseInt(productNumber.innerHTML) - 1;
    }
}

var addProductToCart = function(productId){
    var existingProduct = selectedProducts.find(product => product.id == productId)
    var productSelectedNumber = getActualProductNumber(productId);

    if(!existingProduct){
        //Add to cart, non existing product
        var selectedProduct = products.find(product => product.id == productId);

        selectedProduct.amount = parseInt(productSelectedNumber.innerHTML);

        selectedProducts.push(selectedProduct);
    }else{
        if(existingProduct.amount + parseInt(productSelectedNumber.innerHTML) > 9){
            existingProduct.amount = 9;
        }else{
            existingProduct.amount += parseInt(productSelectedNumber.innerHTML);
        }
    }

    productSelectedNumber.innerHTML = '0';

    refreshCart();
}

var deleteProductFromCart = function(productId){
    var existingProduct = selectedProducts.find(product => product.id == productId);

    if(existingProduct){
        var indexToRemove = selectedProducts.indexOf(existingProduct);

        selectedProducts.splice(indexToRemove, 1);

        console.log(selectedProducts);
    }

    refreshCart()
}

var refreshCart = function(){
    saveLocalStorage();
    refreshAsideCart()
}

var refreshAsideCart = function(){
    var asideCartElement = document.querySelector('.aside-cart-products-container');

    if(asideCartElement){
        asideCartElement.innerHTML = '';
        if(!selectedProducts.length){

            asideCartElement.innerHTML = '<div class="empty-panier">' +
                '<span>Panier vide</span>' +
                '</div>'

         return;
        }

        selectedProducts.forEach(cartProduct => {
            asideCartElement.innerHTML += '<div onclick="deleteProductFromCart('+ cartProduct.id +')">'+cartProduct.name+'</div>'
        })
    }
}

refreshAsideCart();