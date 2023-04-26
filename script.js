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

let notification = document.getElementById("notification");
let notificationTexte = document.getElementById("notification-texte");

// les ecouteurs d'événements
const btnMoinsOnClick = () => {
  count-= parseInt(inputBtnMoins.value);
  compteur.textContent = count;
  gestionLimite();
};
btnMoins.addEventListener("click", btnMoinsOnClick);

const btnPlusOnClick = () => {
count+= parseInt(inputBtnPlus.value);
  compteur.textContent = count;
  gestionLimite();;
};
btnPlus.addEventListener("click", btnPlusOnClick);

const btnResetOnClick = () => {
  count = 0;
  compteur.textContent = count;
  compteur.classList.remove("limite-atteinte");
};
btnRemiseZero.addEventListener("click", btnResetOnClick);

const controleLimiteHauteOnClick = () => {
  if (count >= controleLimiteHaute.value) {
    console.log("valeur la plus haute atteinte");
  }
};

controleLimiteHaute.addEventListener("click", controleLimiteHauteOnClick);

const controleLimiteBasseOnClick = () => {

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



// Gestion des limites .limite-atteinte
const gestionLimite=()=>{

    if(count >= parseInt(controleLimiteHaute.value)){
        notification.classList.add("afficher");
        compteur.classList.add("limite-atteinte");
        notificationTexte.textContent= "Limite haute 3 atteinte !"
        setTimeout(()=>{
            notification.classList.remove("afficher");

        },2000)
       
    }else if(count <= parseInt(controleLimiteBasse.value)){
     
        notification.classList.add("afficher");
        compteur.classList.add("limite-atteinte");
        notificationTexte.textContent= "Limite basse -3 atteinte !";
        setTimeout(()=>{
            notification.classList.remove("afficher");

        },2000)
 
        console.log("notificationTexte",notificationTexte);
    }else{
        compteur.classList.remove("limite-atteinte");
    }
}