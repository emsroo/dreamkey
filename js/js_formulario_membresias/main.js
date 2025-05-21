//Importamos el js para guardar los datos de la memebresia en el localstorage
import { guardarMembresia } from "../js_localStorage_membre/guardarMembresias.js";

//Variable de acceso al elemento del nombre
const txtName = document.getElementById("nom");
//Variable de acceso al elemento  precioPublico
const precioPublico = document.getElementById("precio-publico");
//Variable de acceso al elemento  precioAfiliados
const precioAfiliados = document.getElementById("precio-afiliados");
//Variable de acceso al elemento descripcion
const descripcion = document.getElementById("descripcion");
//Variable de acceso al elemento de la categoría
const categoria = document.getElementById("categoria");

// Cuadro que muestra los errores en los campos de datos
const cuadroDeAlerta = document.getElementById("error-msg");

//Variable para almacenar los elementos de la tabla
let datos = new Array(); //[]

// Nuevas variable para la imagen
const imageUrlInput = document.getElementById("upload_widget");

//Variable de acceso al elemento imagen
const btnEnviar = document.getElementById("btnEnviar");

function validarNombre() {
    const nombreValido = /^[a-zA-Z0-9\s]+$/;
    if (nombreValido.test(txtName.value)) {
        return true;
    }
    return false;
}//Validar nombres

//Cambié la expresión regular para que pueda permitir mejores inputs
function validarPrecioPublico() {
    const regex = new RegExp(/^(?!0+(?:\.0{1,2})?$)(?:[1-9]\d*)(?:\.\d{1,2})?$/);
    if (regex.test(precioPublico.value)) {
        return true;
    }
    return false;
}//ValidarPrecio

function validarDescripcion() {
    if (descripcion.value.trim() === "") {
        return true;
    }
    return false;
}//Validar Descripcion

function validarCategoria(){
    return categoria.value !== "";
}//validarCategoria

//Creamos la funcion de Validar Imagen
//Esta funcion solo verifica si tiene o no contenido el apartado, se puede mejorar quizas verificando el tamaño, tipo de imagen "jpeg", "web","jpg", etc
//Igualmente se puede mejorar quizás con el tamaño permitido
function validarImagen() {
    const archivos = imageUrlInput.files;

    if (archivos && archivos.length > 0) {
        return true;
    } else {
        return false;
    }
}//validarImagen

function obtenerNuevoId() {
    // Obtenemos todas las claves del localStorage
    const claves = Object.keys(localStorage);
    let maxId = 6; // Asumimos que ya existen 6 membresías por default

    claves.forEach(clave => {
        try {
            const obj = JSON.parse(localStorage.getItem(clave));
            if (obj && obj.id && typeof obj.id === "number") {
                if (obj.id > maxId) {
                    maxId = obj.id; //Aplicamos la logica de saber el numero mayor
                }
            }
        } catch (e) {

        }
    });

    return maxId + 1;
}

function mostrarError(mensajeError) {
    cuadroDeAlerta.insertAdjacentHTML("beforeend",
        `
        <div class="alert alert-danger" role="alert">
        ${mensajeError}
        </div>
        `
    );
}


btnEnviar.addEventListener("click", function (event) {
    event.preventDefault();

    let mensajeError = "";

    // Limpia el mensaje de error
    cuadroDeAlerta.innerHTML = "";

    //Esto es un Bandera, al ser true permite enviar los datos
    let isValid = true;

    // txtName.value = txtName.value.trim();
    // txtNumber.value = txtNumber.value.trim();
    // txtEmail.value = txtEmail.value.trim();
    // txtMessage.value = txtMessage.value.trim();

    //Validmos que la longitud del valor del nombre sea mayor a 1 del nombre de la membresía
    if (txtName.value.length < 1) {
        isValid = false;
        mensajeError += "<p>El nombre es muy corto</p>";
    }//length<3

    if (!validarPrecioPublico()) {
        isValid = false;
        mensajeError += "<p>El precio a público es inválido</p>";
    }//validarPrecioPublico

    if (descripcion.value.length < 1) {
        isValid = false;
        mensajeError += "<p>Agregar descripción</p>";
    }//validarNumero

    if(!validarCategoria()){
        isValid = false;
        mensajeError += "<p>Se necesita escoger una categoría</p>";
    }//validarCategoria

    if (!validarImagen()) {
        isValid = false;
        mensajeError += "<p>Se necesita agregar una imagen</p>";
    }//validarImagen

    //Marcar errores en color rojo 
    if (!validarNombre()) {
        txtName.style.borderColor = "red";
    } else {
        txtName.style.borderColor = "";
    }
    if (!validarPrecioPublico()) {
        precioPublico.style.borderColor = "red";
    } else {
        precioPublico.style.borderColor = "";
    }

    if (!validarCategoria()){
        categoria.style.borderColor = "red";
    }else{
        categoria.style.borderColor = "";
    }

    if (!validarDescripcion()) {
        descripcion.style.borderColor = "";
    } else {
        descripcion.style.borderColor = "red";
    }

    //Aqui estaba mal el orden, ya quedo bien segun la validacion si tiene o no imagen
    if (!validarImagen()) {
        imageUrlInput.style.borderColor = "red";
    } else {
        imageUrlInput.style.borderColor = "";
    }

    if (isValid) {

        //Aqui declaro las variables nuevamente con los valores agregados al formulario para poder usarlos dentro del then del fetch
        let img = imageUrlInput.files[0];
        let img_name = imageUrlInput.files[0].name;

        let nombre = txtName.value;
        let precioPublicoVal = parseFloat(precioPublico.value); //Convertimos los precios en float
        let tipoMembresia = categoria.value;
        let descripcionVal = descripcion.value;

        let id = obtenerNuevoId();//Llamamos a la funcion para incrementar el id

        // Se Configuran los parámetros de Cloudinary
        // Aqui estoy usando la url API y "upload_preset" pero podemos crear una cuenta general para la pagina
        const formData = new FormData();
        formData.append('file', img);
        formData.append('upload_preset', 'uw_test');  

        // Hacer la solicitud POST a Cloudinary
        fetch('https://api.cloudinary.com/v1_1/dj2n2palt/image/upload', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data.secure_url) {
                    //console.log('Imagen subida correctamente:', data.secure_url); Confirmamos que se sube la imagen a cloudinary

                    //Creamos el JSON con la informacion del formulario
                    let elemento = {
                        "id": id,
                        "name": nombre,
                        "price1": precioPublicoVal,
                        "description": descripcionVal,
                        "tipoMembresia": tipoMembresia,
                        "Imagen": img_name,
                        "img": data.secure_url,
                    };

                    //Guardamos en el localStorage
                    guardarMembresia(nombre, elemento);
                    //console.log(categoria.value);

                    //Aqui le hago push al arreglo, pero aqui en vez de un arreglo podemos usar la funcion "addItem" como hicimos para crear las cards
                    //Talque seria "addItem(elemento)"";
                    //datos.push(elemento);


                    //console.log(datos); Imprimimos los datos en la consola, debug

                } else {
                    console.log('Error en la carga de la imagen');
                }
            })
            .catch(error => {
                console.error('Error al subir la imagen:', error);
            });

        //Con las siguientes dos lineas limpiamos los valores de los datos
        txtName.value = "";
        precioPublico.value = "";
        descripcion.value = "";
        categoria.value = "";
        imageUrlInput.value = "";

        Swal.fire({
            title: "Membresía Agregada!",
            //text: "You clicked the button!",
            icon: "success"
        });

    } else {
        mostrarError(mensajeError);
    }

});