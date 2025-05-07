import { items } from './nosotros_data.js';

function addItem(item, index) {
    const modalId = `staticBackdrop-${index}`;
    const itemHTML = `
        <div class="col-sm-6 col-md-6 col-lg-4">
            <div class="card w-auto mb-4">
                <div class="text-center mt-3">
                    <h4 class="titulo">${item.name}</h4>
                </div>
                <div class="card-body">
                    <img src="${item.img}" class="card-img-top" alt="${item.name}">
                    <h4 class="card-title">Redes</h4>
                    <div class="text-center">
                            <a href="${item.redes['0']}" target="_blank">
                                <img src="./assets/github-icono.png" alt="GitHub" class="iconos">
                            </a>
                            <a href="${item.redes['1']}" target="_blank">
                                <img src="./assets/lnBug-White.png" alt="LinkedIn" class="iconos">
                            </a>
                        </div>
                        <div class="text-center mt-3">

                            <button type="button" class="botonModal" class="btn btn-primary" data-bs-toggle="modal"
                            data-bs-target="#${modalId}">Descripción</button>
                        </div>
                </div>
            </div>
        </div>

        <!-- Modal -->
        <div class="modal fade" id="${modalId}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="${modalId}Label" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content modal-color">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="${modalId}Label">${item.name}</h1>
                    </div>
                    <div class="modal-body">
                        ${item["descripción"]}
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="botonModal" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
        `;
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}

items.forEach(addItem);
