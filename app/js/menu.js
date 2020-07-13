const ASSETS_PATH = "app/assets/";

let menuButton = document.getElementById("menu_button");
menuButton.addEventListener("click", toogleMenu, true);

function toogleMenu(e) {
  let menuNav = document.getElementsByTagName("nav")[0],
    menuButtonImg = menuButton.getElementsByTagName("img")[0];
  const menuOpened = menuNav.classList.contains("nav_opened");

  //update nav state (class) and button's img:
  if (menuOpened) {
    menuNav.classList.remove("nav_opened");
    menuNav.classList.add("nav_closed");
    menuButtonImg.src = ASSETS_PATH + "menu-closed.svg";
    menuButton.ariaExpanded = false;
  } else {
    menuNav.classList.remove("nav_closed");
    menuNav.classList.add("nav_opened");
    menuButtonImg.src = ASSETS_PATH + "menu-opened.svg";
    menuButton.ariaExpanded = true;
  }
}
