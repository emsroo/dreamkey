export function addItem(item) {
    const itemHTML = `
        <div class="col-sm-6 col-md-6 col-lg-4">
            <div class="card w-auto mb-4">
                <div class="card-header">
                    <h4 class="titulo">${item.name}</br> (${item.tipoMembresia})<span>
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop">Detalles</button>
                    </span></h4>
                </div>
                <div class="card-body">
                    <img src="${item.img}" class="card-img-top" alt="${item.name}">
                    <h5 class="card-title">Precio público</h5>
                    <p class="card-text1 text-center">${item.price1}</p>
                    <h4 class="card-title">Precio con descuento</h4>
                    <p class="card-text2">${item.price2}</p>
                </div>
            </div>
        </div>

        
        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        ...
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Understood</button>
                    </div>
                </div>
            </div>
        </div>


    `;

    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}

addItem({
    name: 'PAQUETE 1',
    tipoMembresia: 'Básico',
    img: './assets/img-memebresia/Membresia1.png',
    description: 'Incluye 5 servicios rosas (básicos) y puedes utilizarlas en las empresas afiliadas en el programa, consulta en la pagina de afiliados que empresas están disponibles con este nivel.',
    price1: '$700',
    price2: '$500',
});

addItem({
    name: 'PAQUETE 2',
    tipoMembresia: 'Básico',
    img: './assets/img-memebresia/Membresia2.png',
    description: 'Incluye 10 servicios rosas (básicos) y puedes utilizarlas en las empresas afiliadas en el programa, consulta en la pagina de afiliados que empresas están disponibles con este nivel.',
    price1: '$1,200',
    price2: '$800',
});

addItem({
    name: 'PAQUETE 3',
    tipoMembresia: 'Estandar',
    img: './assets/img-memebresia/Membresia3.png',
    description: 'Incluye 5 servicios platino (Estandar) y puedes utilizarlas en las empresas afiliadas en el programa, consulta en la pagina de afiliados que empresas están disponibles con este nivel.',
    price1: '$1,200',
    price2: '$800',
});

addItem({
    name: 'PAQUETE 4',
    tipoMembresia: 'Estandar',
    img: './assets/img-memebresia/Membresia4.png',
    description: 'Incluye 10 servicios platino (Estandar) y puedes utilizarlas en las empresas afiliadas en el programa, consulta en la pagina de afiliados que empresas están disponibles con este nivel.',
    price1: '$1,800',
    price2: '$1,200',
});

addItem({
    name: 'PAQUETE 5',
    tipoMembresia: 'Premium',
    img: './assets/img-memebresia/Membresia5.png',
    description: 'Incluye 5 servicios oro (Premium) y puedes utilizarlas en las empresas afiliadas en el programa, consulta en la pagina de afiliados que empresas están disponibles con este nivel.',
    price1: '$1,800',
    price2: '$1,200',
});


addItem({
    name: 'PAQUETE 6',
    tipoMembresia: 'Premium',
    img: './assets/img-memebresia/Membresia6.png',
    description: 'Incluye 10 servicios oro (Premium) y puedes utilizarlas en las empresas afiliadas en el programa, consulta en la pagina de afiliados que empresas están disponibles con este nivel.',
    price1: '$3,500',
    price2: '$2,000',
});
