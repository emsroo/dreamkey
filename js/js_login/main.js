
//Variable de acceso al elemento al correo
const txtEmail = document.getElementById("email-address");

const password=document.getElementById("password");

//Variable de acceso al elemento del boton enviar
const btnEnviar = document.getElementById("btnEnviar");

// Cuadro que muestra los errores en los campos de datos
const cuadroDeAlerta = document.getElementById("error-msg");

//Variable para almacenar los elementos de la tabla
let datos = new Array(); //[]

//Quitamos los espacios al inicio del email y lo hacemos todo minusculas
txtEmail.addEventListener("blur", function(event){
    event.preventDefault();
    txtEmail.value = txtEmail.value.trim().toLowerCase();
});

password.addEventListener("blur",function (event) {
    event.preventDefault();
    password.value=password.value.trim();
})

function validarNombre(){
    const nombreValido = /^[a-zA-Z\s]+$/;
    if( nombreValido.test(txtName.value)){
        return true;
    }
    return false;
}

function validarCorreo(){
    let expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    if( expReg.test(txtEmail.value)){
        return true;
    }

    return false;
    
}
//validarCorreo

function mostrarError(mensajeError) {
    cuadroDeAlerta.insertAdjacentHTML("beforeend", 
        `
        <div class="alert alert-danger" role="alert">
        ${mensajeError}
        </div>
        `
    );
}
function validarPassword(){

    //Para validar el password es necesario que la contraseña contenga una minuscula, una mayuscula, un numero y un caracter especial
    let expReg =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$^&*()_:-]).{8,18}$/;
    if( expReg.test(password.value)){
        return true;
    }

    return false;
    
}


btnEnviar.addEventListener("click", function(event){
    event.preventDefault();
    
    let mensajeError = "";
    
    // Limpia el mensaje de error
    cuadroDeAlerta.innerHTML = "";

    //Esto es un Bandera, al ser true permite enviar los datos
    let isValid = true;
    
    //Validamos que la longitud del valor del email sea mayor a 1
    
    if(! validarCorreo()){
        isValid = false;
        mensajeError += "<p>El correo es inválido</p>";
    }//length<3
    if(! validarPassword()){
        isValid = false;
        mensajeError += "<p>La contraseña es invalida</p>";
    }

    //Marcar errores en color rojo 
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

    if(isValid){

        let elemento = {
                        "Nombre" : txtName.value,
                        "Email" : txtEmail.value,
                        "Password" :password.value
        }
        //Guardamos el objeto "elemento" en el arreglo "datos"
        datos.push(elemento);

        //Imprimimos los datos en la pantalla
        console.log(datos);

        //Con las siguientes dos lineas limpiamos los valores de los datos
        txtEmail.value="";
        password.value="";
        txtEmail.focus();

        Swal.fire({
            title: "Ingreso con exito",
            //text: "You clicked the button!",
            icon: "success"
        });
        
    } else {
        mostrarError(mensajeError);
    }

});//btnEnviar