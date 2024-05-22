<h1 align="center">Hola!! 👋🏾</h1>

###

<p align="left">Soy Mateo Arroyave</p>

###

<h2 align="left">Estudiante del Cesde y practicante de TCC</h2>

###

<p align="left">✨ Creando errores desde el 2023<br>📚Actualmente estoy aprendiendo Java y JavaScript <br>🎯 Me gustaría aprender Backend y poder trabajar de mi pasión <br>🎲 Desde muy pequeño me ha gustado todo el tema de la programación y en algún punto me gustaría aprender ciberseguridad</p>

###

<h2 align="left">Este Repo esta hecho especialmente con JavaScript</h2>

###

<div align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" alt="javascript logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="40" alt="html5 logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="40" alt="css3 logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" height="40" alt="vscode logo"  />
</div>

###

<h3 align="left">Archivos</h3>


## Archivos
  - `index`: Es el archivo por el cual se ejecuta el programa.
  - `style`: Le da la forma al contenedor y al boton.
  - `oauth`: Es el archivo donde se encuentra la logica del registro, validación y inicio de sesion.
  - `menus`: Es en donde se encuentran los dos menus del proyecto y donde se hace llamado a la mayoria de las funciones.
  - `notasDefinitiva`: Es donde se realizan los procedimientos y la logica del proyecto.
  - `Tema`: En este archivo se puede encontrar el requerimiento y unas notas iniciales de como resolver el problema.

- uses: Platane/snk@v3
  with:
    # github user name to read the contribution graph from (**required**)
    # using action context var `github.repository_owner` or specified user
    github_user_name: ${{ github.repository_owner }}

    # list of files to generate.
    # one file per line. Each output can be customized with options as query string.
    #
    #  supported options:
    #  - palette:     A preset of color, one of [github, github-dark, github-light]
    #  - color_snake: Color of the snake
    #  - color_dots:  Coma separated list of dots color.
    #                 The first one is 0 contribution, then it goes from the low contribution to the highest.
    #                 Exactly 5 colors are expected.
    outputs: |
      dist/github-snake.svg
      dist/github-snake-dark.svg?palette=github-dark
      dist/ocean.gif?color_snake=orange&color_dots=#bfd6f6,#8dbdff,#64a1f4,#4b91f1,#3c7dd9
