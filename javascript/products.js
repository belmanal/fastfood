// ================== PRODUITS ==================
const products = [

    // 🍔 BURGERS
    { name: "Burger Classic", category: "burger", price: 500, image: "../image/burger_classic.png" },
    { name: "Cheese Burger", category: "burger", price: 550, image: "../image/cheeseurger.png" },
    { name: "Double Burger", category: "burger", price: 700, image: "../image/double-brg.png" },
    { name: "Burger Bacon", category: "burger", price: 750, image: "../image/Crispy-Bacon.png" },
    { name: "Burger Spicy", category: "burger", price: 650, image: "../image/burger_spicy.png" },

    // 🍕 PIZZAS
    { name: "Pizza Margherita", category: "pizza", price: 800, image: "../image/pizza-margh.png" },
    { name: "Pizza 4 Fromages", category: "pizza", price: 900, image: "../image/pizza-4fro.png" },
    { name: "Pizza Poulet", category: "pizza", price: 950, image: "../image/pizza-poulet.png" },
    { name: "Pizza Viande", category: "pizza", price: 1000, image: "../image/pizza-viande.png" },
    { name: "Pizza Thon", category: "pizza", price: 850, image: "../image/pizza-thon.png" },

    // 🌮 TACOS
    { name: "Tacos Poulet", category: "tacos", price: 600, image: "../image/tacos-poulet.png" },
    { name: "Tacos Viande", category: "tacos", price: 650, image: "../image/tacos-viande.png" },
    { name: "Tacos Mixte", category: "tacos", price: 700, image: "../image/tacos-mix.png" },
    { name: "Tacos Gratiné", category: "tacos", price: 750, image: "../image/tacos-grt.png" },

    // 🥙 CHAPATI
    { name: "Chapati Poulet", category: "chapati", price: 400, image: "../image/ch-pl.png" },
    { name: "Chapati thon", category: "chapati", price: 450, image: "../image/ch-th.png" },
    { name: "Chapati Mixte", category: "chapati", price: 500, image: "../image/ch-mix.png" },

    // 🥪 SANDWICH
    { name: "Sandwich Thon", category: "sandwich", price: 350, image: "../image/san-thon.png" },
    { name: "Sandwich Poulet", category: "sandwich", price: 400, image: "../image/san-pl.png" },
    { name: "Sandwich Viande", category: "sandwich", price: 450, image: "../image/san-vd.png" },
    { name: "Sandwich Omelette", category: "sandwich", price: 300, image: "../image/san-om.png" },

    // 🥪 PANINI
    { name: "Panini Fromage", category: "panini", price: 450, image: "../image/pan-fro.png" },
    { name: "Panini Poulet", category: "panini", price: 500, image: "../image/pan-pl.png" },
    { name: "Panini Viande", category: "panini", price: 550, image: "../image/pan-vd.png" },

    // 🍛 PLATS
    { name: "Escalope Frites", category: "plats", price: 900, image: "../image/esc.png" },
    { name: "Poulet Rôti", category: "plats", price: 1000, image: "../image/poulet-rout.png" },
    { name: "Steak Frites", category: "plats", price: 1100, image: "../image/steak-frites.png" },
    { name: "Poulet Curry", category: "plats", price: 950, image: "../image/poulet-cry.png" },

    // 🇹🇷 TURC
    { name: "Kebab", category: "turc", price: 700, image: "../image/kebab.png" },
    { name: "Durum", category: "turc", price: 750, image: "../image/durum.png" },
    { name: "Iskender", category: "turc", price: 900, image: "../image/iskndr.png" },

    // 🍰 DESSERTS
    { name: "Tiramisu", category: "dessert", price: 300, image: "../image/tiramisu.png" },
    { name: "Fondant Chocolat", category: "dessert", price: 350, image: "../image/fnd.png" },
    { name: "Crêpe Nutella", category: "dessert", price: 250, image: "../image/crp-nt.png" },
    { name: "Glace", category: "dessert", price: 200, image: "../image/glace.png" },

    // 🥤 BOISSONS
    { name: "Coca Cola", category: "boisson", price: 150, image: "../image/coca.png" },
    { name: "Fanta", category: "boisson", price: 150, image: "../image/fanta.png" },
    { name: "Eau", category: "boisson", price: 100, image: "../image/eau.png" },
    { name: "Jus Orange", category: "boisson", price: 200, image: "../image/orange.png" },
    // 🍦 GLACES
    { name: "Vanille", category: "glace", price: 200, image: "../image/vanille.png" },
    { name: "Chocolat", category: "glace", price: 250, image: "../image/choco.png" },
    { name: "Fraise", category: "glace", price: 220, image: "../image/fraise.png" },
    { name: "Oreo", category: "glace", price: 300, image: "../image/oreo.png" },
    // 🍟 EXTRAS
    { name: "Frites", category: "extras", price: 200, image: "../image/frite.png" },
    { name: "Potatoes", category: "extras", price: 250, image: "../image/potatos.png" },
    { name: "Sauce", category: "extras", price: 50, image: "../image/sauce.png" },
    // 🥤 MILKSHAKES
    { name: "Milkshake Vanille", category: "milkshake", price: 350, image: "../image/milk-vanille.png" },
    { name: "Milkshake Chocolat", category: "milkshake", price: 400, image: "../image/milk-choco.png" },
    { name: "Milkshake Fraise", category: "milkshake", price: 380, image: "../image/milk-fraise.png" },
// 🥗 HEALTHY
    { name: "Salade César", category: "healthy", price: 600, image: "../image/cesar.png" },
    { name: "Salade Mixte", category: "healthy", price: 500, image: "../image/s-mix.png" },
    { name: "Salade Thon", category: "healthy", price: 550, image: "../image/s-thon.png" }

];
// ================== AFFICHAGE ==================
const container = document.getElementById("productsContainer");

function displayProducts(list) {
    container.innerHTML = "";

    if (list.length === 0) {
        container.innerHTML = "<p style='text-align:center;'>Aucun produit trouvé</p>";
        return;
    }

    list.forEach(p => {
        const card = document.createElement("div");
        card.classList.add("product-card");

        card.innerHTML = `
            <img src="${p.image}" alt="${p.name}">
            <h3>${p.name}</h3>
            <p>${p.price} DA</p>
            <button onclick="addToCart('${p.name}', ${p.price})">Ajouter</button>
        `;

        container.appendChild(card);
    });
}

// ================== RECHERCHE (ENTER) ==================
const searchInput = document.getElementById("search");

searchInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        searchProduct();
    }
});

function searchProduct() {
    const value = searchInput.value.toLowerCase().trim();

    const filtered = products.filter(p =>
        p.name.toLowerCase().includes(value) ||
        p.category.toLowerCase().includes(value)
    );

    displayProducts(filtered);

    // reset select pour éviter conflit
    document.getElementById("filter").value = "all";
}

// ================== FILTRE DROPDOWN ==================
function filterProducts() {
    const value = document.getElementById("filter").value;

    searchInput.value = ""; // reset search

    if (value === "all") {
        displayProducts(products);
    } else {
        const filtered = products.filter(p => p.category === value);
        displayProducts(filtered);
    }
}

// ================== PANIER ==================
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ================== AJOUT PANIER ==================
function addToCart(name, price) {
    cart.push({ name, price });
    saveCart();
    renderCart();
}

// ================== AFFICHER PANIER ==================
function renderCart() {
    const cartContainer = document.getElementById("cartContainer");
    const totalSpan = document.getElementById("cartTotal");

    if (!cartContainer) return;

    cartContainer.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;

        const div = document.createElement("div");
        div.classList.add("cart-item");

        div.innerHTML = `
            <span>${item.name} - ${item.price} DA</span>
            <button onclick="removeItem(${index})">❌</button>
        `;

        cartContainer.appendChild(div);
    });

    if (totalSpan) {
        totalSpan.innerText = total + " DA";
    }
}

// ================== SUPPRIMER ==================
function removeItem(index) {
    cart.splice(index, 1);
    saveCart();
    renderCart();
}

// ================== SAUVEGARDE ==================
function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// ================== INIT ==================
window.onload = () => {
    displayProducts(products); // ton menu
    renderCart(); // panier
};
