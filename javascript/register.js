const form = document.getElementById("registerForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // regex nom
    const nameRegex = /^[A-Za-zÀ-ÿ\s]{3,}$/;

    // regex email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // regex password
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;

    if (!nameRegex.test(name)) {
        alert("Le prénom doit contenir uniquement des lettres et au moins 3 caractères.");
        return;
    }
    
    if (!emailRegex.test(email)) {
        alert("Veuillez entrer une adresse email valide.");
        return;
    }
    
    if (!passwordRegex.test(password)) {
        alert("Le mot de passe doit contenir au moins 6 caractères, une majuscule et un chiffre.");
        return;
    }

    alert("Inscription validée !");

    window.location.href = "login.html";
});