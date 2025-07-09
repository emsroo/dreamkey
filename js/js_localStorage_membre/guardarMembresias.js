//  clave es del formato string
//  membresia es del tipo objeto y es lo que vamos a guardar en formato JSON en storage


export function guardarMembresia(clave, membresia) {
    //revisar el tipo de params.
    if (typeof membresia !== 'object' || membresia === null) {
      console.error('En guardarMembresia se esperaba un objeto válido.');
      return;
    }
    try {
      //convertir a String para guardar en local storage
      const json = JSON.stringify(membresia);
      localStorage.setItem(clave, json);
      //console.log(`Membresía guardada en la clave "${clave}".`);
    } catch (e) {
      console.error('Error al serializar o guardar en localStorage:', e);
    }
  };
  
  // Ejemplo de uso:
  // const nuevaMembresia1 = {
  //   titulo: "PAQUETE 8",
  //   btn: "modal",
  //   "card-img-top": "./assets/img-membresia/p1.jpeg",
  //   "card-title1": "Mercado",
  //   "card-text1": "$2,500",
  //   "card-title2": "TITULARES",
  //   "card-text2": "$1,500"
  // };
  
  // guardarMembresia('membresia1', nuevaMembresia1);
  