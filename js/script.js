document.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('.add-to-cart').forEach(button =>{
        button.addEventListener('click', function() {
            const productName = this.getAttribute('data-name');
            const productPrice = parseFloat(this.getAttribute('data-price'));
            const productImage = this.getAttribute('data-img');
            const totalSpan = document.getElementById('total');
            let currentTotal = parseFloat(totalSpan.innerText);
            currentTotal += productPrice;
            totalSpan.innerText = currentTotal.toFixed(2);
            const cartContent = document.querySelector('.cart-content');
            const item = document.createElement('div');
            item.classList.add('cart-item');
            item.innerHTML = `<img src="${productImage}" alt="${productName}" width="40">
                             <span>${productName} - $${productPrice}</span>
                             <input type="number" value="1" min="1" class="quantity-input">`;
            cartContent.appendChild(item);
            if (cartContent.style.display === 'none'){
                cartContent.style.display = 'block';
            }
        });
    });

    document.getElementById('checkout').addEventListener('click', function(){
        alert("Proceeding to checkout...");

    });
    const categoryLinks = document.querySelectorAll(".categories a");
    const products = document.querySelectorAll(".product");

    function filterProducts(category){
        products.forEach(product =>{
            if (!category || product.getAttribute("data-category") === category){
                product.style.display = "block";
            } else{
                product.style.display = "none";
            }
        });
    }

    categoryLinks.forEach(link =>{
        link.addEventListener("click", function (e){
            e.preventDefault();
            const category = this.getAttribute("data-category");
            filterProducts(category);
            window.location.hash = category;
        });
    });

    if (window.location.hash){
        const categoryFromURL = window.location.hash.substring(1);
        filterProducts(categoryFromURL);
    }
});
