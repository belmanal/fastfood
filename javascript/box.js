function getPrice(selectId) {
    const select = document.getElementById(selectId);
    const option = select.options[select.selectedIndex];
    return Number(option.getAttribute("data-price")) || 0;
}

function updatePrice() {
    const main = document.getElementById("main");
    const side = document.getElementById("side");
    const drink = document.getElementById("drink");
    const dessert = document.getElementById("dessert");

    const total =
        Number(main.options[main.selectedIndex].getAttribute("data-price")) +
        Number(side.options[side.selectedIndex].getAttribute("data-price")) +
        Number(drink.options[drink.selectedIndex].getAttribute("data-price")) +
        Number(dessert.options[dessert.selectedIndex].getAttribute("data-price"));

    document.getElementById("totalPrice").textContent =
        "Total : " + total + " DA";
}



function createBox() {

    const main = document.getElementById("main");
    const side = document.getElementById("side");
    const drink = document.getElementById("drink");
    const dessert = document.getElementById("dessert");

    const result = document.getElementById("resultBox");

    if (!main.value || !side.value || !drink.value || !dessert.value) {
        result.innerHTML = `<div class="error-box">⚠️ Veuillez tout choisir</div>`;
        return;
    }

    const total =
        Number(main.options[main.selectedIndex].dataset.price) +
        Number(side.options[side.selectedIndex].dataset.price) +
        Number(drink.options[drink.selectedIndex].dataset.price) +
        Number(dessert.options[dessert.selectedIndex].dataset.price);

    const box = {
        name: `Box (${main.value}, ${side.value}, ${drink.value}, ${dessert.value})`,
        price: total,
        qty: 1
    };

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let index = cart.findIndex(item => item.name === box.name);

    if (index !== -1) {
        cart[index].qty += 1;
    } else {
        cart.push(box);
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    result.innerHTML = `
        <div class="success-box">
            <h3>Box créée avec succès</h3>
            <p>${box.name}</p>
            <h2>${total} DA</h2>
        </div>
    `;
}
