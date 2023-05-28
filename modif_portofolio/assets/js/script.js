// je sélectionne et stock mon body et mon icone 
let body = document.querySelector("body");
let icone = document.querySelector(".icone");
let pluie = document.querySelector("#drop");
let animation = document.querySelector(".container");

// je crée un évenement d'écoute sur un click sur l'icone
// je crée une classe "actif"
icone.addEventListener("click", function () {
    body.classList.toggle("actif");

});

pluie.addEventListener("click", function (event) {
    animation.classList.toggle("tombe");

});