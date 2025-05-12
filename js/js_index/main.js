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

