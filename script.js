// MENU MOBILE
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");

    if (nav.classList.contains("active")) {
        menuToggle.textContent = "✕";
    } else {
        menuToggle.textContent = "☰";
    }
});

// FECHAR MENU AO CLICAR EM UM LINK
document.querySelectorAll(".nav a").forEach((link) => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
        menuToggle.textContent = "☰";
    });
});

// ANO AUTOMÁTICO NO RODAPÉ
const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}

// ANIMAÇÕES AO ROLAR A PÁGINA
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.12
    }
);

revealElements.forEach((element) => {
    observer.observe(element);
});

// EFEITO NO CABEÇALHO AO ROLAR
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
        header.style.boxShadow = "0 8px 25px rgba(37, 34, 30, 0.08)";
    } else {
        header.style.boxShadow = "none";
    }
});