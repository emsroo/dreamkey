import { addItem } from "./main.js";  

window.addEventListener("load", function(event) {

    event.preventDefault();

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);

        try {
            const data = JSON.parse(localStorage.getItem(key));

            // Verifica si tiene la estructura esperada
            if (data.id && data.name && data.price1 && data.description && data.tipoMembresia && data.Imagen && data.img) {
                addItem(data);
            }
        } catch (e) {
            console.error("Error al leer el item", key, e);
        }
    }
});