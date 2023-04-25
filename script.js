const body = document.body;
let count = 0;
// <!-- Notification du haut -->
let NotificationHaut = document.getElementById("notification");

//  <!-- Contrôle de la limite haute du compteur -->
let limiteCompteurHaut = document.getElementById("limite-haute");

//  <!--  Compteur -->
let compteur = document.getElementById("compteur");
compteur.textContent = count;

//   <!-- Boutton principal avec les contrôles de décrémentation -->
let btnMoins = document.getElementById("bouton-moins");
let inputBtnMoins = document.getElementById("valeur-dec");

//   <!-- Boutton principal avec les contrôles d'incrémentation  -->
let btnPlus = document.getElementById("bouton-plus");
let inputBtnPlus = document.getElementById("valeur-inc");

//  <!-- Contrôle de la limite haute du compteur -->
let controleLimiteHaute = document.getElementById("limite-haute");
//  <!-- Contrôle de la limite basse du compteur -->
let controleLimiteBasse = document.getElementById("limite-basse");

//   <!-- Bouton de remise à zéro du compteur -->
let btnRemiseZero = document.getElementById("bouton-reset");

//   <!-- Zone de clic pour raccourcis via la souris -->
let zoneClic = document.getElementById("zone-de-clic");

// les ecouteurs d'événements
const btnMoinsOnClick = () => {
  count--;
  compteur.textContent = count;
  console.log("1- count --", count);
};
btnMoins.addEventListener("click", btnMoinsOnClick);

const btnPlusOnClick = () => {
  count++;
  compteur.textContent = count;
  console.log("2- count ++", count);
};
btnPlus.addEventListener("click", btnPlusOnClick);

const btnResetOnClick = () => {
  compteur.textContent = 0;
};
btnRemiseZero.addEventListener("click", btnResetOnClick);

const controleLimiteHauteOnClick = () => {
  console.log("controleLimiteHaute", controleLimiteHaute.value);
  if (count >= controleLimiteHaute.value) {
    console.log("valeur la plus haute atteinte");
  }
};

controleLimiteHaute.addEventListener("click", controleLimiteHauteOnClick);

const controleLimiteBasseOnClick = () => {
  console.log("controleLimiteBasse", controleLimiteBasse.value);
  if (count <= controleLimiteBasse.value) {
    console.log("valeur la plus basse atteinte");
  }
};
controleLimiteBasse.addEventListener("click", controleLimiteBasseOnClick);

// Annulé effet contexte menu pour gerer le clic droit de la souris
const zoneClicContextmenu = (e) => {
  e.preventDefault();

};
zoneClic.addEventListener("contextmenu", zoneClicContextmenu);


// puisque precedement j'ai utiliser le "contextmenu", je dois ici utiliser "mousedown" pour pouvoir utriliser le clic droit 
//ca ne marcherais pas avec l'event "click".
const zoneClicOnClick = (e) => {
 
    // clicGauche = 0;++
    // clicDroit = 2;--
    if (e.button === 0) {
        console.dir('++ ',e.button);
        btnPlusOnClick();
      } else if (e.button === 2) {
        console.dir('-- ',e.button);
        btnMoinsOnClick();
      }
  };
  zoneClic.addEventListener("mousedown", zoneClicOnClick);