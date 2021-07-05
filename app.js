// toggle mobile menu

let mobilMenu = document.querySelector(".nav-mobile-menu");
let mainMenu = document.querySelector(".navigation");

mobilMenu.addEventListener("click", function () {
  mobilMenu.classList.toggle("active-menu");
  if (mobilMenu.classList.contains("active-menu")) {
    mainMenu.classList.add("active-menu");
  } else {
    mainMenu.classList.remove("active-menu");
  }
});
