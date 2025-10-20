# PROYECTO CONSTRUYE APLICACIONES WEB

## Descripción general del sistema o proyecto.

## Estado del proyecto

## Lista de las tecnologías utilizadas

PUNTOS DE LA WEB

## Investigacion

1. Los diferentes tipos de casing al definir nombres compuestos en programación
2. Kebab-case
3. Camel-case
4. Snake-case
5. Recomendaciones de guías de estilo de Google y W3C

### Los diferentes tipos de casing al definir nombres compuestos en programación

En programación siempre se requiere definir una variable, entidad, objeto o función por un nombre, a lo cual, me generó la duda de qué 'casings' son mejores de usar en qué espacios para no confundirme y en general tener buenas prácticas a la hora de programar.

Lo que recopilé desde [markdownguide.org:](https://www.markdownguide.org/basic-syntax)

| Casing     | Sintaxis    | Ejemplo de uso                                            | Dónde se usa (generalmente)                     |
| ---------- | ----------- | --------------------------------------------------------- | ----------------------------------------------- |
| Kebab-case | menu-button | &lt;div class="menu-button"&gt;                           | HTML, CSS y en nombres de archivos              |
| camelCase  | menuButton  | const menuButton = document.getElementById('menu-button); | Javascript, en nombres de variables o funciones |
| PascalCase | MenuButton  | class MenuButton(...) { ... }                             | Clases o componentes, mayormente React y POO    |
| snake_case | menu_button | menu_button = "inicio "                                   | Mayormente en Python xd                         |

### Kebab-case

El 'Kebab-case' es cuando, normalmente definiendo nombres de clases o IDs, uno usa sólamente minúsculas pero separamos las palabras con guiones, pareciéndose a un kebab por cómo se separa la cómida y aveces queda un palito de espacio.

### Camel-case

Es cuando, de igual manera, definiendo variables, clases o IDs, vamos alternando entre mayúsculas y minúsculas, asemejando a un camello y sus jorobas.

### Snake-case

Igual de simple que las anteriores maneras de definir variables, esta se asemeja a una serpiente porque se usan guiones bajos para separar palabras, asemejando una serpiente.

### Recomendaciones de guías de estilo de Google y W3C

También me surgió la duda de qué atributos van primero, si el class, el id, etc

Según las guías de estilo de [Google](https://developers.google.com/style/html-formatting) y [W3C](https://www.w3schools.com/html/html5_syntax.asp):

| Orden recomendado                       | Atributos                                    |
| --------------------------------------- | -------------------------------------------- |
| 1. Identificación y semántica           | id, class, name, data                        |
| 2. Atrobutos de destino o enlace        | href, src, for, type, action                 |
| 3. Atributos de estado o comportamiento | value, checked, selected, disabled, readonly |
| 4. Atributos de accesibilidad           | alt, title, aria-\*, role                    |
| 5. Atributos de estilo y layout         | style, width, height                         |
| 6. Eventos                              | onclick, onchange, onfocus                   |

### Referencias

Cómo poner un texto dentro de una imagen: [FineGap en Youtube](https://www.youtube.com/watch?v=Ne-uF4oY6pQ)
