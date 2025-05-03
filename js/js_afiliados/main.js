function addItem(item) {
    const itemHTML =
        '   <div class="col">\n'+
        '       <div class="card">\n'+
        '           <a href="./empresaDetail.html">\n'+
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

addItem({
    'name': 'Atelier Ross Melgar',
    'img': '../../assets/img-afiliados/Atelier.jpg',
    'descripción': 'spa & salón de belleza',
    'rating': '5.0',
    'detalles': 'Es un spa y salón de belleza que ofrece una experiencia única de relajación y cuidado personal. Con un equipo altamente capacitado brindando y cuidando siempre la calidad de sus servicios. Ofrecen una amplia gama de tratamientos faciales y corporales, así como servicios de peluquería y estética. Su ambiente acogedor y profesional garantiza una experiencia inolvidable para cada cliente.',
    "servicios": {
        '0': 'SPA',
        '1': 'Corte',
        '2': 'Masaje',
    }
});

addItem({
    'name': 'Belleza Eterna',
    'img': '../../assets/img-afiliados/Eterna.jpg',
    'descripción': 'spa',
    'rating': '4.5',
    'detalles': 'Es un spa que se especializa en tratamientos de belleza y bienestar. Ofrecen servicios con una calidad excepcional y un enfoque personalizado para cada cliente. Ademas de contar con productos de alta gamma y personal altamente capacitado para concentirte.',
    "servicios": {
        '0': 'Barbería',
        '1': 'Corte',
        '2': 'Facial',
    }
});

addItem({
    'name': 'Luz y Brillo',
    'img': '../../assets/img-afiliados/Luz.jpg',
    'descripción': 'barbería',
    'rating': '5.0',
    'detalles': 'Barbería especializada en cortes de cabello y afeitados. Ofrecen una experiencia única de relajación y servicio personalizado. cuentan con certificaciones y un equipo que buscara siempre la calidad en sus servicios, con un estilo fresco y moderno.',
    "servicios": {
        '0': 'SPA',
        '1': 'Corte',
        '2': 'Masaje',
    }
});

addItem({
    'name': 'Diva Glam',
    'img': '../../assets/img-afiliados/Diva.jpg',
    'descripción': 'Estudio de uñas',
    'rating': '4.5',
    'detalles': 'Es un estudio de uñas que diseña y crea uñas acrilicas, gelish y decoradas. Ofrecen una amplia gama de servicios de manicura y pedicura, con un enfoque en la calidad y la atención al detalle. Su equipo de profesionales está altamente capacitado para brindar una experiencia única y personalizada a cada cliente.',
    "servicios": {
        '0': 'Manicure',
        '1': 'Pedicure',
        '2': 'Gelish',
    }
});

addItem({
    'name': 'Elegance Studio',
    'img': '../../assets/img-afiliados/Elegance.jpg',
    'descripción': 'Centro de Belleza',
    'rating': '4.5',
    'detalles': 'Centro de belleza que ofrece una amplia gama de servicios para toda la familia, con un ambiente acogedor y profesional Elegance Studio busca brindar una experiencia para incluir a toda la familia y que puedan disfrutar y concentirse en familia, dando momenetos inolvidables.',
    "servicios": {
        '0': 'Corte',
        '1': 'Masaje',
        '2': 'Peinados',
    }
});

addItem({
    'name': 'Iconic',
    'img': '../../assets/img-afiliados/Iconic.jpg',
    'descripción': 'Barbería',
    'rating': '4.5',
    'detalles': 'Barbería con un enfoque moderno y fresco, que busca dar una nueva alternativa a los hombres que buscan un lugar donde puedan relajarse y disfrutar de un buen corte de cabello.',
    "servicios": {
        '0': 'Corte',
        '1': 'Afeitado',
        '2': 'Faciales',
    }
});

addItem({
    'name': 'Luxury nails',
    'img': ' ../../assets/img-afiliados/luxury.jpg',
    'descripción': 'Estudio de uñas',
    'rating': '4.8',
    'detalles': 'Luxury Nails es un exclusivo salón de belleza especializado en el cuidado y embellecimiento de manos y pies. Nuestro enfoque combina elegancia, higiene y técnicas de vanguardia para ofrecer una experiencia única de manicura y pedicura. En Luxury Nails, cada detalle está pensado para brindar un ambiente relajante, atención personalizada y resultados impecables. Ya sea que busques un estilo clásico, moderno o creativo, nuestro equipo de profesionales está listo para realzar tu belleza con los más altos estándares de calidad.',
    "servicios": {
        '0': 'Uñas',
        '1': 'Manicura',
        '2': 'Pedicura',
    }
});

addItem({
    'name': 'Nails glam studio',
    'img': '../../assets/img-afiliados/Nails.jpg',
    'descripción': 'Estudio de uñas',
    'rating': '4.7',
    'detalles': 'Nails Glam Studio es un espacio dedicado a realzar tu estilo a través del arte en uñas. Nos especializamos en manicuras y pedicuras de alta calidad, ofreciendo diseños creativos, técnicas modernas y productos profesionales que garantizan un acabado glamoroso y duradero. En nuestro estudio, cada visita es una experiencia personalizada en un ambiente sofisticado y relajante. Ya sea que busques un look discreto o algo llamativo y lleno de brillo, en Nails Glam Studio hacemos que tus uñas hablen por ti.',
    "servicios": {
        '0': 'Uñas',
        '1': 'Manicura',
        '2': 'Pedicura',
    }
});

addItem({
    'name': 'Barbería Imperial',
    'img': '../../assets/img-afiliados/Barberia.jpg',
    'descripción': 'Barbería',
    'rating': '4.8',
    'detalles': 'Barbería Imperial es más que una barbería, es un templo del cuidado masculino donde tradición y estilo se encuentran. Ofrecemos cortes clásicos y modernos, afeitados con toalla caliente, arreglo de barba y tratamientos especiales para el cuidado del cabello y la piel. Nuestro equipo de barberos profesionales se enfoca en brindar una experiencia de alta calidad en un ambiente elegante, cómodo y lleno de carácter. En Barbería Imperial, cada detalle está pensado para que te sientas como un verdadero caballero.',
    "servicios": {
        '0': 'Corte de Cabello',
        '1': 'Barba y Afeitado',
        '2': 'Tratamientos Capilares',
        '3': 'Cuidado Facial Masculino'
    }
});