/*----- VARIABILI GLOBALI -----*/

/* contatori */

/* variabili per il form */

let form_aziende = document.getElementById("contenitore_form_aziende");
let form_privati = document.getElementById("contenitore_form_privati");
let pulsante_form_privati = document.getElementById("form_privati");
let pulsante_form_aziende = document.getElementById("form_aziende");
let menu = document.getElementById("menu");

/*----- EVIDENZIAMENTO MENU PAGINA ATTUALE -----*/

document.addEventListener("DOMContentLoaded", () => {
  let currentUrl = window.location.href;

  document.querySelectorAll(".menu a").forEach((link) => {
    if (link.href === currentUrl) {
      link.classList.add("active");
    }
  });
});

/*----- SELEZIONE TIPOLOGIA FORM -----*/

function mostra_form_privati() {
  form_aziende.style.display = "none";
  form_privati.style.display = "block";

  pulsante_form_privati.style.color = "rgb(50, 111, 209)";
  pulsante_form_privati.style.borderBottom = "solid 2px rgb(50, 111, 209)";

  pulsante_form_aziende.style.color = "var(--clore-testo-header)";
  pulsante_form_aziende.style.borderBottom =
    "solid 2px var(--clore-testo-header)";
}

function mostra_form_aziende() {
  form_privati.style.display = "none";
  form_aziende.style.display = "block";

  pulsante_form_privati.style.color = "var(--clore-testo-header)";
  pulsante_form_privati.style.borderBottom =
    "solid 2px var(--clore-testo-header)";

  pulsante_form_aziende.style.color = "rgb(50, 111, 209)";
  pulsante_form_aziende.style.borderBottom = "solid 2px rgb(50, 111, 209)";
}

/*----- GESTIONE MENU HAMBURGER -----*/

function apri_menu() {
  if (menu.style.display === "flex") {
    menu.style.display = "none";
    document.getElementById("sottomenu").style.display = "none";
  } else {
    menu.style.display = "flex";
  }
}

/*----- GESTIONE SOTTOMENU RESPONSIVE -----*/

let pulsante_sottomeu = document.getElementById("pulsante_sottomenu");

/* prevengo il click se sono sulla pagina azienda */
if (window.matchMedia("(max-width: 991px)").matches) {
    pulsante_sottomeu.href = "javascript:void(0)";
}
window.addEventListener("resize", () => {
  if (window.matchMedia("(max-width: 991px)").matches) {
      pulsante_sottomeu.href = "javascript:void(0)";
  } else {
    pulsante_sottomeu.href = "azienda.html";
  }
});

/* quando la pagina si ingrandisce da mobile a desktop nascondo il sottomenu */
window.addEventListener("resize", () => {
  if (window.matchMedia("(min-width: 992px)").matches) {
    sottomenu = document.getElementById("sottomenu").style.display = "none";
  }
});

/* mostro sottomenu */
function apri_menu_responsive() {
  let sottomenu = document.getElementById("sottomenu");

  if (window.matchMedia("(max-width: 991px)").matches) {
    if (sottomenu.style.display === "block") {
      sottomenu.style.display = "none";
    } else {
      sottomenu.style.display = "block";
    }
  }
}
