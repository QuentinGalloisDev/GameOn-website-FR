function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// Close modal event
const fermer = document.querySelector(".close");
const contenu = document.querySelector(".content");

fermer.addEventListener("click", closeModal);
//J'anime la fermeture du formulaire avec animate 
function closeModal() {
  contenu.style.animation = "modalclose 1000ms ease"
  setTimeout(function () { modalbg.style.display = "none"; }, 950);
  setTimeout(function () { contenu.style.animation = ""; }, 950);
}

// Au clic sur le boutton "c'est parti" du formulaire on vérifie la validité des champs.
const submit = document.querySelector(".btn-submit")

submit.addEventListener("click", (checkValidity) => {
  checkValidity.preventDefault();
  //On vérifie le champ prénom.
  const validFirst = document.querySelector("#first").checkValidity();
  //On sélectionne le message d'erreur
  const firstError = document.querySelector(".First")

  function validity(input, error) {
    //Si non valide on affiche le message d'erreur dans le dom
    if (!input) {

      error.style.display = "block"
    }
    //Si devient valide on efface le message d'erreur
    else {
      error.style.display = "none"
    }
  }

  validity(validFirst, firstError)

  // On vérifie le champ nom.
  const validLast = document.querySelector("#last").checkValidity();
  //On sélectionne le message d'erreur
  const lastError = document.querySelector(".Last");

  validity(validLast, lastError)

  const mail = document.querySelector("#email").checkValidity();
  const mailError = document.querySelector(".Email")

  validity(mail, mailError)

  //Pour la date de naissance:Après avoir selectionner l'input et le message d'erreur,
  const birthdate = document.querySelector("#birthdate").value
  const birthdateError = document.querySelector(".Birthdate")
  // On vérifie si la date entrée dans l'input correspond au format d'une date avec la fonction Date
  let birthdateValidity = new Date(birthdate)
  // Si ce n'est pas le cas, birthdateValidity renvoie un objet Date dont la méthode toString renvoie Invalid Date
  if (birthdateValidity.toString() == "Invalid Date") {
    birthdateError.style.display = "block"
  }
  //Si la date est au bon format, on cache le message d'erreur
  else {
    birthdateError.style.display = "none"
  }

  const quantity = document.querySelector("#quantity").value;
  const quantityError = document.querySelector(".Quantity");
  // On vérifie que la valeur de l'input quantity est un nombre avec la fonction parseInt
  const quantityValidity = parseInt(quantity)
  // Si ce n'est pas le cas la valeur de retour sera Nan
  if (isNaN(quantityValidity)) {
    quantityError.style.display = "block"
  }
  else {
    quantityError.style.display = "none"
  }

  // On vérifie si un élément des input radio est checked
  const locations = document.querySelector("input[name='location']").checked
  const locationErrorMessage = document.querySelector('.Radio')

  //Si ce n'est pas le cas on affiche le message d'erreur
  if (locations === false) {
    locationErrorMessage.style.display = "block"
  }
  else {
    locationErrorMessage.style.display = "none"
  }

  //On sélectionne la checkbox des conditions d'utilisations.
  const terms = document.querySelector("#checkbox1")
  const termsErrorMessage = document.querySelector(".terms-of-use")

  if (terms.checked === false) {
    termsErrorMessage.style.display = "block";
  }
  else {
    termsErrorMessage.style.display = "none";
  }
  //On sélectionne les éléments qui vont dispartaître
  const form = document.querySelector("#form")
  const modal = document.querySelector(".modal-body")
  //Ainsi que ceux qui vont apparaitre
  const confirm = document.querySelector(".modal-confirm")

  if (validFirst == true && validLast == true && mail == true && birthdateValidity.toString() != "Invalid Date" && isNaN(quantityValidity) === false && locations === true && terms.checked === true) {
    confirm.style.display = "grid"
    modal.style.display = "none"
    contenu.style = "height: 85%;"
    const closeConfirm = document.querySelector(".close-confirm")
    closeConfirm.addEventListener("click", closeModal)
  }
  else {
    form.style.display = "block"
  }
})
