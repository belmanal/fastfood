const form = document.getElementById("loginForm");

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

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
        u => u.email === email && u.password === password
    );

    if (user) {

        localStorage.setItem(
            "currentUser",
            JSON.stringify(user)
        );

        const redirect = localStorage.getItem("redirectAfterLogin");

        if (redirect === "order") {

            localStorage.removeItem("redirectAfterLogin");
            window.location.href = "order.html";

        } else {

            window.location.href = "../index.html";
        }

    } else {

        alert("Email ou mot de passe incorrect !");
    }
});
