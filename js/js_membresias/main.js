function addItem(item) {
    const itemHTML = `
        <div class="col-sm-6 col-md-6 col-lg-4">
            <div class="card w-auto mb-4">
                <div class="card-header">
                    <h4 class="titulo">${item.name}<span>
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop">${item.button}</button>
                    </span></h4>
                </div>
                <div class="card-body">
                    <img src="${item.img}" class="card-img-top" alt="${item.name}">
                    <h5 class="card-title">${item.extra1}</h5>
                    <p class="card-text1 text-center">${item.price1}</p>
                    <h4 class="card-title">${item.extra2}</h4>
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
    img: './assets/img-memebresia/p1.jpeg',
    description: 'Incluye acceso al mercado',
    extra1: 'Mercado',
    price1: '$2,500',
    extra2: 'TITULARES',
    price2: '$1,500',
    button: 'modal'
});

addItem({
    name: 'PAQUETE 2',
    img: './assets/img-memebresia/p2.jpeg',
    description: 'Incluye acceso al mercado',
    extra1: 'Mercado',
    price1: '$2,500',
    extra2: 'TITULARES',
    price2: '$1,500',
    button: 'modal'
});

addItem({
    name: 'PAQUETE 3',
    img: './assets/img-memebresia/p3.jpeg',
    description: 'Incluye acceso al mercado',
    extra1: 'Mercado',
    price1: '$5,000',
    extra2: 'TITULARES',
    price2: '$3,500',
    button: 'modal'
});

addItem({
    name: 'PAQUETE 4',
    img: './assets/img-memebresia/p4.jpeg',
    description: 'Incluye acceso al mercado',
    extra1: 'Mercado',
    price1: '$5,000',
    extra2: 'TITULARES',
    price2: '$3,500',
    button: 'modal'
});

addItem({
    name: 'PAQUETE 5',
    img: './assets/img-memebresia/p5.jpeg',
    description: 'Incluye acceso al mercado',
    extra1: 'Mercado',
    price1: '$8,500',
    extra2: 'TITULARES',
    price2: '$6,500',
    button: 'modal'
});


addItem({
    name: 'PAQUETE 6',
    img: './assets/img-memebresia/p6.jpeg',
    description: 'Incluye acceso al mercado',
    extra1: 'Mercado',
    price1: '$8,500',
    extra2: 'TITULARES',
    price2: '$6,500',
    button: 'modal'
});
