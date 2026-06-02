let user = JSON.parse(localStorage.getItem("currentUser"));

if (!user) {
    alert("Utilisateur introuvable !");
}

document.getElementById("name").value = user.name;

const togglePassword = document.getElementById("togglePassword");
const newPasswordInput = document.getElementById("newPassword");

togglePassword.addEventListener("click", function () {
    if (newPasswordInput.type === "password") {
        newPasswordInput.type = "text";
        togglePassword.textContent = "🔓";
    } else {
        newPasswordInput.type = "password";
        togglePassword.textContent = "🔐";
    }
});

document.getElementById("profileForm")
.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("name").value;

    const oldPassword = document.getElementById("oldPassword").value;
    const newPassword = document.getElementById("newPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;

    let users = JSON.parse(localStorage.getItem("users")) || [];
    const index = users.findIndex(u => u.email === user.email);

    if (index === -1) return;


    users[index].name = name;
    user.name = name;

    if (oldPassword || newPassword || confirmPassword) {

        // ancien mot de passe
        if (oldPassword !== user.password) {
            alert("Ancien mot de passe incorrect !");
            return;
        }

        // confirmation
        if (newPassword !== confirmPassword) {
            alert("Les mots de passe ne correspondent pas !");
            return;
        }

        if (!passwordRegex.test(newPassword)) {
            alert("Le mot de passe doit contenir au moins 6 caractères, une majuscule et un chiffre.");
            return;
        }

        users[index].password = newPassword;
        user.password = newPassword;
    }

    // save
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", JSON.stringify(user));

    alert("Profil mis à jour !");
    window.location.href = "../index.html";
});