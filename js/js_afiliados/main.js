import {items} from './afiliados-data.js';
function addItem(item) {
    const itemHTML =
        '   <div class="col">\n'+
        '       <div class="card">\n'+
        '                <a href="./empresaDetail.html?name=' + encodeURIComponent(item.name) + '">\n' +
        '               <img src="' + item.img + '" class="card-img-top" alt="' + item.name + '">\n' +
        '           </a>\n'+
        '           <div class="card-body">\n' +
        '               <h5 class="card-title">' + item.name + '</h5>\n' +
        '               <p class="card-text">' + item.rating + '</p>\n' +
        '               <p class="card-text">' + item.descripción + '</p>\n' +
        '           </div>\n'+
        '       </div>\n'+
        '   </div>\n'+
        '<br/>';
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}

function actualizarHeader() {

    const cerrarSesion = document.getElementById('cerrarSesion');
    const isLoggedIn = localStorage.getItem('isLoggedIn');

        if (isLoggedIn === 'true') {
            cerrarSesion.innerHTML = `
                <li class="nav-item">
                    <a class="nav-link" href="./login.html" id="logoutLink">Cerrar Sesión</a>
                </li>
            `;

            const logoutLink = cerrarSesion.querySelector('#logoutLink');

            if (logoutLink) {
                logoutLink.addEventListener('click', function(event) {
                    event.preventDefault();
                    localStorage.removeItem('isLoggedIn');
                    actualizarHeader();
                    window.location.href = './index.html';
                });
            }

        } else {
            cerrarSesion.innerHTML = `
                <li class="nav-item">
                    <a class="nav-link" href="./login.html">Iniciar Sesion</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="./register.html">Registro</a>
                </li>
            `;
        }
}

items.forEach(addItem);
actualizarHeader();
