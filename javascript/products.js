document.addEventListener("DOMContentLoaded", function () {

const products = [

    {
        name: "Big Burger",
        category: "burger",
        price: 800,
        image: "🍔",
        ingredients: "Double steak, cheddar, sauce deluxe"
    },

    {
        name: "Pizza Royale",
        category: "pizza",
        price: 1200,
        image: "🍕",
        ingredients: "Mozzarella, viande fumée et olives"
    },

    {
        name: "Tacos Mixte",
        category: "tacos",
        price: 900,
        image: "🌮",
        ingredients: "Poulet, viande hachée et frites"
    },

    {
        name: "Panini Poulet",
        category: "panini",
        price: 700,
        image: "🥪",
        ingredients: "Poulet grillé et fromage fondant"
    },

    {
        name: "Chapati Viande",
        category: "chapati",
        price: 650,
        image: "🌯",
        ingredients: "Viande hachée avec sauce maison"
    },

    {
        name: "Libanais",
        category: "libanais",
        price: 1000,
        image: "🥙",
        ingredients: "Poulet mariné et légumes frais"
    },

    {
        name: "Frites",
        category: "frites",
        price: 300,
        image: "🍟",
        ingredients: "Frites croustillantes maison"
    },

    {
        name: "Milkshake Chocolat",
        category: "milkshake",
        price: 500,
        image: "🥤",
        ingredients: "Milkshake chocolat crémeux"
    }

];

    const container = document.getElementById("productsContainer");

    function displayProducts(list) {

        container.innerHTML = "";

        list.forEach(product => {

            container.innerHTML += `
                <div class="product-card">
                    <h2>${product.image}</h2>
                    <h3>${product.name}</h3>
                    <p class="price">${product.price} DA</p>
                    <button class="desc" onclick="showIngredients(this)" data-ingredients="${product.ingredients}">
                        Ingrédients
                    </button>

                    <button class="btn"
                        onclick="addToCart('${product.image}', '${product.name}', ${product.price})">
                        Ajouter au panier
                    </button>
                </div>
            `;
        });
    }

    displayProducts(products);

    // SEARCH
    window.searchProduct = function () {

        const search = document.getElementById("search").value.toLowerCase();

        const filtered = products.filter(product =>
            product.name.toLowerCase().includes(search)
        );

        displayProducts(filtered);
    };

    // FILTER
    window.filterProducts = function () {

        const category = document.getElementById("filter").value;

        const title = document.getElementById("categoryTitle");

        if (category === "all") {
            displayProducts(products);
            title.innerText = "Tous les produits";
        } else {
            const filtered = products.filter(p => p.category === category);
            displayProducts(filtered);
            title.innerText = category;
        }
    };

    // CART
    window.addToCart = function (image, name, price) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let existing = cart.find(item => item.name === name);

    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({
            image,
            name,
            price,
            qty: 1
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(name + " ajouté au panier !");
};

});

function showIngredients(btn) {
    const text = btn.getAttribute("data-ingredients");
    document.getElementById("popupText").innerText = text;
    document.getElementById("popup").classList.remove("hidden");
}

function closePopup() {
    document.getElementById("popup").classList.add("hidden");
}