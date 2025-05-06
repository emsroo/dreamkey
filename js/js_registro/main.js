//Variable de acceso al elemento del nombre
const txtName = document.getElementById("nom");
//Variable de acceso al elemento del telefono
const txtNumber = document.getElementById("telefono");
//Variable de acceso al elemento al correo
const txtEmail = document.getElementById("email-address");
//Variable de acceso al elemento al password
const password = document.getElementById("password");
//Variable de acceso al elemento confirmar password
const confirPassword = document.getElementById("confirmPassword");
//Variable de acceso al elemento del boton enviar
const btnEnviar = document.getElementById("btnEnviar");

// Cuadro que muestra los errores en los campos de datos
const cuadroDeAlerta = document.getElementById("error-msg");

//Variable para almacenar los elementos de la tabla
let datos = new Array(); //[]

//Quitamos los espacios al inicio del nombre y lo hacemos todo mayusculas
txtName.addEventListener("blur", function (event) {
    event.preventDefault();
    txtName.value = txtName.value.trim().toUpperCase();
});

//Quitamos los espacios al inicio del numero y lo seteamos a 10 digitos
txtNumber.addEventListener("blur", function (event) {
    event.preventDefault();
    txtNumber.value = txtNumber.value.trim();
});


//Quitamos los espacios al inicio del email y lo hacemos todo minusculas
txtEmail.addEventListener("blur", function (event) {
    event.preventDefault();
    txtEmail.value = txtEmail.value.trim().toLowerCase();
});

password.addEventListener("blur", function (event) {
    event.preventDefault();
    password.value = password.value.trim();
})

function validarNombre() {
    const nombreValido = /^[a-zA-Z\s]+$/;
    if (nombreValido.test(txtName.value)) {
        return true;
    }
    return false;
}//validarNombre


function validarTelefono() {

    const regex = new RegExp(/^(?!.*(\d)\1{9})(?:\+52\s?)?(?:\(?\d{2,3}\)?[\s-]?)?\d{3}[\s-]?\d{4}$/);


    if (regex.test(txtNumber.value)) {
        return true;
    }
    return false;

}//validarTeléfono


function validarCorreo() {
    let expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    if (expReg.test(txtEmail.value)) {
        return true;
    }

    return false;

}//validarCorreo

function validarPassword() {

    //Para validar el password es necesario que la contraseña contenga una minuscula, una mayuscula, un numero y un caracter especial
    let expReg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$^&*()_:-]).{8,18}$/;
    if (expReg.test(password.value)) {
        return true;
    }

    return false;

}//validarPassword

function validarConfirmPassword() {
    return password.value === confirPassword.value;
}//validarConfirmPassword

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
    //Validmos que la longitud del valor del nombre sea mayor a 1
    if (txtName.value.length < 1) {
        isValid = false;
        mensajeError += "<p>El usuario no existe</p>";
    }//length<3


    if (!validarTelefono()) {
        isValid = false;
        mensajeError += "<p>El número telefónico es inválido</p>";
    }//validarTeléfono


    //Validmos que la longitud del valor del email sea mayor a 1

    if (!validarCorreo()) {
        isValid = false;
        mensajeError += "<p>El correo es invalido</p>";
    }//length<3
    if (!validarPassword()) {
        isValid = false;
        mensajeError += "<p>La contraseña debe contener una minuscula, una mayuscula, un numero, un caracter especial y una longitud de entre 8 y 18 caracteres.</p>";
    }
    if (!validarConfirmPassword()) {
        isValid = false;
        mensajeError += "<p>Las contraseñas no coinciden</p>";
    }

    //Marcar errores en color rojo 
    if (!validarNombre()) {
        txtName.style.borderColor = "red";
    } else {
        txtName.style.borderColor = "";
    }
    if (!validarTelefono()) {
        txtNumber.style.borderColor = "red";
    } else {
        txtNumber.style.borderColor = "";
    }
    if (!validarCorreo()) {
        txtEmail.style.borderColor = "red";
    } else {
        txtEmail.style.borderColor = "";
    }
    if (!validarPassword()) {
        password.style.borderColor = "red";
    } else {
        password.style.borderColor = "";
    }
    if (!validarConfirmPassword()) {
        confirPassword.style.borderColor = "red";
    } else {
        confirPassword.style.borderColor = "";
    }

    if (isValid) {

        let elemento = {
            "Nombre": txtName.value,
            "Telefono ": txtNumber.value,
            "Email": txtEmail.value,
            "Password": password.value
        }
        //Guardamos el objeto "elemento" en el arreglo "datos"
        datos.push(elemento);

        //Imprimimos los datos en la pantalla
        console.log(datos);

        //Con las siguientes dos lineas limpiamos los valores de los datos
        txtName.value = "";
        txtNumber.value = "";
        txtEmail.value = "";
        password.value = "";
        confirPassword.value = "";
        txtName.focus();

        Swal.fire({
            title: "Respuestas guardadas",
            //text: "You clicked the button!",
            icon: "success"
        });

    } else {
        mostrarError(mensajeError);
    }

});//btnEnviar