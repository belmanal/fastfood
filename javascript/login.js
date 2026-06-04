const togglePassword = document.getElementById("togglePassword");
const loginPasswordInput = document.getElementById("loginPassword");

togglePassword.addEventListener("click", function () {
    loginPasswordInput.type =
        loginPasswordInput.type === "password" ? "text" : "password";

    togglePassword.textContent =
        loginPasswordInput.type === "password" ? "🔐" : "🔓";
});

document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value;

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const msg = document.createElement("div");
    msg.className = "login-message";

    msg.style.padding = "12px";
    msg.style.marginTop = "10px";
    msg.style.textAlign = "center";
    msg.style.borderRadius = "10px";
    msg.style.fontWeight = "bold";

    // reset message
    const old = document.querySelector(".login-message");
    if (old) old.remove();

    // 1. champs vides
    if (!email || !password) {
        msg.textContent = "⚠️ Veuillez remplir tous les champs";
        msg.style.background = "#ecd380";
        msg.style.color = "#f55950";
        this.appendChild(msg);
        return;
    }

    // 2. chercher email uniquement
    const user = users.find(u => u.email === email);

    if (!user) {
        msg.textContent = "⚠️ Aucun compte avec cet email. Créez un compte d’abord";
        msg.style.background = "#f5e09e";
        msg.style.color = "#b30000";
        this.appendChild(msg);
        return;
    }

    // 3. vérifier mot de passe
    if (user.password !== password) {
        msg.textContent = "❌ Mot de passe incorrect";
        msg.style.background = "#e7b0b5";
        msg.style.color = "#8b0000";
        this.appendChild(msg);
        return;
    }

    // 4. succès
    msg.textContent = "✅ Connexion réussie !";
    msg.style.background = "#c8f7c5";
    msg.style.color = "#256029";
    this.appendChild(msg);

    localStorage.setItem("currentUser", JSON.stringify(user));

    setTimeout(() => {
        window.location.href = "../index.html";
    }, 1000);
});
