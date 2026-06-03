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

    const lang = langue.value || "fr";

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // 🔥 AJOUT LOCALSTORAGE (nouveau فقط)
    const user = {
        name: name,
        email: email,
        password: password
    };

    localStorage.setItem("user", JSON.stringify(user));

    // message succès
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
msg.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
msg.style.display = "inline-block";
    msg.textContent = texts[lang].success;

    form.appendChild(msg);

    // redirection login
    setTimeout(() => {
        window.location.href = "login.html";
    }, 4000);
});
