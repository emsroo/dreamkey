// Función para agregar una card
function addCard(item) {
    const cardHTML = `
        <div class="card m-2">
            <img src="${item.img}" class="card-img-top" alt="${item.name}">
            <div class="card-body">
                <h5 class="card-title">${item.name} (${item.tipoMembresia})</h5>
                <p class="card-text">${item.description}</p>
                <p class="card-text"><strong>Precio público:</strong> ${item.price1}</p>
                <p class="card-text"><strong>Precio con descuento:</strong> ${item.price2}</p>
            </div>
        </div>
    `;

    document.getElementById("card-container").innerHTML += cardHTML;
}

// Datos (puedes mover esto a un archivo externo si usas módulos)
const cardsData = [
    {
        id: "1",
        name: 'PAQUETE 1',
        tipoMembresia: 'Básico',
        img: './assets/img-memebresia/Membresia1.png',
        description: 'Incluye 5 servicios rosas (básicos)...',
        price1: '$700',
        price2: '$500',
    },

    {
        id: "3",
        name: 'PAQUETE 3',
        tipoMembresia: 'Estándar',
        img: './assets/img-memebresia/Membresia3.png',
        description: 'Incluye 5 servicios platino (Estándar)...',
        price1: '$1,200',
        price2: '$800',
    },

    {
        id: "5",
        name: 'PAQUETE 5',
        tipoMembresia: 'Premium',
        img: './assets/img-memebresia/Membresia5.png',
        description: 'Incluye 5 servicios oro (Premium)...',
        price1: '$1,800',
        price2: '$1,200',
    },

];

// Agrega todas las cards
cardsData.forEach(addCard);

