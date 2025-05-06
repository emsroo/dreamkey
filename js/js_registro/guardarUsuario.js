//Variable para almacenar los elementos de la tabla
//let usuarios = new Array(); //[]

export function guardarUsuario(clave, usuarios) {
    //revisar el tipo de params.
    if (!Array.isArray(usuarios)) {
        console.error('En guardarMembresia se esperaba un arreglo válido.');
        return;
    }
    
    try {
        //convertir a String para guardar en local storage
        const array = JSON.stringify(usuarios);
        localStorage.setItem(clave, array);
        console.log(`usuarios guardado en la clave "${clave}".`);
    } catch (e) {
        console.error('Error al serializar o guardar en localStorage:', e);
    }
};


// PRUEBA

// let elemento = {
//     Nombre : "Fredy Alonzo",
//     Email : "fredyalonzo1307@gmail.com",
//     Numero : "9992683894",
//     Password : "Fornite.2481"
// }

// let elemento1 = {
//     Nombre : "Eduardo",
//     Email : "fredyalonzo1307@gmail.com",
//     Numero : "9992683894",
//     Password : "Fornite2481"
// }

// usuarios.push(elemento);
// usuarios.push(elemento1);

// guardarUsuario('Usuarios',usuarios);