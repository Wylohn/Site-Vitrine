//Global things
var selectedProducts = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

var saveLocalStorage = function(){
    localStorage.setItem('cart', JSON.stringify(selectedProducts));
}

var refreshCart = function(){
    saveLocalStorage();
    refreshAsideCart();
    refreshCartPage();
}

var deleteProductFromCart = function(productId){
    var existingProduct = selectedProducts.find(product => product.id == productId);

    if(existingProduct){
        var indexToRemove = selectedProducts.indexOf(existingProduct);

        selectedProducts.splice(indexToRemove, 1);
    }

    refreshCart()
}


var updateCartQuantity = function(event, productId){
    var selectedProduct = selectedProducts.find(product => product.id == productId);

    selectedProduct.amount = event.target.value;

    refreshCart();
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

var getSubtotalValue = function(){
    var subtotalValue = 0;

    selectedProducts.forEach(selectedProduct => {
        subtotalValue += (selectedProduct.price * selectedProduct.amount);
    })

    return subtotalValue;
}

var refreshCartPage = function(){
    var cartProductsTable = document.getElementById('cart-products-table');
    if(cartProductsTable){
        cartProductsTable.innerHTML = '<thead>\n' +
            '<th>Product</th>' +
            '<th>Quantity</th>' +
            '<th>Subtotal</th>' +
            '</thead>';


        selectedProducts.forEach(product => {
            cartProductsTable.innerHTML += '<tr>\n' +
                '<td>' +
                '<div class="cart-info">' +
                '<img src="img/bouffe/'+ product.image +'" alt="">' +
                '<div>' +
                '<p>'+ product.name +'</p>' +
                '<small>Price: €'+ product.price +'</small>' +
                '<br>' +
                '<button onclick="deleteProductFromCart('+ product.id +')" class="danger">Supprimer</a>' +
                '</div>' +
                '</div>' +
                '</td>' +
                '<td><input min="1" max="9" type="number" onchange="updateCartQuantity(event, '+ product.id +')" value="'+ product.amount +'"></td>' +
                '<td>€'+ (product.amount * product.price).toFixed(2) +'</td>' +
                '</tr>'
        })
    }

    var taxValue = getSubtotalValue() * 0.2;

    var totalValue = getSubtotalValue() + taxValue;

    document.querySelector('.subtotal-value').innerHTML = '€'+getSubtotalValue().toFixed(2)
    document.querySelector('.tax-value').innerHTML = '€'+taxValue.toFixed(2)
    document.querySelector('.total-value').innerHTML = '€'+totalValue.toFixed(2)
}

refreshCartPage();
