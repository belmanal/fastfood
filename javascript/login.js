const form = document.getElementById("loginForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();


    // vérifier utilisateur
    const user = users.find(
        u => u.email === email && u.password === password
    );

    if (user) {

        // session simulée
        localStorage.setItem("currentUser", JSON.stringify(user));

        const redirect =
    localStorage.getItem("redirectAfterLogin");

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