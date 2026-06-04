const products = [

    // BURGERS
    { name: "Burger Classic", category: "burger", price: 500, image: "../image/burger_classic.png" },
    { name: "Cheese Burger", category: "burger", price: 550, image: "../image/cheeseurger.png" },
    { name: "Double Burger", category: "burger", price: 700, image: "../image/double-brg.png" },
    { name: "Burger Bacon", category: "burger", price: 750, image: "../image/Crispy-Bacon.png" },
    { name: "Burger Spicy", category: "burger", price: 650, image: "../image/burger_spicy.png" },

    // PIZZAS
    { name: "Pizza Margherita", category: "pizza", price: 800, image: "../image/pizza-margh.png" },
    { name: "Pizza 4 Fromages", category: "pizza", price: 900, image: "../image/pizza-4fro.png" },
    { name: "Pizza Poulet", category: "pizza", price: 950, image: "../image/pizza-poulet.png" },
    { name: "Pizza Viande", category: "pizza", price: 1000, image: "../image/pizza-viande.png" },
    { name: "Pizza Thon", category: "pizza", price: 850, image: "../image/pizza-thon.png" },

    // TACOS
    { name: "Tacos Poulet", category: "tacos", price: 600, image: "../image/tacos-poulet.png" },
    { name: "Tacos Viande", category: "tacos", price: 650, image: "../image/Tacos-viande.png" },
    { name: "Tacos Mixte", category: "tacos", price: 700, image: "../image/tacos-mix.png" },
    { name: "Tacos Gratiné", category: "tacos", price: 750, image: "../image/tacos-grt.png" },

    // CHAPATI
    { name: "Chapati Poulet", category: "chapati", price: 400, image: "../image/ch-pl.png" },
    { name: "Chapati thon", category: "chapati", price: 450, image: "../image/ch-th.png" },
    { name: "Chapati Mixte", category: "chapati", price: 500, image: "../image/ch-mix.png" },

    // SANDWICH
    { name: "Sandwich Thon", category: "sandwich", price: 350, image: "../image/san-thon.png" },
    { name: "Sandwich Poulet", category: "sandwich", price: 400, image: "../image/san-pl.png" },
    { name: "Sandwich Viande", category: "sandwich", price: 450, image: "../image/san-vd.png" },
    { name: "Sandwich Omelette", category: "sandwich", price: 300, image: "../image/san-om.png" },

    // PANINI
    { name: "Panini Fromage", category: "panini", price: 450, image: "../image/pan-fro.png" },
    { name: "Panini Poulet", category: "panini", price: 500, image: "../image/pan-pl.png" },
    { name: "Panini Viande", category: "panini", price: 550, image: "../image/pan-vd.png" },

    // PLATS
    { name: "Escalope Frites", category: "plats", price: 900, image: "../image/esc.png" },
    { name: "Poulet Rôti", category: "plats", price: 1000, image: "../image/poulet-rout.png" },
    { name: "Steak Frites", category: "plats", price: 1100, image: "../image/Steak-frites.png" },
    { name: "Poulet Curry", category: "plats", price: 950, image: "../image/poulet-cry.png" },

    // TURC
    { name: "Kebab", category: "turc", price: 700, image: "../image/kebab.png" },
    { name: "Durum", category: "turc", price: 750, image: "../image/durum.png" },
    { name: "Iskender", category: "turc", price: 900, image: "../image/iskndr.png" },

    // DESSERTS
    { name: "Tiramisu", category: "dessert", price: 300, image: "../image/tiramisu.png" },
    { name: "Fondant Chocolat", category: "dessert", price: 350, image: "../image/fnd.png" },
    { name: "Crêpe Nutella", category: "dessert", price: 250, image: "../image/crp-nt.png" },
    { name: "Glace", category: "dessert", price: 200, image: "../image/glace.png" },

    // BOISSONS
    { name: "Coca Cola", category: "boisson", price: 150, image: "../image/coca.png" },
    { name: "Fanta", category: "boisson", price: 150, image: "../image/fanta.png" },
    { name: "Eau", category: "boisson", price: 100, image: "../image/eau.png" },
    { name: "Jus Orange", category: "boisson", price: 200, image: "../image/orange.png" },
    // GLACES
    { name: "Vanille", category: "glace", price: 200, image: "../image/vanille.png" },
    { name: "Chocolat", category: "glace", price: 250, image: "../image/choco.png" },
    { name: "Fraise", category: "glace", price: 220, image: "../image/fraise.png" },
    { name: "Oreo", category: "glace", price: 300, image: "../image/oreo.png" },
    // EXTRAS
    { name: "Frites", category: "extras", price: 200, image: "../image/frite.png" },
    { name: "Potatoes", category: "extras", price: 250, image: "../image/potatos.png" },
    { name: "Sauce", category: "extras", price: 50, image: "../image/sauce.png" },
    // MILKSHAKES
    { name: "Milkshake Vanille", category: "milkshake", price: 350, image: "../image/milk-vanille.png" },
    { name: "Milkshake Chocolat", category: "milkshake", price: 400, image: "../image/milk-choco.png" },
    { name: "Milkshake Fraise", category: "milkshake", price: 380, image: "../image/milk-fraise.png" },
    //HEALTHY
    { name: "Salade César", category: "healthy", price: 600, image: "../image/cesar.png" },
    { name: "Salade Mixte", category: "healthy", price: 500, image: "../image/s-mix.png" },
    { name: "Salade Thon", category: "healthy", price: 550, image: "../image/s-thon.png" }

];
const container = document.getElementById("productsContainer");

function displayProducts(list) {
    container.innerHTML = "";

    list.forEach(p => {
        container.innerHTML += `
            <div class="product-card">
                <img src="${p.image}">
                <h3>${p.name}</h3>
                <p class="price">${p.price} DA</p>
                <button class="btn-add" onclick="addToCart('${p.name}', ${p.price}, '${p.image}')">Ajouter au panier</button>
            </div>
        `;
    });
}

 displayProducts(products);

window.searchProduct = function () {

    const input = document.getElementById("search");
    const search = input.value.toLowerCase().trim();

    const filtered = products.filter(product =>
        product.name.toLowerCase().includes(search)
    );

    document.getElementById("categoryTitle").innerText =
        search ? `Recherche: "${search}"` : "Tous les produits";

    displayProducts(filtered);
};

window.filterProducts = function () {

    const category = document.getElementById("filter").value;
    const title = document.getElementById("categoryTitle");

    if (category === "all") {

        displayProducts(products);
        title.innerText = "Tous les produits";

    } else {

        const filtered = products.filter(p =>
            p.category === category
        );

        displayProducts(filtered);

        // titre plus joli
        title.innerText =
            category.charAt(0).toUpperCase() + category.slice(1);
    }
};

function addToCart(name, price, image) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let index = cart.findIndex(item => item.name === name);

    if (index !== -1) {
        cart[index].qty++;
    } else {
        cart.push({ name, price,image, qty: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    showPopup("✔ Ajouté au panier!");
}

//popup
function showPopup(msg) {
    let popup = document.getElementById("popup");

    popup.textContent = msg;
    popup.style.display = "block";

    setTimeout(() => {
        popup.style.display = "none";
    }, 1500);
}

window.onload = () => {
    displayProducts(products);
};
