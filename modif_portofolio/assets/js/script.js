//////////// VARIABLES //////////

// menu responsive //
let body = document.querySelector("body");
let icone = document.querySelector(".icone");

// encadré description //
let description = document.querySelector(".description");
let accueil_description = document.querySelector(".accueil_description");

// animation pluie //
let pluie = document.querySelector("#drop");
let animation = document.querySelector(".container");

// commande animation //
let commande = document.querySelector(".commande");

//////// CREATION DE CLASSES AU CLICK /////////

// menu responsive //
icone.addEventListener("click", function () {
    body.classList.toggle("actif");
});

// animation pluie //
pluie.addEventListener("click", function (event) {
    animation.classList.toggle("tombe");
});


// évennement change au click/////

accueil_description.addEventListener("click", function () {
    description.classList.toggle("change");
});

/* je vais maintenant créer un évennement animation sur le bouton play
 quand l'utilisateur click sur play les goutte d'eau tombe de façon aléatoir
 puis quand l'U click sur une goutte elle se transform en oiseau
 certaines goutte font apparaitre au bas de l'image de fond une fleur
 au click sur la fleur l'utilisateur est redirigé vers un projet*/