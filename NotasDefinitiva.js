import { usuarios } from "./oauth.js";
import { menuPrincipal } from "./menus.js";

let registroNotas = [];

function calcularNotaFinal(nota1, nota2, nota3) {
  nota1 = Math.max(1, Math.min(5, nota1));
  nota2 = Math.max(1, Math.min(5, nota2));
  nota3 = Math.max(1, Math.min(5, nota3));

  const notaFinal = nota1 * 0.2 + nota2 * 0.3 + nota3 * 0.5;

  return Math.round(notaFinal * 100) / 100;
}

export function ingresarNotas() {
  let materia = prompt("Ingresa el nombre de la materia:");

  let nota1 = parseFloat(prompt("Ingresa la primera nota:"));
  let nota2 = parseFloat(prompt("Ingresa la segunda nota:"));
  let nota3 = parseFloat(prompt("Ingresa la tercera nota:"));

  let definitiva = calcularNotaFinal(nota1, nota2, nota3);

  let nuevoregistro = {
    materia: materia,
    notaFinal: definitiva,
  };

  registroNotas.push(nuevoregistro);
  notasEstudiantes();
}

export function notasEstudiantes() {
  console.log("Usuarios y Notas:");
  for (let i = 0; i < usuarios.length; i++) {
    if (registroNotas[i]) {
      alert(
        `Usuario: ${usuarios[i].nombre}\n Materia: ${registroNotas[i].materia}\n Nota Final: ${registroNotas[i].notaFinal}`
      );
    }
  }
  menuPrincipal();
}

export function ganaron() {
  let usuariosSuperan3 = registroNotas.filter((nota) => nota.notaFinal >= 3.5);
  let cantidadUsuariosSuperan3 = usuariosSuperan3.length;
  alert(
    `Número de estudiantes que ganaron con más de 3.5 fueron:\n${cantidadUsuariosSuperan3}`
  );
  menuPrincipal();
}
