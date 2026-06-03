document.addEventListener("DOMContentLoaded", function () {

    const authDiv = document.getElementById("authButtons");

    if (!authDiv) return;

    const user = JSON.parse(localStorage.getItem("currentUser"));

    if (user) {

    authDiv.innerHTML = `
        <div class="user-menu">

            <button id="userBtn" class="btn">
                Bonjour ${user.name} ▼
            </button>

            <div id="dropdown" class="dropdown hidden">
                <a href="content/profile.html">👤 Mon profil</a>
                <a href="#" onclick="logout()">➜] Déconnexion</a>
            </div>

        </div>
    `;
        const userBtn = document.getElementById("userBtn");

        userBtn.addEventListener("click", function () {

            document
                .getElementById("dropdown")
                .classList.toggle("hidden");
        });
    }

});

function logout() {

    localStorage.removeItem("currentUser");

    location.reload();
}