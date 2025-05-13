function cargarNavbar() {
    fetch("../../navTemplete.html")
        .then(res => res.text())
        .then(html => {
            const header = document.getElementById("header");
            header.innerHTML = html;

            // Ejecutar la lógica del navbar después de que se haya insertado
            const usuarioLogueado = JSON.parse(localStorage.getItem("UsuarioLogueado"));

            const navAuth = document.getElementById("navbar-auth");
            const navUser = document.getElementById("navbar-user");
            const userGreeting = document.getElementById("user-greeting");
            const btnLogout = document.getElementById("btnLogout");

            if (usuarioLogueado) {
                navAuth?.classList.add("d-none");
                navUser?.classList.remove("d-none");
                userGreeting.textContent = `Hola, ${usuarioLogueado.Nombre}`;
                btnLogout?.addEventListener("click", e => {
                    e.preventDefault();
                    localStorage.removeItem("UsuarioLogueado");
                    location.reload();
                });
            }
        });
}
