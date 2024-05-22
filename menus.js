import {resgristro,iniciarSesion} from './Oauth.js'
import {ingresarNotas,notasEstudiantes,ganaron} from './NotasDefinitiva.js';


export function menuInicial() {
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
                iniciarSesion();
                break;
            case 2:
                resgristro();
                break;
            case 3:
                alert("Vuelva pronto");
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

export function menuPrincipal() {
    alert("Bienvenido al Menu Principal");
    try {
        let opcion = Number(prompt(
            `Elige una opción: 
             1. Ingresar notas 
             2. ver definitiva
             3. Mostar cuantos estudiantes ganaron
             4. volver al menu de inicio
             5. salir`));

        if (isNaN(opcion)) {
            throw new Error("El valor ingresado no es un número.\nMera torta, Inténtalo de nuevo.");
        }

        switch(opcion) {
            case 1:
                ingresarNotas()
                break;
            case 2:
                notasEstudiantes()
                break;
            case 3:
                ganaron()
                break;
            case 4:
                menuInicial()
                break;
            case 5:
                alert("Vuelva pronto")
                break;
            default:
                alert("Opción no válida. Inténtalo de nuevo.");
                menuPrincipal(); 
                break;
        }
    } catch (error) {
        alert(error.message);
        menuPrincipal(); 
    }
}



document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('openPromptButton').addEventListener('click', menuInicial);
});


