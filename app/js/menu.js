(() => {
  const ASSETS_PATH = "app/assets/",
    NAV_OPENED_CLASS = "nav_opened",
    NAV_CLOSED_CLASS = "nav_closed",
    MENU_OPENED_PATH = ASSETS_PATH + "menu-opened.svg",
    MENU_CLOSED_PATH = ASSETS_PATH + "menu-closed.svg";
  let menuButton = document.getElementById("menu_button");
  menuButton.addEventListener("click", menuClick, true);

  function menuClick() {
    let menuNav = document.getElementsByTagName("nav")[0];
    toogleMenu(menuNav.classList.contains(NAV_CLOSED_CLASS), menuNav);
  }

  /*
   * Update nav state (class) and button's img
   */
  function toogleMenu(pWantToExpand, pMenuNav) {
    let menuButtonImg = menuButton.getElementsByTagName("img")[0];

    pMenuNav.classList.remove(pWantToExpand ? NAV_CLOSED_CLASS : NAV_OPENED_CLASS);
    pMenuNav.classList.add(pWantToExpand ? NAV_OPENED_CLASS : NAV_CLOSED_CLASS);
    menuButtonImg.src = pWantToExpand ? MENU_OPENED_PATH : MENU_CLOSED_PATH;
    menuButton.ariaExpanded = pWantToExpand;
  }
})();
