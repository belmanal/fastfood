function getSelectedOption(id) {
    const select = document.getElementById(id);
    const option = select.options[select.selectedIndex];

    if (!option.value) {
        return { name: "Non sélectionné", price: 0 };
    }

    return {
        name: option.value,
        price: Number(option.dataset.price)
    };
}

function updatePrice() {

    const main = getSelectedOption("main");
    const side = getSelectedOption("side");
    const drink = getSelectedOption("drink");
    const dessert = getSelectedOption("dessert");

    const total = main.price + side.price + drink.price + dessert.price;

    document.getElementById("totalPrice").innerText =
        "Total : " + total + " DA";
}

function createBox() {

    const main = getSelectedOption("main");
    const side = getSelectedOption("side");
    const drink = getSelectedOption("drink");
    const dessert = getSelectedOption("dessert");

    const total = main.price + side.price + drink.price + dessert.price;

    const box = {
        image: "🍱",
        name: "Box personnalisée",
        price: total,
        items: `${main.name}, ${side.name}, ${drink.name}, ${dessert.name}`
    };

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(box);

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Box ajoutée au panier !");

    window.location.href = "order.html";
}