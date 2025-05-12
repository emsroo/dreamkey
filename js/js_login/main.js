//Variable de acceso al elemento al correo
const txtEmail = document.getElementById("email-address");

const password = document.getElementById("password");

//Variable de acceso al elemento del boton enviar
const btnEnviar = document.getElementById("btnEnviar");

// Cuadro que muestra los errores en los campos de datos
const cuadroDeAlerta = document.getElementById("error-msg");

//Quitamos los espacios al inicio del email y lo hacemos todo minusculas
txtEmail.addEventListener("blur", function(event){
    event.preventDefault();
    txtEmail.value = txtEmail.value.trim().toLowerCase();
});

function mostrarError(mensajeError) {
    cuadroDeAlerta.insertAdjacentHTML("beforeend", 
        `
        <div class="alert alert-danger" role="alert">
        ${mensajeError}
        </div>
        `
    );
}

function validarCorreo(email){
    const usuarios = JSON.parse(localStorage.getItem("Usuarios")) || [];
    return usuarios.find(usuario => usuario.Email === email);
}

function validarPassword(usuario, passwordIngresada){
    return usuario.Password === passwordIngresada;
}

btnEnviar.addEventListener("click", function (event) {
    event.preventDefault();

    let mensajeError = "";

    // Limpia el mensaje de error
    cuadroDeAlerta.innerHTML = "";

    const passwordIngresada = password.value;
    const usuario = validarCorreo(txtEmail.value);

    //Esto es un Bandera, al ser true permite enviar los datos
    let isValid = true;

    if (!usuario) {
        mensajeError += `<p>Correo no registrado.</p>`
        txtEmail.style.borderColor = "red";
        isValid = false; 
    }else{
        txtEmail.style.borderColor = "";
    }

    // Validar la contraseña (aunque no haya usuario)
    if (!passwordIngresada || !usuario || !validarPassword(usuario, passwordIngresada)) {
        mensajeError += `<p>Contraseña incorrecta.</p>`
        password.style.borderColor = "red";
        isValid = false;
    } else {
        password.style.borderColor = "";
    }

    if (isValid) {

        Swal.fire({
                title: "Bienvenido",
                icon: "success"
        });

        console.log("Bienvenido: " + usuario.Email + " con contrasenia: " + passwordIngresada);
        
        // Limpiamos
        txtEmail.value="";
        password.value = ""; 
        txtEmail.focus();

    } else {
        mostrarError(mensajeError);
    }

});//btnEnviar