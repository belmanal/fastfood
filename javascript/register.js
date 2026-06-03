const form = document.getElementById("registerForm");
const langue = document.getElementById("langue");


// Traductions
const texts = {
    fr: {
        title: "Créer un compte",
        name: "Prénom",
        email: "Email",
        password: "Mot de passe",
        wilaya: "Wilaya",
        button: "S'inscrire",
        success: "Inscription réussie ✔️"
    },
    ar: {
        title: "إنشاء حساب",
        name: "الاسم",
        email: "البريد الإلكتروني",
        password: "كلمة المرور",
        wilaya: "الولاية",
        button: "تسجيل",
        success: "تم التسجيل بنجاح ✔️"
    },
    en: {
        title: "Create Account",
        name: "First Name",
        email: "Email",
        password: "Password",
        wilaya: "State",
        button: "Sign up",
        success: "Registration successful ✔️"
    }
};

// changer langue
langue.addEventListener("change", () => {
    updateLanguage(langue.value);
});

function updateLanguage(lang) {
    if (!texts[lang]) return;

    document.querySelector("h2").textContent = texts[lang].title;

    const labels = document.querySelectorAll("label");

    labels[1].textContent = "🌍 " + texts[lang].wilaya + " :";
    labels[2].textContent = "👤 " + texts[lang].name + " :";
    labels[3].textContent = "📧 " + texts[lang].email + " :";
    labels[4].textContent = "🔒 " + texts[lang].password + " :";

    document.querySelector(".btn").textContent = texts[lang].button;
}

// message + INSCRIPTION
form.addEventListener("submit", function (e) {

    e.preventDefault();

    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";

    const lang = langue.value || "fr";

    const user = {
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        password: document.getElementById("password").value.trim()
    };

    const nameRegex = /^[A-Za-zÀ-ÿ\u0600-\u06FF\s]{3,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;

    if (!nameRegex.test(user.name)) {

        document.getElementById("nameError").textContent =
            "Le prénom doit contenir seulement des lettres, 3 lettres minimum.";

        return;
    }

    if (!emailRegex.test(user.email)) {

        document.getElementById("emailError").textContent =
            "Adresse email invalide.";

        return;
    }

    if (!passwordRegex.test(user.password)) {

        document.getElementById("passwordError").textContent =
            "6 caractères minimum, 1 majuscule et 1 chiffre.";

        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const exist = users.find(
        u => u.email === user.email
    );

    if (exist) {

        document.getElementById("emailError").textContent =
            "Cet email est déjà utilisé.";

        return;
    }

    users.push(user);

    localStorage.setItem(
        "users",
        JSON.stringify(users)
    );

    const msg = document.createElement("div");

    msg.className = "success";
    msg.style.background = "#d4edda";
    msg.style.color = "#155724";
    msg.style.padding = "12px";
    msg.style.borderRadius = "20px";
    msg.style.marginTop = "10px";
    msg.style.textAlign = "center";
    msg.style.fontWeight = "bold";
    msg.style.border = "2px solid #28a745";

    msg.textContent = texts[lang].success;

    form.appendChild(msg);

    setTimeout(() => {
        window.location.href = "login.html";
    }, 2000);

});
