export function addItem(item) {
        const precio1 = new Intl.NumberFormat("es-MX", {
        style: "currency",
        currency: "MXN"
    }).format(item.price1);

    const precio2 = new Intl.NumberFormat("es-MX", {
        style: "currency",
        currency: "MXN"
    }).format(item.price2);

    const itemHTML = `
        <div class="col-sm-6 col-md-6 col-lg-4">
            <div class="card w-auto mb-4">
                <div class="card-header">
                    <h4 class="titulo">${item.name}</br> (${item.tipoMembresia})<span>
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                             data-bs-target="#modal-${item.id}">Detalles</button>
                    </span></h4>
                </div>
                <div class="card-body">
                    <img src="${item.img}" class="card-img-top" alt="${item.name}">
                    <h5 class="card-title">Precio público</h5>
                    <p class="card-text1 text-center">${precio1}</p><br>
                    <button type="button" class="botonCompra" class="btn btn-primary">Adquiere tu Membresía </button>
                </div>
            </div>
        </div>

        
        <!-- Modal dinámico -->
        <div class="modal fade" id="modal-${item.id}" tabindex="-1" aria-labelledby="modalLabel-${item.id}" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="modalLabel-${item.id}">${item.name}</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
                    </div>
                    <div class="modal-body text-center">
                        <img src="${item.img}" class="img-fluid mb-3" alt="${item.name}" style="max-width: 200px;">
                        <p>${item.description}</p>
                       
                    </div>
                    <div class="modal-footer">
                        <button type="button" id="btnCerrar" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        
                    </div>
                </div>
            </div>
        </div>
    `;

    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}

addItem({
    id: "1",
    name: 'PAQUETE 1',
    tipoMembresia: 'Básico',
    img: './assets/img-memebresia/Membresia1.png',
    description: 'Incluye 5 servicios rosas (básicos) y puedes utilizarlas en las empresas afiliadas en el programa, consulta en la página de afiliados que empresas están disponibles con este nivel.',
    price1: '700',
    price2: '500',
});

addItem({
    id: "2",
    name: 'PAQUETE 2',
    tipoMembresia: 'Básico',
    img: './assets/img-memebresia/Membresia2.png',
    description: 'Incluye 10 servicios rosas (básicos) y puedes utilizarlas en las empresas afiliadas en el programa, consulta en la página de afiliados que empresas están disponibles con este nivel.',
    price1: '1200',
    price2: '800',
});

addItem({
    id: "3",
    name: 'PAQUETE 3',
    tipoMembresia: 'Estándar',
    img: './assets/img-memebresia/Membresia3.png',
    description: 'Incluye 5 servicios platino (Estándar) y puedes utilizarlas en las empresas afiliadas en el programa, consulta en la página de afiliados que empresas están disponibles con este nivel.',
    price1: '1200',
    price2: '800',
});

addItem({
    id: "4",
    name: 'PAQUETE 4',
    tipoMembresia: 'Estándar',
    img: './assets/img-memebresia/Membresia4.png',
    description: 'Incluye 10 servicios platino (Estándar) y puedes utilizarlas en las empresas afiliadas en el programa, consulta en la página de afiliados que empresas están disponibles con este nivel.',
    price1: '1800',
    price2: '1200',
});

addItem({
    id: "5",
    name: 'PAQUETE 5',
    tipoMembresia: 'Premium',
    img: './assets/img-memebresia/Membresia5.png',
    description: 'Incluye 5 servicios oro (Premium) y puedes utilizarlas en las empresas afiliadas en el programa, consulta en la página de afiliados que empresas están disponibles con este nivel.',
    price1: '1800',
    price2: '1200',
});


addItem({
    id: "6",
    name: 'PAQUETE 6',
    tipoMembresia: 'Premium',
    img: './assets/img-memebresia/Membresia6.png',
    description: 'Incluye 10 servicios oro (Premium) y puedes utilizarlas en las empresas afiliadas en el programa, consulta en la página de afiliados que empresas están disponibles con este nivel.',
    price1: '3500',
    price2: '2000',
});
