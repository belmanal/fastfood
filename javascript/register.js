const form = document.getElementById("registerForm");
const langueSelect = document.getElementById("langue");

const translations = {
  fr: {
    title: "Créer un compte",
    lang: "🌍 Langue :",
    wilaya: "📍 Wilaya :",
    name: "👤 Prénom :",
    email: "📧 Email :",
    password: "🔒 Mot de passe :",
    btn: "S'inscrire",
    wilayas: ["Alger", "Oran", "Constantine", "Annaba"]
  },
  en: {
    title: "Create account",
    lang: "🌍 Language :",
    wilaya: "📍 Province :",
    name: "👤 First name :",
    email: "📧 Email :",
    password: "🔒 Password :",
    btn: "Sign up",
    wilayas: ["Algiers", "Oran", "Constantine", "Annaba"]
  },
  ar: {
    title: "إنشاء حساب",
    lang: "🌍 اللغة :",
    wilaya: "📍 الولاية :",
    name: "👤 الاسم :",
    email: "📧 البريد الإلكتروني :",
    password: "🔒 كلمة المرور :",
    btn: "تسجيل",
    wilayas: ["الجزائر", "وهران", "قسنطينة", "عنابة"]
  }
};

// 🔁 CHANGER LANGUE
function changeLanguage(lang) {
  const t = translations[lang];
  if (!t) return;

  document.getElementById("title").textContent = t.title;
  document.getElementById("label-langue").textContent = t.lang;
  document.getElementById("label-wilaya").textContent = t.wilaya;
  document.getElementById("label-name").textContent = t.name;
  document.getElementById("label-email").textContent = t.email;
  document.getElementById("label-password").textContent = t.password;
  document.getElementById("btn").textContent = t.btn;

  // 🔁 wilaya dynamique
  const wilayaSelect = document.getElementById("wilaya");
  wilayaSelect.innerHTML = "";

  t.wilayas.forEach(w => {
    const option = document.createElement("option");
    option.textContent = w;
    wilayaSelect.appendChild(option);
  });

  // ↔️ arabe RTL
  document.body.style.direction = (lang === "ar") ? "rtl" : "ltr";

  // 💾 sauvegarder langue
  localStorage.setItem("lang", lang);
}

// 🌍 changement select
langueSelect.addEventListener("change", function () {
  changeLanguage(this.value);
});

// 🚀 charger langue au démarrage
window.addEventListener("load", () => {
  const saved = localStorage.getItem("lang") || "fr";
  langueSelect.value = saved;
  changeLanguage(saved);
});

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
