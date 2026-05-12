document.addEventListener("DOMContentLoaded", function () {

    const authDiv = document.getElementById("authButtons");

    if (!authDiv) return;

    const user = JSON.parse(localStorage.getItem("currentUser"));

    if (user) {

        authDiv.innerHTML = `
            <span>👋 Bonjour ${user.name}</span>
            <button class="btn" onclick="logout()">Déconnexion</button>
        `;
    }

});

function logout() {

    localStorage.removeItem("currentUser");

    location.reload();
}