<<<<<<< HEAD
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
actualizarHeader()

=======
import { items } from '../js_afiliados/afiliados-data.js';

const indicatorsContainer = document.getElementById('carousel-indicators');
const innerContainer = document.getElementById('carousel-inner');

items.forEach((item, index) => {
  // Crear botón del indicador
  const indicator = document.createElement('button');
  indicator.type = 'button';
  indicator.setAttribute('data-bs-target', '#carouselExampleCaptions');
  indicator.setAttribute('data-bs-slide-to', index);
  indicator.setAttribute('aria-label', `Slide ${index + 1}`);
  if (index === 0) {
    indicator.classList.add('active');
    indicator.setAttribute('aria-current', 'true');
  }
  indicatorsContainer.appendChild(indicator);

  // Crear slide del carrusel
  const carouselItem = document.createElement('div');
  carouselItem.classList.add('carousel-item');
  if (index === 0) carouselItem.classList.add('active');

carouselItem.innerHTML = `
  <div class="text-center">
    <img src="${item.img}" class="d-block w-auto mx-auto" alt="${item.name}">
    <div class="mt-3 px-3">
      <h5>${item.name}</h5>
      <p>${item.descripción}</p>
    </div>
  </div>
`;


  innerContainer.appendChild(carouselItem);
});
>>>>>>> 8ea48c7d935b53b6309493aedbad6972eca12ede
