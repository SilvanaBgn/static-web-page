// import footerHTML from './modules/footer.html';

/*var xhr = new XMLHttpRequest();
xhr.open("GET", "./app/views/modules/footer.html", false);
xhr.send();
const footerHTML = xhr.responseText;
var xhr = new XMLHttpRequest();
xhr.open("GET", "./app/views/css/footer.css", false);
xhr.send();
const footerCSS = xhr.responseText;


const template = document.createElement('template');
template.innerHTML = `
<style>
${footerCSS}
</style>
${footerHTML}`;*/

const template = document.createElement('template');
template.innerHTML = `
<link rel="stylesheet" href="./app/views/css/footer.css" />
<footer>
  <div>
    <p data-year="&nbsp;2020">(C) Copyright</p>
    <p data-splitter="&nbsp;|&nbsp;">
      Diseño y desarrollo: Silvana B. García
    </p>
    <p>Gracias por confiar en nosotros</p>
  </div>
</footer>`;


class Footer extends HTMLElement {
  constructor(){
    super();
    console.log('entro');
    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

}
customElements.define('my-footer', Footer);

export default Footer;