function waitForElement(selector, timeout = 3000) {
  return new Promise((resolve, reject) => {
    const intervalTime = 50;
    let timePassed = 0;

    const interval = setInterval(() => {
      const element = document.querySelector(selector);
      if (element) {
        clearInterval(interval);
        resolve(element);
      }

      timePassed += intervalTime;
      if (timePassed >= timeout) {
        clearInterval(interval);
        reject(new Error(`Elemento '${selector}' no encontrado después de ${timeout}ms.`));
      }
    }, intervalTime);
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const navbar = await waitForElement(".navbar-nav.ms-auto", 3000);
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    if (isLoggedIn) {
      const currentUser = JSON.parse(localStorage.getItem("currentUser"));
      const userName = currentUser?.Nombre || "Usuario";

      navbar.innerHTML = `
        <li class="nav-item">
          <span class="nav-link disabled">Hola, ${userName}</span>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" id="logout-link">Cerrar Sesión</a>
        </li>
      `;

      document.getElementById("logout-link").addEventListener("click", (e) => {
        e.preventDefault();
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("currentUser");
        location.reload();
      });
    }
  } catch (error) {
    console.warn(error.message);
  }
});
