/* =========================================
   MENU MOBILE
========================================= */

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {

    menu.classList.toggle("active");

});


/* =========================================
   FECHAR MENU AO CLICAR
========================================= */

const links = document.querySelectorAll(".menu a");

links.forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("active");

    });

});


/* =========================================
   ANO AUTOMÁTICO
========================================= */

const ano = document.getElementById("ano");

if (ano) {

    ano.textContent =
        new Date().getFullYear();

}


/* =========================================
   ANIMAÇÃO AO ENTRAR NA TELA
========================================= */

const elementos =
    document.querySelectorAll(
        ".offer-card, .menu-card, .event, .gallery-item"
    );


const observador =
    new IntersectionObserver(

        (entradas) => {

            entradas.forEach(entrada => {

                if (entrada.isIntersecting) {

                    entrada.target.classList.add(
                        "aparecer"
                    );

                    observador.unobserve(
                        entrada.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


elementos.forEach(elemento => {

    elemento.style.opacity = "0";

    elemento.style.transform =
        "translateY(25px)";

    elemento.style.transition =
        "opacity .7s ease, transform .7s ease";

    observador.observe(elemento);

});


/* =========================================
   CLASSE DE ANIMAÇÃO
========================================= */

const estiloAnimacao =
    document.createElement("style");

estiloAnimacao.textContent = `

    .aparecer {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }

`;

document.head.appendChild(
    estiloAnimacao
);