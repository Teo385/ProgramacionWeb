import { menuInicial, menuPrincipal } from "./menus.js";

export let usuarios = [
  {
    nombre: "Teo",
    contrasena: "123",
  },
];

export function registro() {
  let nombre = prompt("Ingresa el nombre de usuario:");
  let contrasena = prompt("Ingresa la contraseña:");

  let nuevoUsuario = {
    nombre: nombre,
    contrasena: contrasena,
  };

  usuarios.push(nuevoUsuario);
  menuInicial();
 
}

export function verificacionRegistro(nombre, contrasena) {
  for (let i = 0; i < usuarios.length; i++) {
    if (
      usuarios[i].nombre === nombre &&
      usuarios[i].contrasena === contrasena
    ) {
      return true;
    }
  }
  return false;
}

export function iniciarSesion() {
  let usuario = prompt("Ingresa tu nombre de usuario: ");
  let contrasena = prompt("Ingresa tu contraseña: ");

  if (verificacionRegistro(usuario, contrasena)) {
    alert("Incio de sesion exitoso");
    menuPrincipal();
  } else {
    alert("Revise su usuario o contraseña. \n vuelva a intentar");
    menuInicial();
  }
}
