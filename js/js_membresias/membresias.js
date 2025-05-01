let jsonData = {
    "membresias": []
};

function agregarMembresias(nuevaMembresia){
    jsonData.membresias.push(nuevaMembresia);
}

let nuevaMembresia1 = {
    "titulo": "PAQUETE 1",
    "btn": "modal",
    "card-img-top": "./assets/img-memebresia/p1.jpeg", 
    "card-title1": "Mercado",
    "card-text1": "$2,500",
    "card-title2": "TITULARES",
    "card-text2":"$1,500",
    "subTitulo1": "CORTES",
    "descripcion1": "Corte, Tintes, Peinados, Alisados, Extensiones",
    "subTitulo2": "MANICURA Y PEDICURA",
    "descripcion2": "Exfoliación, Esmalte, Hidratación",
    "botón": "ADQUIRIR"
};

let nuevaMembresia2 = {
    "titulo":"PAQUETE 2",
    "btn":"modal",
    "card-img-top": "./assets/img-memebresia/p2.jpeg",
    "card-title1":"Mercado",
    "card-text1":"$2,500",
    "card-title2":"TITULARES",
    "card-text2":"$1,500",
    "subTitulo1" : "CORTES",
    "descripcion1": "Corte, Tintes, Peinados, Barbería, Afeitados",
    "subTitulo2" : "MANICURA Y PEDICURA",
    "descripcion2": "Exfoliación, Esmalte, Hidratación",
    "botón": "ADQUIRIR"
};

let nuevaMembresia3 = {
    "titulo":"PAQUETE 3",
    "btn":"modal",
    "card-img-top": "./assets/img-memebresia/p3.jpeg",
    "card-title1":"Mercado",
    "card-text1":"$5,000",
    "card-title2":"TITULARES",
    "card-text2":"$3,500",
    "subTitulo1" : "MAQUILLAJE",
    "descripcion1": "Maquillaje para eventos, ExtensiÓn de pestañas, microblading",
    "subTitulo2" : "DEPILACIÓN",
    "descripcion2": "Láser, Depilación con cera, Depilación con hilo",
    "texto" : "Adicional incluye lo del paquete 1",
    "botón": "ADQUIRIR"
};

let nuevaMembresia4 = {
    "titulo":"PAQUETE 4",
    "btn":"modal",
    "card-img-top": "./assets/img-memebresia/p4.jpeg",
    "card-title1":"Mercado",
    "card-text1":"$5,000",
    "card-title2":"TITULARES",
    "card-text2":"$3,500",
    "subTitulo1" : "MAQUILLAJE",
    "descripcion1": "Maquillaje para eventos, microblading, micropigmentación",
    "subTitulo2" : "DEPILACIÓN",
    "descripcion2": "Láser, Depilación con cera, Diseño y depilación de cejas",
    "texto" : "Adicional incluye lo del paquete 2",
    "botón": "ADQUIRIR"
};

let nuevaMembresia5 = {
    "titulo":"PAQUETE 5",
    "btn":"modal",
    "card-img-top": "./assets/img-memebresia/p5.jpeg",
    "card-title1":"Mercado",
    "card-text1":"$8,500",
    "card-title2":"TITULARES",
    "card-text2":"$6,500",
    "subTitulo1" : "SPA",
    "descripcion1": "Masajes relajantes, Aromaterapia, Hidromasajes, Masajes deportivos",
    "subTitulo2" : "BRONCEADO",
    "descripcion2": "Solarium",
    "texto" : "Adicional incluye lo del paquete 2 y 4",
    "botón": "ADQUIRIR"
};

let nuevaMembresia6 = {
    "titulo":"PAQUETE 6",
    "btn":"modal",
    "card-img-top": "./assets/img-memebresia/p6.jpeg",
    "card-title1":"Mercado",
    "card-text1":"$8,500",
    "card-title2":"TITULARES",
    "card-text2":"$6,500",
    "subTitulo1" : "SPA",
    "descripcion1": "Masajes relajantes, Aromaterapia, Hidromasajes, Masajes deportivos",
    "subTitulo2" : "BRONCEADO",
    "descripcion2": "Solarium",
    "texto" : "Adicional incluye lo del paquete 2 y 4",
    "botón": "ADQUIRIR"
};

let nuevaMembresia7 = {
    "titulo":"PAQUETE 7",
    "btn":"modal",
    "card-img-top": "./assets/img-memebresia/p7.jpeg",
    "card-title1":"Mercado",
    "card-text1":"$2,000",
    "card-title2":"TITULARES",
    "card-text2":"$1,000",
    "subTitulo1" : "CORTES PARA NIÑO",
    "descripcion1": "Cortes, Peinados, Tintes",
    "botón": "ADQUIRIR"
};

let nuevaMembresia8 = {
    "titulo":"PAQUETE 8",
    "btn":"modal",
    "card-img-top": "./assets/img-memebresia/p8.jpeg",
    "card-title1":"Mercado",
    "card-text1":"$2,000",
    "card-title2":"TITULARES",
    "card-text2":"$1,000",
    "subTitulo1" : "CORTES PARA NIÑA",
    "descripcion1": "Cortes, Peinados, Tintes",
    "botón": "ADQUIRIR"
};

let nuevaMembresia9 = {
    "titulo":"PAQUETE 9",
    "btn":"modal",
    "card-img-top": "./assets/img-memebresia/p9.jpeg",
    "card-title1":"Mercado",
    "card-text1":"$12,000",
    "card-title2":"TITULARES",
    "card-text2":"$9,000",
    "subTitulo1" : "PAQUETE FAMILIAR",
    "descripcion1": "Engloba el Paquete 5, Paquete 6, Paquete 7 y Paquete 8",
    "botón": "ADQUIRIR"
};

let nuevaMembresia10 = {
    "titulo":"PAQUETE 10",
    "btn":"modal",
    "card-img-top": "./assets/img-memebresia/p10.jpeg",
    "card-title1":"Mercado",
    "card-text1":"$10,000",
    "card-title1":"TITULARES",
    "card-text1":"$8,500",
    "subTitulo1" : "PAQUETE PAREJA",
    "descripcion1": "Puedes invitar siempre a una persona",
    "botón": "ADQUIRIR"
};


agregarMembresias(nuevaMembresia1);

console.log(jsonData);
