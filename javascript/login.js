const togglePassword = document.getElementById("togglePassword");
const loginPasswordInput = document.getElementById("loginPassword");

togglePassword.addEventListener("click", function () {
    if (loginPasswordInput.type === "password") {
        loginPasswordInput.type = "text";
        togglePassword.textContent = "🔓";
    } else {
        loginPasswordInput.type = "password";
        togglePassword.textContent = "🔐";
    }
});
document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value;

    const savedUser = localStorage.getItem("user");

    // supprimer ancien message
    const oldMsg = document.querySelector(".login-message");
    if (oldMsg) oldMsg.remove();

    const msg = document.createElement("div");
    msg.className = "login-message";

    msg.style.padding = "12px";
    msg.style.marginTop = "10px";
    msg.style.textAlign = "center";
    msg.style.borderRadius = "10px";
    msg.style.fontWeight = "bold";

    // 1. champs vides
    if (!email || !password) {
        msg.textContent = "⚠️ Veuillez remplir tous les champs";
        msg.style.background = "#ecd380";
        msg.style.color = "#f55950";
        this.appendChild(msg);
        return;
    }

    // 2. aucun compte du tout
    if (!savedUser || savedUser === "null") {
        msg.textContent = "⚠️ Aucun compte trouvé. Créez un compte d’abord";
        msg.style.background = "#ecd380";
        msg.style.color = "#8d201a";
        this.appendChild(msg);
        return;
    }

    const user = JSON.parse(savedUser);

    // 3. email n'existe pas → compte différent
    if (email !== user.email) {
        msg.textContent = "⚠️ Aucun compte avec cet email. Créez un compte d’abord";
        msg.style.background = "#f5e09e";
        msg.style.color = "#f94c43";
        this.appendChild(msg);
        return;
    }

    // 🔥 4. mauvais mot de passe
    if (password !== user.password) {
        msg.textContent = "❌ Mot de passe incorrect";
        msg.style.background = "#e7b0b5";
        msg.style.color = "#cf1527";
        this.appendChild(msg);
        return;
    }

    // 5. succès
    msg.textContent = "✅ Connexion réussie !";
    msg.style.background = "#c8f7c5";
    msg.style.color = "#256029";

    this.appendChild(msg);

    localStorage.setItem(
        "currentUser",
        JSON.stringify(user)
    );

    setTimeout(() => {
        window.location.href = "../index.html";
    }, 1000);
});
