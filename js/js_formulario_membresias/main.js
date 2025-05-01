//Variable de acceso al elemento del nombre
const txtName = document.getElementById("nom");
//Variable de acceso al elemento  precioPublico
const precioPublico = document.getElementById("precio-publico");
//Variable de acceso al elemento  precioAfiliados
const precioAfiliados = document.getElementById("precio-afiliados");
//Variable de acceso al elemento descripcion
const descripcion = document.getElementById("descripcion");

// Cuadro que muestra los errores en los campos de datos
const cuadroDeAlerta = document.getElementById("error-msg");

//Variable para almacenar los elementos de la tabla
let datos = new Array(); //[]

// Nuevas variables para la imagen
const uploadButton = document.getElementById("upload_widget"); // Botón que dispara la carga
const imageUrlInput = document.getElementById("imageUrl"); // Input oculto para guardar la URL
const imagePreview = document.getElementById("imagePreview"); // Etiqueta img para la vista previa

//Variable de acceso al elemento imagen
const btnEnviar = document.getElementById("btnEnviar");

function validarNombre() {
    const nombreValido = /^[a-zA-Z0-9\s]+$/;
    if (nombreValido.test(txtName.value)) {
        return true;
    }
    return false;
}//Validar nombres

function validarPrecioPublico() {
    const regex = new RegExp(/^([1-9]\d(.\d+)?|0.\d[1-9]\d*)$/);
    if (regex.test(precioPublico.value)) {
        return true;
    }
    return false;
}//ValidarPrecio

function validarPrecioAfiliados() {
    const regex = new RegExp(/^([1-9]\d(.\d+)?|0.\d[1-9]\d*)$/);
    if (regex.test(precioAfiliados.value)) {
        return true;
    }
    return false;
}//ValidarPrecioAfiliados

function validarDescripcion() {
    if (descripcion.value.trim() === "") {
        return true;
    }
    return false;
}//Validar Descripcion

function validarImagen() {
    if (imageUrlInput.files === "") {
        return true;
    }
    return false;
}//Validar Imagen

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

    //Validmos que la longitud del valor del nombre sea mayor a 1
    if (txtName.value.length < 1) {
        isValid = false;
        mensajeError += "<p>El nombre es muy corto</p>";
    }//length<3

    //Validmos que la longitud del valor del email sea mayor a 1
    if (!validarPrecioPublico()) {
        isValid = false;
        mensajeError += "<p>El precio a publico es inválido</p>";
    }//length<3

    //Validmos que la longitud del valor del email sea mayor a 1
    if (!validarPrecioAfiliados()) {
        isValid = false;
        mensajeError += "<p>El precio a afiliados es inválido</p>";
    }//length<3

    if (descripcion.value.length < 1) {
        isValid = false;
        mensajeError += "<p>Agregar descripción</p>";
    }//validarNumero

    //Validmos que la longitud del valor del email sea mayor a 1
    if (!validarImagen) {
        isValid = false;
        mensajeError += "<p>Se necesita agregar una imagen</p>";
        //txtMessage.style.borderColor = "red";
    }//length<3

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

    if (!validarPrecioAfiliados()) {
        precioAfiliados.style.borderColor = "red";
    } else {
        precioAfiliados.style.borderColor = "";
    }

    if (!validarDescripcion()) {
        descripcion.style.borderColor = "";
    } else {
        descripcion.style.borderColor = "red";
    }

    if (!validarImagen()) {
        imageUrlInput.style.borderColor = "";
    } else {
        imageUrlInput.style.borderColor = "red";
        imageUrlInput.style.type = "display";
    }

    if (isValid) {

        let elemento = {
            "Nombre": txtName.value,
            "PrecioPublico": precioPublico.value,
            "PrecioAfiliados": precioAfiliados.value,
            "Descripcion": descripcion.value,
            "Imagen": imageUrlInput.files,
        }

        //Guardamos el objeto "elemento" en el arreglo "datos"
        datos.push(elemento);

        //Imprimimos los datos en la pantalla
        console.log(datos);

        //Con las siguientes dos lineas limpiamos los valores de los datos
        txtName.value = "";
        precioPublico.value = "";
        precioAfiliados.value = "";
        descripcion.value = "";
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