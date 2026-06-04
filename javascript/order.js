document.addEventListener("DOMContentLoaded", function () {

    const meat = document.getElementById("meat");
    const extra = document.getElementById("extra");
    const drink = document.getElementById("drink");

    if (meat) meat.addEventListener("change", updateBoxTotal);
    if (extra) extra.addEventListener("change", updateBoxTotal);
    if (drink) drink.addEventListener("change", updateBoxTotal);

    updateCart();
});

function updateCart() {

    const cartItems = document.getElementById("cartItems");
    const totalCart = document.getElementById("totalCart");

    if (!cartItems || !totalCart) return;

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cartItems.innerHTML = "";

    let total = 0;
    let totalItems = 0;

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Votre panier est vide</p>";
        return;
    }

    cart.forEach((item, index) => {

    const price = Number(item.price) || 0;
    const qty = item.qty || 1;
    
    const lineTotal = price * qty;

    total += lineTotal;

    cartItems.innerHTML += `
        <div class="cart-item">

            <img class="cart-img" src="${item.image || '../image/default.png'}">

            <div class="cart-info">
                <h3>${item.name}</h3>
                <p>${lineTotal} DA</p>
            </div>

            <select onchange="updateQty(${index}, this.value)">
                ${[1,2,3,4,5,6,7,8,9,10].map(n => `
                    <option value="${n}" ${n === qty ? "selected" : ""}>
                        ${n}
                    </option>
                `).join("")}
            </select>


            <button class="btn-order" onclick="removeItem(${index})">🗑️</button>
        </div>
    `;
});


    if (finalTotal) { finalTotal.textContent = total + " DA"; }
}

function updateQty(index, newQty) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart[index].qty = Number(newQty);

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCart();
}

window.removeItem = function (index) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCart();
};

function validateOrder() {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
        alert("Votre panier est vide !");
        return;
    }

    let user = JSON.parse(localStorage.getItem("currentUser"));

    if (!user) {
        alert("Veuillez vous connecter d'abord!");
        window.location.href = "login.html";
        return;
    }

    alert("Votre commande a été effectuée avec succès!");
    localStorage.removeItem("cart");
    location.reload();
}


function clearCart() {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
        alert("Votre panier est déjà vide !");
        return;
    }

    if (!confirm("Voulez-vous vraiment vider le panier ?")) return;

    localStorage.removeItem("cart");
    location.reload();
}
