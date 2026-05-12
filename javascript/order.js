document.addEventListener("DOMContentLoaded", function () {

    const cartItems = document.getElementById("cartItems");
    const totalCart = document.getElementById("totalCart");

    if (!cartItems || !totalCart) {
        console.error("Elements cartItems ou totalCart introuvables !");
        return;
    }

    displayCart();

    function displayCart() {

        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        cartItems.innerHTML = "";

        let total = 0;

        if (cart.length === 0) {
            cartItems.innerHTML = "<p>Aucun produit ajouté</p>";
            totalCart.innerText = "Total : 0 DA";
            return;
        }

cart.forEach((item, index) => {

    total += item.price * item.qty;

    cartItems.innerHTML += `
        <div class="cart-item">

            <div class="cart-item-left">
                <span style="font-size:40px">${item.image}</span>

                <div>
                    <h3>${item.qty} ${item.name} </h3>
                    <p>${item.price * item.qty} DA</p>
                </div>
            </div>

            <button class="btn-order"
            onclick="removeItem(${index})">×</button>

        </div>
    `;
});

        totalCart.innerText = "Total : " + total + " DA";
    }

    window.removeItem = function (index) {

        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        cart.splice(index, 1);

        localStorage.setItem("cart", JSON.stringify(cart));

        displayCart();
    };

});

function validateOrder() {

    const cart =
        JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {

        alert("Votre panier est vide !");
        return;
    }

    const user =
        JSON.parse(localStorage.getItem("currentUser"));

    if (!user) {

        alert("Veuillez vous connecter !");

        localStorage.setItem(
            "redirectAfterLogin",
            "order"
        );

        window.location.href = "login.html";

        return;
    }

    alert("Commande validée avec succès");

    localStorage.removeItem("cart");

    location.reload();
}
function clearCart() {

    if (!confirm("Voulez-vous vraiment vider le panier ?")) {
        return;
    }

    localStorage.removeItem("cart");

    location.reload();
}