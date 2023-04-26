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
console.log(inputBtnMoins.value);
//   <!-- Boutton principal avec les contrôles d'incrémentation  -->
let btnPlus = document.getElementById("bouton-plus");
let inputBtnPlus = document.getElementById("valeur-inc");
console.log(inputBtnPlus.value);
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
  count-= parseInt(inputBtnMoins.value);
  compteur.textContent = count;

};
btnMoins.addEventListener("click", btnMoinsOnClick);

const btnPlusOnClick = () => {
count+= parseInt(inputBtnPlus.value);
  compteur.textContent = count;

};
btnPlus.addEventListener("click", btnPlusOnClick);

const btnResetOnClick = () => {
  count = 0;
  compteur.textContent = count;
  console.log("count reset", count)
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





  inputBtnPlus.addEventListener('click',function () {
    console.log(inputBtnPlus.value)
    })

    inputBtnMoins.addEventListener('click',function () {
        console.log(inputBtnMoins.value)
        })