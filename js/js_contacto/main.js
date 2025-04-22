//Variable de acceso al elemento del nombre
const txtName = document.getElementById("nom");
//Variable de acceso al elemento al correo
const txtEmail = document.getElementById("email");
//Variable de acceso al elemento del numero de telefono
const txtNumber = document.getElementById("telefono");
//Variable de acceso al elemento del mensaje
const txtMessage = document.getElementById("message");

//Variable de acceso al elemento del boton enviar
const btnEnviar = document.getElementById("btnEnviar");

//Variable para almacenar los elementos de la tabla
let datos = new Array(); //[]

//Quitamos los espacios al inicio del nombre y lo hacemos todo mayusculas
txtName.addEventListener("blur", function(event){
    event.preventDefault();
    txtName.value = txtName.value.trim().toUpperCase();
});

//Quitamos los espacios al inicio del email y lo hacemos todo minusculas
txtEmail.addEventListener("blur", function(event){
    event.preventDefault();
    txtEmail.value = txtEmail.value.trim().toLowerCase();
});

//Quitamos los espacios al inicio del numero y lo seteamos a 10 digitos
txtNumber.addEventListener("blur", function(event){
    event.preventDefault();
    txtNumber.value = txtNumber.value.trim().slice(0,10);
});

//Quitamos los espacios al inicio del mensaje
txtMessage.addEventListener("blur", function(event){
    event.preventDefault();
    txtMessage.value = txtMessage.value.trim();
});

function validarNumero(){

    //Condicion para saber si la longitud es menor o igual a 0, regresamos un falso
    if(txtNumber.value.trim().length<=0){
        return false; //Tener en cuenta que el "return" una vez se ejecuta, sale directamente de la funcion "validarCantidad"
    }//length<=0

    //Condicion para validar que sea un numero
    if(isNaN(txtNumber.value)){
        return false;
    }//isNan

    //Condicion para validar si la cantidad es mayor a 0, convirtiendolo a un numero
    if(Number(txtNumber.value)<=0){
        return false;
    }

    //Si tiene algo, regresa verdadero
    return true;

}//validarNumero

function validarCorreo(){
    let expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    
    if( expReg.test(txtEmail.value)){
        return true;
    }

    return false;
    
}//validarCorreo

btnEnviar.addEventListener("click", function(event){

    event.preventDefault();

    enviarCorreo();
    //Esto es un Bandera, al ser true permite enviar los datos
    let isValid = true;

    // txtName.value = txtName.value.trim();
    // txtNumber.value = txtNumber.value.trim();
    // txtEmail.value = txtEmail.value.trim();
    // txtMessage.value = txtMessage.value.trim();

    //Validmos que la longitud del valor del nombre sea mayor a 1
    if(txtName.value.length < 1){
        isValid = false;
    }//length<3

    //Validmos que la longitud del valor del email sea mayor a 1
    if(! validarCorreo()){
        isValid = false;
    }//length<3

    if(! validarNumero()){
        isValid = false;
    }//validarNumero

    //Validmos que la longitud del valor del email sea mayor a 1
    if(txtMessage.value.length < 1){
        isValid = false;
    }//length<3

    if(isValid){
        
        let elemento = {
                        "Nombre" : txtName.value,
                        "Email" : txtEmail.value,
                        "Numero" : txtNumber.value,
                        "Mensaje" : txtMessage.value
        }

        //Guardamos el objeto "elemento" en el arreglo "datos"
        datos.push(elemento);

        //Imprimimos los datos en la pantalla
        //console.log(datos);

        //Con las siguientes dos lineas limpiamos los valores de los datos
        txtName.value="";
        txtEmail.value="";
        txtNumber.value="";
        txtMessage.value="";
        txtName.focus();

        Swal.fire({
            title: "Respuestas guardadas",
            //text: "You clicked the button!",
            icon: "success"
        });
        
    }

});//btnEnviar