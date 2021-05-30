categories.forEach(category => {
    var productsContainer = document.querySelector('.products')

    productsContainer.innerHTML += '<h1>' + category.name + '</h1>';

    var categoryListContainer = document.createElement('ul');
    categoryListContainer.id = 'category-ul-' + category.id;
    categoryListContainer.className = "category-ul";
    productsContainer.appendChild(categoryListContainer);

    var categoryProducts = products.filter(product => product.category_id === category.id);

    var categoriesMenu = document.querySelector('ul.category');

    categoriesMenu.innerHTML += '<li><a href="#category-ul-' + category.id + '">' + category.name + '</a></li>'

    categoryProducts.forEach(product => {
        categoryListContainer.innerHTML +=
            "<li id='product-" + product.id + "'>" +
            "<figure>" +
            "<img src='img/bouffe/" + product.image + "'>" +
            "<span>" + product.name + "</span>" +
            "<div class=\"info\">" +
            "<div class=\"moins\">" +
            "<span onclick='decrementProductNumber(" + product.id + ")'>-</span>" +
            "</div>" +
            "<span class=\"number\">0</span>" +
            "<div class=\"plus\">" +
            "<span onclick='incrementProductNumber(" + product.id + ")'>+</span>" +
            "</div>" +
            "</div>" +
            "<span class=\"price\">€ "+ product.price +"  </span>" +
            "<div class=\"ajout\">" +
            "<div class=\"button-ajouter\">" +
            "<span class=\"ajouter\" onclick='addProductToCart(" + product.id + ")'>Ajouter</span>" +
            "</div>" +
            "</div>" +
            "</figure>" +
            "</li>"
    })


})

var getActualProductNumber = function (productId) {
    var productDiv = document.querySelector('li#product-' + productId);

    return productDiv.querySelector('.number');
}

var incrementProductNumber = function (productId) {
    var productNumber = getActualProductNumber(productId);

    var actualNumber = parseInt(productNumber.innerHTML);

    if (actualNumber < 9) {
        productNumber.innerHTML = actualNumber + 1;
    }
}

var decrementProductNumber = function (productId) {
    var productNumber = getActualProductNumber(productId);

    var actualNumber = parseInt(productNumber.innerHTML);

    if (actualNumber > 0) {
        productNumber.innerHTML = parseInt(productNumber.innerHTML) - 1;
    }
}

var addProductToCart = function (productId) {
    var existingProduct = selectedProducts.find(product => product.id == productId)
    var productSelectedNumber = getActualProductNumber(productId);

    if (!existingProduct) {
        //Add to cart, non existing product
        var selectedProduct = products.find(product => product.id == productId);

        selectedProduct.amount = parseInt(productSelectedNumber.innerHTML);

        if (selectedProduct.amount > 0) {
            selectedProducts.push(selectedProduct);
        }
    } else {
        if (existingProduct.amount + parseInt(productSelectedNumber.innerHTML) > 9) {
            existingProduct.amount = 9;
        } else {
            existingProduct.amount += parseInt(productSelectedNumber.innerHTML);
        }
    }

    productSelectedNumber.innerHTML = '0';

    refreshCart();
}