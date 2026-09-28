📚 Biblioteca Horizonte
Biblioteca Horizonte es una plataforma web frontend diseñada para explorar, seleccionar y recomendar libros en una biblioteca virtual. El proyecto cuenta con un diseño dinámico utilizando HTML5, CSS3 y JavaScript vanilla, incluyendo funcionalidades interactivas como control de reproductor multimedia, un contador de libros seleccionados en tiempo real y autenticación simulada.

🚀 Características Principales
Encabezado e Ingreso de Usuario:

Formulario de autenticación rápida con validación de correo electrónico.

Contador interactivo en tiempo real que refleja el número de libros seleccionados por el usuario.

Navegación por Categorías:

Tarjetas de géneros literarios (Novelas, Ciencia, Historia, Tecnología, Arte e Infantil).

Sección Hero Multimedia:

Reproductor de video integrado con reproducción automática (autoplay, muted, loop).

Efecto interactivo al pasar el cursor (hover): detiene el video y muestra una portada estática superpuesta.

Módulo de Recomendaciones:

Listado de libros recomendados (Cien años de soledad, Sapiens, El principito).

Botones de acción (+) que incrementan el contador global de selección de libros.

🛠️ Tecnologías Utilizadas
HTML5: Estructura semántica de la página (<header>, <main>, <section>, <video>, etc.).

CSS3: Maquetación responsiva con Flexbox, diseño adaptativo, capas superpuestas con position: absolute y efectos de transición visual.

JavaScript (ES6+): Manipulación del DOM, gestión de eventos (submit, click, mouseenter, mouseleave) y control programático de medios HTML5 (play(), pause()).

📂 Estructura del Proyecto
Basada en la organización de rutas estáticas definida en el código:

biblioteca-horizonte/
├── index.html
└── static/
    ├── css/
    │   └── style.css
    ├── js/
    │   └── script.js
    ├── images/
    │   ├── libro.jfif
    │   ├── compra.jfif
    │   ├── libro2.jfif
    │   ├── ciencia.jfif
    │   ├── historia.jfif
    │   ├── tecnologia.jfif
    │   ├── artes.jfif
    │   ├── infatil.jfif
    │   ├── bliblo.jfif
    │   ├── cien años de soledad.jfif
    │   ├── sapies.jfif
    │   └── principito.jfif
    └── video/
        └── videoplayback.mp4
Nota: Se identificó una pequeña errata en la ruta de la imagen de El principito dentro de index.html (src="sstatic/images/principito.jfif"). Se recomienda corregir a static/images/principito.jfif.

⚡ Instalación y Ejecución
Clonar el repositorio o descargar los archivos:
Asegúrate de mantener la estructura de carpetas indicada arriba.

Abrir el proyecto:
Simplemente abre el archivo index.html en cualquier navegador web moderno (Chrome, Firefox, Edge, Safari) o ejecútalo usando una extensión como Live Server en VS Code.

🎮 Funcionalidades JS Explicadas
Formulario de Ingreso: Captura el correo ingresado y despliega un mensaje de bienvenida personalizado antes de reiniciar el campo.

Contador de Libros: Cada clic en el botón + de la sección recomendados actualiza la variable selectedCount e incrementa la cifra en .counter-val.

Hover en el Video Hero: Al colocar el ratón sobre #mediaFrame, el evento mouseenter pausa la reproducción del video y activa la visibilidad del overlay CSS; al retirar el cursor (mouseleave), el video se reanuda automáticamente.