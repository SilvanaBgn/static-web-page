// import headerHTML from './modules/header.html';

// var ajax = new XMLHttpRequest();
// ajax.open("GET", "./app/views/modules/header.html", false);
// ajax.send();
// const headerHTML = ajax.responseText;
// var ajax = new XMLHttpRequest();
// ajax.open("GET", "./app/views/css/header.css", false);
// ajax.send();
// const headerCSS = ajax.responseText;


// const template = document.createElement('template');
// template.innerHTML = `
// <style>
// ${headerCSS}
// </style>
// ${headerHTML}`;

const ASSETS_PATH = "app/assets/",
    NAV_OPENED_CLASS = "nav_opened",
    NAV_CLOSED_CLASS = "nav_closed",
    MENU_OPENED_PATH = ASSETS_PATH + "menu-opened.svg",
    MENU_CLOSED_PATH = ASSETS_PATH + "menu-closed.svg";

const template = document.createElement('template');
template.innerHTML = `
<link rel="stylesheet" href="app/views/css/header.css" />
<header tabindex="1" aria-label="Encabezado">
  <img class="logo" alt="Logo de LTV Service" src="app/assets/logo.svg" tabindex="1.2" />
  <button id="menu_button" alt="Menú" type="menu" aria-controls="nav" aria-expanded="false" tabindex="1.3">
    <img title="Menú" aria-labelledby="menu_button" src="app/assets/menu-closed.svg" />
  </button>
  <nav id="nav" class="nav_closed">
    <a id="nav_item1" href="#home_section" role="menuitem">
      <img aria-labelledby="nav_item1" src="../../../app/assets/home.svg" />
      Inicio
    </a>
    <a id="nav_item2" href="#about_us_section" role="menuitem">
      <img aria-labelledby="nav_item2" src="../../../app/assets/about-us.svg" />
      Nosotros
    </a>
    <a id="nav_item3" href="#location_section" role="menuitem">
      <img aria-labelledby="nav_item3" src="../../../app/assets/location.svg" />
      Ubicación
    </a>
    <a id="nav_item4" href="#hours_section" role="menuitem">
      <img aria-labelledby="nav_item4" src="../../../app/assets/hours.svg" />
      Horarios
    </a>
    <a id="nav_item5" href="#contact_section" role="menuitem">
      <img aria-labelledby="nav_item5" src="../../../app/assets/contact.svg" />
      Contacto
    </a>
  </nav>
</header>`;

class Header extends HTMLElement {
  constructor(){
    super();
    console.log('entro');
    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    const menuButton = this.shadowRoot.querySelector("#menu_button");
    const menuNav = this.shadowRoot.querySelector("nav");
    menuButton.addEventListener("click", ()=> {
      this.toogleMenu(menuNav.classList.contains(NAV_CLOSED_CLASS), menuNav, menuButton);
    }, true);
  }

  /*
   * Update nav state (class) and button's img
   */
  toogleMenu(pWantToExpand, pMenuNav, pMenuButton) {
    const menuButtonImg = pMenuButton.getElementsByTagName("img")[0];

    pMenuNav.classList.remove(pWantToExpand ? NAV_CLOSED_CLASS : NAV_OPENED_CLASS);
    pMenuNav.classList.add(pWantToExpand ? NAV_OPENED_CLASS : NAV_CLOSED_CLASS);
    menuButtonImg.src = pWantToExpand ? MENU_OPENED_PATH : MENU_CLOSED_PATH;
    pMenuButton.ariaExpanded = pWantToExpand;
  }
}
customElements.define('my-header', Header);

export default Header;