function getPrice(selectId) {
    const select = document.getElementById(selectId);
    const option = select.options[select.selectedIndex];
    return Number(option.getAttribute("data-price")) || 0;
}

// ===== TOTAL BOX =====
function updateBoxTotal() {
    const meatPrice = getPrice("meat");
    const extraPrice = getPrice("extra");
    const drinkPrice = getPrice("drink");

    const total = meatPrice + extraPrice + drinkPrice;

    const totalBoxSpan = document.getElementById("boxTotal");
    if (totalBoxSpan) {
        totalBoxSpan.textContent = total + " DA";
    }
}

// ===== INIT LISTENERS =====
document.addEventListener("DOMContentLoaded", function () {

    const meat = document.getElementById("meat");
    const extra = document.getElementById("extra");
    const drink = document.getElementById("drink");

    if (meat) meat.addEventListener("change", updateBoxTotal);
    if (extra) extra.addEventListener("change", updateBoxTotal);
    if (drink) drink.addEventListener("change", updateBoxTotal);

    updateCart();
});

// ===== AJOUT BOX =====
function addBoxToCart() {

    const meat = document.getElementById("meat");
    const extra = document.getElementById("extra");
    const drink = document.getElementById("drink");

    const message = document.getElementById("boxMessage");

    if (!meat.value || !extra.value || !drink.value) {
        message.innerHTML = `
            <div class="error-box">
                ⚠️ Veuillez tout choisir
            </div>
        `;
        return;
    }

    const meatPrice = Number(meat.options[meat.selectedIndex].dataset.price);
    const extraPrice = Number(extra.options[extra.selectedIndex].dataset.price);
    const drinkPrice = Number(drink.options[drink.selectedIndex].dataset.price);

    const total = meatPrice + extraPrice + drinkPrice;

    const boxName = `${meat.value} | ${extra.value} | ${drink.value}`;

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let index = cart.findIndex(item => item.name === boxName);

    if (index !== -1) {
        cart[index].qty += 1;
    } else {
        cart.push({
            name: boxName,
            price: total,
            qty: 1
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    message.innerHTML = `
        <div class="success-box">
            <h4>Ajouté au panier avec succès</h4>
        </div>
    `;
    updateCart();
}

// ===== UPDATE PANIER =====
function updateCart() {

    const cartItems = document.getElementById("cartItems");
    const totalCart = document.getElementById("totalCart");

    if (!cartItems || !totalCart) return;

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cartItems.innerHTML = "";

    let total = 0;

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Aucun produit ajouté</p>";
        totalCart.textContent = "Total : 0 DA";
        return;
    }

    cart.forEach((item, index) => {

        const price = Number(item.price) || 0;
        const qty = item.qty || 1;

        const lineTotal = price * qty;

        total += lineTotal;

        cartItems.innerHTML += `
            <div class="cart-item">
                <div class="cart-info">
                    <h3>${qty} x ${item.name}</h3>
                    <p>${lineTotal} DA</p>
                </div>

                <button class="btn-order" onclick="removeItem(${index})">×</button>
            </div>
        `;
    });

    totalCart.textContent = "Total : " + total + " DA";
}

// ===== REMOVE =====
window.removeItem = function (index) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCart();
};

// ===== VALIDATE =====
function validateOrder() {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
        alert("Votre panier est vide !");
        return;
    }

    let user = JSON.parse(localStorage.getItem("currentUser"));

    if (!user) {
        alert("Veuillez vous connecter !");
        window.location.href = "login.html";
        return;
    }

    alert("Commande validée !");
    localStorage.removeItem("cart");
    location.reload();
}

// ===== CLEAR =====
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
