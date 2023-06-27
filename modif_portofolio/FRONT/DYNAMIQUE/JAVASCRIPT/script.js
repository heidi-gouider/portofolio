//////////// VARIABLES //////////


// encadré description //
let description = document.querySelector(".description");
let p1 = document.querySelector("p1");

// animation pluie //
let pluie = document.querySelector("#drop");
let animation = document.querySelector(".container");

// commande animation //
let commande = document.querySelector(".commande");

//////// CREATION DE CLASSES AU CLICK /////////


// animation pluie //

// pluie.addEventListener("click", function (event) {
//     animation.classList.toggle("tombe");
// });

// Génération d'un nombre aléatoire entre min et max (inclus)
function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

// Génération des coordonnées x et y aléatoires
var randomX = getRandomNumber(0, window.innerWidth); // Position horizontale aléatoire
var randomY = getRandomNumber(0, window.innerHeight); // Position verticale aléatoire

// Utilisation des coordonnées aléatoires pour positionner une goutte d'eau
var drop = document.getElementById('drop'); // Supposons que votre élément de goutte d'eau ait l'ID "drop"
drop.style.left = randomX + 'px'; // Position horizontale
drop.style.top = randomY + 'px'; // Position verticale



// évennement change au click/////

p1.addEventListener("click", function () {
    description.classList.toggle("change");
});




/* je vais maintenant créer un évennement animation sur le bouton play
 quand l'utilisateur click sur play les goutte d'eau tombe de façon aléatoir
 puis quand l'U click sur une goutte elle se transform en oiseau
 certaines goutte font apparaitre au bas de l'image de fond une fleur
 au click sur la fleur l'utilisateur est redirigé vers un projet*/