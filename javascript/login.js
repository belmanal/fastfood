const form = document.getElementById("loginForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    // Récupérer tous les utilisateurs inscrits
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Chercher l'utilisateur
    const user = users.find(
        u => u.email === email && u.password === password
    );

    if (user) {

        // Sauvegarder la session
        localStorage.setItem(
            "currentUser",
            JSON.stringify(user)
        );

        // Redirection si l'utilisateur voulait commander
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
