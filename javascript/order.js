// ========== FONCTION POUR RÉCUPÉRER LE PRIX ==========
function getPrice(selectId) {
    const select = document.getElementById(selectId);
    const option = select.options[select.selectedIndex];
    return Number(option.getAttribute("data-price")) || 0;
}

// ========== MISE À JOUR DYNAMIQUE DU TOTAL BOX ==========
function updateBoxTotal() {
    const meatPrice = getPrice("meat");
    const extraPrice = getPrice("extra");
    const drinkPrice = getPrice("drink");

    const total = meatPrice + extraPrice + drinkPrice;

    const totalBoxSpan = document.getElementById("boxTotal");
    totalBoxSpan.textContent = total + " DA";
}

// ========== AJOUTER LES ÉCOUTEURS D'ÉVÉNEMENTS ==========
document.addEventListener("DOMContentLoaded", function() {
    const meat = document.getElementById("meat");
    const extra = document.getElementById("extra");
    const drink = document.getElementById("drink");

    meat.addEventListener("change", updateBoxTotal);
    extra.addEventListener("change", updateBoxTotal);
    drink.addEventListener("change", updateBoxTotal);


});

// ========== PANIER ==========
let cart = [];

// ========== AJOUT BOX AU PANIER ==========
function addBoxToCart() {
    const meat = document.getElementById("meat");
    const extra = document.getElementById("extra");
    const drink = document.getElementById("drink");

    const meatPrice = Number(meat.options[meat.selectedIndex].dataset.price || 0);
    const extraPrice = Number(extra.options[extra.selectedIndex].dataset.price || 0);
    const drinkPrice = Number(drink.options[drink.selectedIndex].dataset.price || 0);

    const total = meatPrice + extraPrice + drinkPrice;

    const box = {
        name: `Box (${meat.value}, ${extra.value}, ${drink.value})`,
        price: total
    };

    cart.push(box);
    updateCart();
}

// ========== UPDATE PANIER ==========
function updateCart() {
    const cartItems = document.getElementById("cartItems");
    const totalCart = document.getElementById("totalCart");

    cartItems.innerHTML = "";

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Aucun produit ajouté</p>";
        totalCart.textContent = "Total : 0 DA";
        return;
    }

    let total = 0;

    cart.forEach(item => {
        total += item.price;

        const div = document.createElement("div");
        div.className = "cart-item";
        div.textContent = `${item.name} - ${item.price} DA`;
        cartItems.appendChild(div);
    });

    totalCart.textContent = `Total : ${total} DA`;
}
