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
  // contenu.animate([
  //   {
  //     opacity: "1",
  //   },

  //   {
  //     transform: "translateY(150px)",
  //     opacity: "0"
  //   }
  // ], {
  //   duration: 950,
  //   iterations: 1

  // })
  contenu.style.animation = "modalclose 1000ms ease"
  setTimeout(function () { modalbg.style.display = "none"; }, 950);
  setTimeout(function () { contenu.style.animation = ""; }, 950);
}
