var usuarios = [
    {
    nombre: "Teo",
    contrasena : "123"
    },
]

function resgristro(){
    let nombre = prompt("Ingresa el nombre de usuario:");
    let contrasena = prompt("Ingresa la contraseña:");

    let nuevoUsuario ={
        nombre: nombre,
        contrasena: contrasena
    };

    usuarios.push
    (nuevoUsuario)
    menuInicial()
}

function verificacionRegistro(nombre, contrasena){
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].nombre === nombre && usuarios[i].contrasena === contrasena){
            return true;
        } 
    }return false;
}

function iniciarSesion(){
    let usuario = prompt("Ingresa tu nombre de usuario: ")
    let contrasena = prompt("Ingresa tu contraseña: ")

    if (verificacionRegistro(usuario, contrasena)){
        alert("Incio de sesion exitoso");
    }else{
        alert("Revise su usuario o contraseña. \n vuelva a intentar")
    }
}

function menuInicial() {
    alert("Bienvenido a tu control de notas de confianza");
    try {
        let opcion = Number(prompt(
            `Elige una opción: 
             1. Iniciar sesión 
             2. Registrarse 
             3. salir`));

        if (isNaN(opcion)) {
            throw new Error("El valor ingresado no es un número.\nMera torta, Inténtalo de nuevo.");
        }

        switch(opcion) {
            case 1:
                alert("Opción 1: Iniciar sesión");
                iniciarSesion()
                break;
            case 2:
                alert("Opción 2: Registrarse");
                resgristro()
                break;
            case 3:
                alert("Vuelva pronto")
                break;
            default:
                alert("Opción no válida. Inténtalo de nuevo.");
                menuInicial(); 
                break;
        }
    } catch (error) {
        alert(error.message);
        menuInicial(); 
    }
}





























document.getElementById('openPromptButton').addEventListener('click', function() {
    menuInicial();
});
