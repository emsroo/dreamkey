//Variable de acceso al elemento al correo
const txtEmail = document.getElementById("email-address");

const password = document.getElementById("password");

//Variable de acceso al elemento del boton enviar
const btnEnviar = document.getElementById("btnEnviar");

// Cuadro que muestra los errores en los campos de datos
const cuadroDeAlerta = document.getElementById("error-msg");

//Quitamos los espacios al inicio del email y lo hacemos todo minusculas
txtEmail.addEventListener("blur", function (event) {
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

function validarLogin(email,passwordIngresada){
    const usuarios = JSON.parse(localStorage.getItem("Usuarios")) || [];
    const usuario =  usuarios.find(usuario => usuario.Email === email);

    if(usuario && usuario.Password === passwordIngresada){
        return usuario;
    }//if
    return null;
}//validLogin

btnEnviar.addEventListener("click", function (event) {
    event.preventDefault();

    let mensajeError = "";

    // Limpia el mensaje de error
    cuadroDeAlerta.innerHTML = "";

    const usuario = validarLogin(txtEmail.value, password.value); //retorna el usuario o null

    //Esto es un Bandera, al ser true permite enviar los datos
    let isValid = true;

    //Validamos login
    if(!usuario){
        mensajeError += `<p>Correo o contraseña incorrecta</p>`
        txtEmail.style.borderColor = "red";
        password.style.borderColor = "red";
        isValid = false;
    }

    if (isValid) {

        console.log(usuario);

        Swal.fire({
                title: "Bienvenido",
                icon: "success",
                timer: 2000,
                showConfirmButton: false
        });

        //console.log("Bienvenido: " + usuario.Email + " con contrasenia: " + passwordIngresada);
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("currentUser", JSON.stringify(usuario));
        // Limpiamos
        txtEmail.value="";
        password.value = ""; 

        //se redirecciona a la página home, una vez iniciada la sesión 
        setTimeout(function () {
            window.location.href = 'index.html';
        }, 2000);

    } else {
        mostrarError(mensajeError);
    }

});//btnEnviar

