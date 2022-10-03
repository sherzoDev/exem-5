var elBtn = document.querySelector(".header__btn");

elBtn.addEventListener("click", function() {
  elBtn.parentElement.classList.toggle("show-bg");
})