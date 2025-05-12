import {items} from './afiliados-data.js';

function addItem(item) {
    const itemHTML =
        '   <div class="col">\n'+
        '       <div class="card">\n'+
        '                <a href="./empresaDetail.html?name=' + encodeURIComponent(item.name) + '">\n' +
        '               <img src="' + item.img + '" class="card-img-top" alt="' + item.name + '">\n' +
        '           </a>\n'+
        '           <div class="card-body">\n' +
        '               <h5 class="card-title">' + item.name + '</h5>\n' +
        '               <p class="card-text">' + item.rating + '</p>\n' +
        '               <p class="card-text">' + item.descripción + '</p>\n' +
        '           </div>\n'+
        '       </div>\n'+
        '   </div>\n'+
        '<br/>';
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}

items.forEach(addItem);

