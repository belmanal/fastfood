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
    const main = document.getElementById("main").value;
    const side = document.getElementById("side").value;
    const drink = document.getElementById("drink").value;
    const dessert = document.getElementById("dessert").value;

    const totalText = document.getElementById("totalPrice").textContent;

    const result = document.getElementById("resultBox");

    result.innerHTML = `
        <div class="success-box">
            <h3>✔️ Box créée avec succès</h3>
            <p><strong>🍔 Plat :</strong> ${main}</p>
            <p><strong>🍟 Accompagnement :</strong> ${side}</p>
            <p><strong>🥤 Boisson :</strong> ${drink}</p>
            <p><strong>🍰 Dessert :</strong> ${dessert}</p>
            <h4>${totalText}</h4>
        </div>
    `;
   
}
