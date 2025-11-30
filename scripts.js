// Menú móvil (dentro del hero)
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    nav.classList.toggle("nav--open");
  });
}

// Scroll al bloque de modelos desde el botón "Agendar"
function scrollToModelos() {
  const modelos = document.getElementById("modelos");
  if (modelos) {
    modelos.scrollIntoView({ behavior: "smooth" });
  }
}

// Formulario de contacto (demo)
const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Formulario enviado (demo para proyecto universitario).");
    contactForm.reset();
  });
}
