const menu = document.getElementById("head");

let contet = document.createElement("header");
contet.classList.add("header");
//si se puede agregar clases a etiquetas desde aqui
contet.innerHTML = `
  <div class="logo">
  <img src="img/api.png">
  Wed Api Free</div>
  <input type="checkbox" id="toggle">
  <label for="toggle"><img src="img/menu-logo.png" class="men" alt=""></label>
  <nav class="navegation">
    <ul>
    <li><a href="index.html">INICIO</a></li>
    <li><a href="apis.html">APIs</a></li>
    </ul>
    </nav>
    `;
menu.append(contet);
//
//
const cards = document.getElementById("container_cards");

apis.forEach((p_apis) => {
    let conten = document.createElement("div")
    conten.classList.add("cards");
    conten.innerHTML = `
    <img src="${p_apis.img}">
    <h3>${p_apis.name}</h3>
    <span>Tipo: ${p_apis.tipo}</span>
    <a href="${p_apis.link}">VER API</a>
    `;

    container_cards.append(conten)

});
