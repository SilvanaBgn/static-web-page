const MENU_OPENED_PATH = "app/assets/menu-opened.svg",
  MENU_CLOSED_PATH = "app/assets/menu-closed.svg";

let menuButton = document.getElementById("menu_button");
menuButton.addEventListener("click", toogleMenu, true);

function toogleMenu(e) {
  let menuNav = document.getElementsByTagName("nav")[0],
    menuButtonImg = menuButton.getElementsByTagName("img")[0];
  const menuOpened = menuNav.classList.contains("nav_opened");

  if (menuOpened) {
    menuNav.classList.remove("nav_opened"); //update state (class) of nav
    menuButtonImg.src = MENU_CLOSED_PATH; //update button's icon
  } else {
    menuNav.classList.add("nav_opened"); //update state (class) of nav
    menuButtonImg.src = MENU_OPENED_PATH; //update button's icon
  }
}
