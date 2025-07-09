import { items } from './afiliados-data.js'
// Leer el ID de la URL
const params = new URLSearchParams(window.location.search);
const nombreEmpresa = params.get('name');
// Buscar el item por nombre
const afiliados = items.find(item => item.name === nombreEmpresa);
// Si se encuentra, mostrar el item, de lo contrario mostrar un mensaje de error
if (afiliados) {
    addItem(afiliados);
    document.title = afiliados.name + ' | Detalle de Empresa';
} else {
    document.getElementById("list-items").innerHTML = "<p>Empresa no encontrada</p>";
}

function addItem(item) {
    const itemHTML =
        '<div class="container">\n' +
            '<div class="row">\n' +
                '<div class="col-sm">\n' +
                    '<div class="card mb-3">\n' +
                        '<div class="row g-0">\n' +
                            '<div class="col-md-2">\n' +
                                '<div class="row mb-2">\n' +
                                    '<div class="col-sm"><img src="'+ item.imagenServicios[0] +'" alt="img_1" style="width: 100%; height: 100%;"></div>\n' +
                                '</div>\n' +
                                '<div class="row mb-2">\n' +
                                    '<div class="col-sm"><img src="'+ item.imagenServicios[1] +'" alt="img_2" style="width: 100%; height: 100%;"></div>\n' +
                                '</div>\n' +
                                '<div class="row mb-2">\n' +
                                    '<div class="col-sm"><img src="'+ item.imagenServicios[2] +'" alt="img_3" style="width: 100%; height: 100%;"></div>\n' +
                                '</div>\n' +
                            '</div>\n' +

                            '<div class="col-md-4" style="align-content: center;">\n' +
                                '<img src="'+ item.img +'" class="img-fluid rounded-start" alt="empresasDetail">\n' +
                            '</div>\n' +

                            '<div class="col-md-6" style="align-content: center;">\n' +
                                '<div class="card-body">\n' +
                                    '<h3 class="card-title">'+ item.name +'</h3>\n' +
                                    '<h5>'+ item.descripción +'</h5>\n' +
                                    '<p class="card-text" style="font-size: large;">'+ item.detalles +'</p>\n' +
                                    '<hr>\n' +
                                    '<h5>Servicios</h5>\n' +
                                    '<div class="row" style="text-align: center;">\n' +
                                        '<div class="col-sm">'+ item.servicios[0] +'</div>\n' +
                                        '<div class="col-sm">'+ item.servicios[1] +'</div>\n' +
                                        '<div class="col-sm">'+ item.servicios[2] +'</div>\n' +
                                    '</div>\n' +
                                '</div>\n' +
                            '</div>\n' +

                        '</div>\n' +
                    '</div>\n' +
                '</div>\n' +
            '</div>\n' +

        '</div><br/>';

    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML = itemHTML;
}
