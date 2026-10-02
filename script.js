/* =========================================================
   BASE DE DATOS DE LOS 5 MODULOS (Lecturas, Videos y Preguntas)
   ========================================================= */
const DATOS_MODULOS = {
    1: {
        titulo: "Modulo 1: Que es lo publico? El bien comun en el colegio",
        descripcion: "Comprende el concepto de propiedad publica y como los recursos de la institucion nos benefician a todos.",
        videoUrl: "https://www.youtube.com/embed/86mbA71iqRQ",
        lectura: `
            <h3>Los Bienes Publicos de Nuestra Institucion</h3>
            <p>Un <strong>bien publico</strong> es aquel que pertenece a toda la comunidad y cuyo uso esta disponible para todos los integrantes sin distincion. En el INEM Francisco de Paula Santander, los pasillos, las canchas de juego, los laboratorios, la biblioteca y las aulas de clase no son propiedad de nadie en particular; son de todos.</p>
            <ul>
                <li><strong>El origen de los recursos:</strong> Estos espacios se construyen y mantienen gracias a los recursos del Estado, que provienen de los impuestos de los ciudadanos.</li>
                <li><strong>El dano colateral:</strong> Cuando un estudiante daña una pared o rompe un elemento comun, no esta afectando a 'la institucion' como un ente abstracto, sino que esta perjudicando directamente el derecho de sus propios companeros a estudiar en condiciones dignas.</li>
                <li><strong>Corresponsabilidad:</strong> Proteger estos bienes es un deber constitucional e institucional de estudiantes, docentes y directivos.</li>
            </ul>
        `,
        preguntas: [
            { id: "m1_p1", pregunta: "Que define principalmente a un bien publico?", opciones: { a: "Que pertenece a una persona adinerada.", b: "Que es propiedad exclusiva del rector del colegio.", c: "Que pertenece a toda la comunidad y esta disponible para el uso de todos." }, correcta: "c" },
            { id: "m1_p2", pregunta: "Cual de los siguientes es un ejemplo claro de bien publico en tu comunidad?", opciones: { a: "Un parque recreativo municipal.", b: "El automovil de un vecino.", c: "El jardin de una casa privada." }, correcta: "a" },
            { id: "m1_p3", pregunta: "De donde provienen los recursos para el mantenimiento de los bienes publicos escolares?", opciones: { a: "De donaciones de empresas internacionales.", b: "Del Estado, financiados a traves de los impuestos de los ciudadaños.", c: "De rifas obligatorias realizadas por los estudiantes." }, correcta: "b" },
            { id: "m1_p4", pregunta: "Si alguien dana intencionalmente un bien publico del colegio, a quien perjudica?", opciones: { a: "Unicamente a los docentes de la materia.", b: "A nadie, porque el gobierno compra todo de nuevo inmediatamente.", c: "A toda la comunidad educativa, privandolos de un recurso util." }, correcta: "c" },
            { id: "m1_p5", pregunta: "Cual es nuestro principal deber frente a los bienes publicos?", opciones: { a: "Evitar usarlos para que no se desgasten.", b: "Protegerlos y utilizarlos de manera responsable y solidaria.", c: "Usarlos constantemente hasta que se rompan." }, correcta: "b" },
            { id: "m1_p6", pregunta: "Son las aulas de clase un espacio de caracter privado?", opciones: { a: "No, son espacios comunes disenados para el aprendizaje de todos.", b: "Si, pertenecen exclusivamente al profesor de turno.", c: "Si, pertenecen solo a los alumnos que se sientan adelante." }, correcta: "a" },
            { id: "m1_p7", pregunta: "Por que la educacion publica se considera un servicio comun?", opciones: { a: "Porque es obligatoria y no permite opiniones.", b: "Porque garantiza un derecho fundamental para el desarrollo de toda la sociedad.", c: "Porque no cuesta nada mantener las escuelas." }, correcta: "b" },
            { id: "m1_p8", pregunta: "Que actitud demuestra el verdadero valor del respeto por lo publico?", opciones: { a: "Ignorar cuando alguien raya las paredes.", b: "Utilizar las canchas solo para beneficio propio sin dejar jugar a otros.", c: "Reportar y manifestar rechazo cuando alguien atenta contra la infraestructura comun." }, correcta: "c" },
            { id: "m1_p9", pregunta: "Los laboratorios de ciencias del colegio son considerados:", opciones: { a: "Bienes publicos de uso pedagogico y cientifico para la comunidad.", b: "Zonas de juego libre sin supervision.", c: "Oficinas privadas del personal cientifico." }, correcta: "a" },
            { id: "m1_p10", pregunta: "Quienes son los responsables del cuidado de las instalaciones del INEM?", opciones: { a: "Solamente los vigilantes y el personal de aseo.", b: "Toda la comunidad educativa: estudiantes, docentes y directivos.", c: "Unicamente los estudiantes de grados superiores." }, correcta: "b" }
        ]
    },
    2: {
        titulo: "Modulo 2: Cuidado del mobiliario escolar (Pupitres, tableros y aulas)",
        descripcion: "Aprende a valorar y mantener en buen estado los implementos diarios que facilitan tus clases.",
        videoUrl: "https://www.youtube-nocookie.com/embed/g2f_37Z9wOQ",
        lectura: `
            <h3>El Mobiliario: Herramientas del Conocimiento</h3>
            <p>Los pupitres, las sillas, los tableros acrilicos y los escritorios son los recursos fisicos que sostienen tu jornada de estudio. Un pupitre rayado, tallado con navajas o con chicles pegados disminuye la calidad de vida escolar de quien lo usara en las siguientes jornadas.</p>
            <ul>
                <li><strong>El costo de la negligencia:</strong> Reparar o reponer mobiliario destruido consume fondos que la institucion podria invertir en mejores tecnologias o laboratorios.</li>
                <li><strong>Uso correcto:</strong> Evita balancearte en las sillas (esto debilita sus soldaduras y uniones), no uses correctores ni marcadores permanentes sobre las superficies de madera y reporta cualquier dano accidental.</li>
            </ul>
        `,
        preguntas: [
            { id: "m2_p1", pregunta: "Como deben mantenerse idealmente los pupitres del colegio?", opciones: { a: "Limpios, sin rayones de lapicero y libres de goma de mascar.", b: "Rallados con firmas para saber quien los uso.", c: "Llenos de calcomanias para decorarlos." }, correcta: "a" },
            { id: "m2_p2", pregunta: "Por que no se debe escribir sobre el tablero con marcadores no aptos o permanentes?", opciones: { a: "Porque se gasta la tinta muy rapido.", b: "Porque deteriora quimicamente la superficie especial de escritura del bien comun.", c: "Porque a los profesores no les gusta ese color." }, correcta: "b" },
            { id: "m2_p3", pregunta: "Que debes hacer si notas que un pupitre del salon esta flojo o tiene un tornillo salido?", opciones: { a: "Terminar de romperlo para que traigan uno nuevo.", b: "Cambiarlo de salon sin avisar a nadie.", c: "Informar al docente o al personal de mantenimiento para su pronta reparacion." }, correcta: "c" },
            { id: "m2_p4", pregunta: "Rayar o pintar grafitis vulgares en las paredes de las aulas se considera:", opciones: { a: "Expresion artistica libre de alta categoria.", b: "Una falta grave de vandalismo contra el entorno comun de aprendizaje.", c: "Una actividad permitida durante los descansos." }, correcta: "b" },
            { id: "m2_p5", pregunta: "Cual es la funcion de las cortinas o persianas en el aula de clases?", opciones: { a: "Regular la entrada de luz solar para facilitar la vision de pantallas o tableros.", b: "Servir como elementos para jugar a esconderse.", c: "Limpiar los marcadores cuando no hay borrador." }, correcta: "a" },
            { id: "m2_p6", pregunta: "Balancearse sobre las patas traseras de las sillas de clase provoca:", opciones: { a: "Que la silla se vuelva mas comoda y ergonomica.", b: "Un desgaste natural que no genera daños.", c: "El debilitamiento de la estructura metalica y riesgo inminente de accidentes." }, correcta: "c" },
            { id: "m2_p7", pregunta: "Al terminar la jornada escolar de clases, es una buena practica ciudadana:", opciones: { a: "Salir corriendo de inmediato dejando todo tirado.", b: "Subir la silla ordenadamente al pupitre y cerciorarse de que el salon quede limpio.", c: "Dejar la basura debajo del pupitre para que la limpien otros." }, correcta: "b" },
            { id: "m2_p8", pregunta: "Con que recursos economicos se adquieren los pupitres de un colegio oficial?", opciones: { a: "Con recursos de los impuestos publicos, destinados para que duren varias generaciones.", b: "Son donados de manera obligatoria por los padres de familia al matricular.", c: "Son gratis y no representan ningun gasto de fabricacion." }, correcta: "a" },
            { id: "m2_p9", pregunta: "Si derramas agua o refresco accidentalmente en un pupitre de madera debes:", opciones: { a: "Dejar que se absorba solo, la madera no se dana con el agua.", b: "Limpiarlo y secarlo inmediatamente para evitar que la madera se sople y deteriore.", c: "Mudarte a otro pupitre y no decir nada." }, correcta: "b" },
            { id: "m2_p10", pregunta: "Los armarios o estantes del aula de clase sirven para:", opciones: { a: "Guardar pertenencias privadas bajo llave sin autorizacion.", b: "Esconder basura u objetos prohibidos.", c: "Almacenar ordenadamente el material pedagogico comun del grupo academico." }, correcta: "c" }
        ]
    },
    3: {
        titulo: "Modulo 3: El agua y la energia como recursos publicos",
        descripcion: "Aprende la importancia ecologica y economica de cuidar los servicios publicos del plantel.",
        videoUrl: "https://www.youtube-nocookie.com/embed/yOGqpFOO2Dk",
        lectura: `
            <h3>Consumo Consciente de Recursos Vitales</h3>
            <p>El agua potable y la energia electrica son recursos limitados y costosos de generar. En el entorno escolar, el desperdicio de estos servicios influye directamente sobre el presupuesto que el colegio tiene asignado para proyectos estudiantiles y de infraestructura.</p>
            <ul>
                <li><strong>El cuidado del agua:</strong> Asegurate de cerrar los grifos del bano completamente despues de lavarte las manos. Un grifo mal cerrado puede perder hasta 30 litros de agua en un solo dia.</li>
                <li><strong>La energia electrica:</strong> Apaga los focos del aula si hay suficiente luz natural o cuando salgas al descanso. Evita dejar encendidos televisores, proyectores o computadoras si no estan prestando un fin pedagogico.</li>
            </ul>
        `,
        preguntas: [
            { id: "m3_p1", pregunta: "Por que se debe priorizar el cuidado del agua en el colegio?", opciones: { a: "Porque es un recurso vital, limitado y un servicio publico pagado con presupuesto comun.", b: "Porque el agua del colegio es mas cara que la de las casas.", c: "Porque no hay suficiente presion para todos los baños." }, correcta: "a" },
            { id: "m3_p2", pregunta: "Dejar el grifo del bano abierto mientras conversas con tus amigos genera:", opciones: { a: "Un agradable sonido de fondo ambiental.", b: "Un desperdicio de decenas de litros de agua potable apta para el consumo.", c: "Que las tuberias se limpien de forma natural." }, correcta: "b" },
            { id: "m3_p3", pregunta: "Si ves que un grifo de los baños gotea constantemente debes:", opciones: { a: "Poner un tapon de papel para que no se escuche.", b: "Ignorarlo, el colegio tiene mucho dinero para pagar el agua.", c: "Reportarlo rapidamente a un profesor o al personal de mantenimiento." }, correcta: "c" },
            { id: "m3_p4", pregunta: "Cual es la forma correcta de usar los filtros de agua potable?", opciones: { a: "Para jugar a mojarse con los companeros.", b: "Unicamente para beber de forma higienica y recargar botellas, evitando derrames.", c: "Para lavar los pinceles de las clases de arte." }, correcta: "b" },
            { id: "m3_p5", pregunta: "Apagar las luces del aula al salir al recreo o a educacion fisica es:", opciones: { a: "Un habito de responsabilidad ambiental que evita el desperdicio de energia publica.", b: "Una regla molesta que no tiene ningun impacto real.", c: "Un deber exclusivo del profesor de fisica." }, correcta: "a" },
            { id: "m3_p6", pregunta: "Que es el fenomeno de la 'energia vampiro' en el salon de informatica?", opciones: { a: "Energia electrica que solo funciona durante la noche.", b: "La electricidad estatica que da pequenos golpes electricos.", c: "El consumo silencioso de aparatos apagados pero que siguen conectados al tomacorriente." }, correcta: "c" },
            { id: "m3_p7", pregunta: "Aprovechar al maximo la luz solar abriendo las ventanas del salon permite:", opciones: { a: "Que el salon se enfrie demasiado rapido.", b: "Disminuir drasticamente el uso de bombillas electricas innecesarias.", c: "Que se pierda la atencion de los estudiantes hacia la calle." }, correcta: "b" },
            { id: "m3_p8", pregunta: "La energia electrica consumida en el colegio proviene de:", opciones: { a: "Recursos de la nacion que de ser malgastados reducen inversion en otras areas.", b: "Una planta electrica propia y gratuita que no genera gastos.", c: "Una donacion ilimitada de la empresa de energia de la ciudad." }, correcta: "a" },
            { id: "m3_p9", pregunta: "El desperdicio descontrolado de agua y luz en el colegio oficial provoca:", opciones: { a: "Que el gobierno cierre el colegio de forma inmediata.", b: "Un aumento de las tarifas que limita el presupuesto para insumos didacticos.", c: "Que los estudiantes tengan menos horas de clase." }, correcta: "b" },
            { id: "m3_p10", pregunta: "Por que es clave reportar enchufes danados o cables pelados en el colegio?", opciones: { a: "Para que no se vea feo el salon.", b: "Para prevenir accidentes por descarga electrica, incendios y cortocircuitos.", c: "Para que el salon tenga mejor senal de internet." }, correcta: "b" }
        ]
    },
    4: {
        titulo: "Modulo 4: Zonas comunes, baños y manejo de residuos",
        descripcion: "Reconoce las pautas de salubridad y ecologia para mantener un colegio sano e higienico.",
        videoUrl: "https://www.youtube-nocookie.com/embed/fD_bV-u6lq0",
        lectura: `
            <h3>Higiene Colectiva y Convivencia Sostenible</h3>
            <p>Los baños y los patios de recreo son los lugares donde mas se pone a prueba la cultura ciudadana de un colegio. El estado de higiene de un bano refleja fielmente el respeto que los estudiantes tienen por si mismos y por sus semejantes.</p>
            <ul>
                <li><strong>Pautas en los sanitarios:</strong> Nunca arrojes papeles, toallas higienicas o envolturas plasticas dentro del inodoro; esto causa taponamientos costosos de reparar.</li>
                <li><strong>Clasificacion de basura:</strong> Haz uso adecuado de las canecas. Deposita los restos de comida en la caneca correspondiente (verde para organicos) para facilitar el compostaje y evitar plagas en el colegio.</li>
            </ul>
        `,
        preguntas: [
            { id: "m4_p1", pregunta: "Cual es el comportamiento correcto en el uso de los sanitarios de la escuela?", opciones: { a: "Dejar el inodoro sin descargar y papeles en el suelo.", b: "Garantizar la descarga de la cisterna y depositar el papel higienico en el cesto de basura.", c: "Escribir pensamientos graciosos en las paredes de los cubiculos." }, correcta: "b" },
            { id: "m4_p2", pregunta: "A donde debe ir a parar el papel higienico usado en los baños publicos?", opciones: { a: "Directamente al inodoro para que se disuelva.", b: "Escondido detras de las tuberias del lavamanos.", c: "En la papelera de residuos no reciclables dispuesta en el bano." }, correcta: "c" },
            { id: "m4_p3", pregunta: "Arrojar basura en los pasillos, canchas o zonas comunes genera:", opciones: { a: "Mas empleo y trabajo para el personal de limpieza escolar.", b: "Riesgos de salud publica, contaminacion visual y atraccion de plagas.", c: "Que las plantas crezcan con mayor rapidez." }, correcta: "b" },
            { id: "m4_p4", pregunta: "Como se deben cuidar los comedores o mesas de la cafeteria escolar?", opciones: { a: "Recogiendo platos o bandejas, dejando la superficie limpia para el proximo companero.", b: "Dejando envolturas y migas sobre la mesa para que otros las limpien.", c: "Rayando las mesas con marcadores para apartar el puesto." }, correcta: "a" },
            { id: "m4_p5", pregunta: "Que tipo de desechos deben depositarse en la caneca de color verde?", opciones: { a: "Botellas plasticas y latas vacias.", b: "Residuos organicos biodegradables como cascaras y restos de frutas.", c: "Papel, carton limpio y empaques de galletas." }, correcta: "b" },
            { id: "m4_p6", pregunta: "Las canchas de futbol, baloncesto y patios del plantel son para:", opciones: { a: "El uso libre sin importar danar los aros, mallas o verjas.", b: "Reservar el uso exclusivo solo a los estudiantes de cursos altos.", c: "El sano esparcimiento fisico y deportivo, cuidando sus mallas, tableros y pintura." }, correcta: "c" },
            { id: "m4_p7", pregunta: "Rayar, patear o danar las puertas de los sanitarios de la institucion educativa representa:", opciones: { a: "Un juego divertido entre amigos.", b: "Una vulneracion grave a la privacidad y al patrimonio fisico comun.", c: "Una actividad tolerada por el manual de convivencia." }, correcta: "b" },
            { id: "m4_p8", pregunta: "Cual es la forma correcta de cuidar los jardines y plantas ornamentales del INEM?", opciones: { a: "Respetar los senderos peatonales, no pisar las plantas ni arrancar sus flores u hojas.", b: "Arrancar flores para regalarlas en clase de biologia.", c: "Usar las jardineras como basureros alternativos." }, correcta: "a" },
            { id: "m4_p9", pregunta: "Si ves que a un companero se le cae accidentalmente un paquete de basura en el patio debes:", opciones: { a: "Burlarte y patear la basura mas lejos.", b: "Ignorarlo, no es tu basura ni tu problema.", c: "Pedirle amablemente que la recoja o recogerla tu para cuidar el espacio de todos." }, correcta: "c" },
            { id: "m4_p10", pregunta: "Las papeleras ubicadas dentro de las aulas estan destinadas prioritariamente para:", opciones: { a: "Arrojar liquidos sobrantes y cascaras de frutas con mal olor.", b: "Residuos de papeleria, virutas de lapiz y materiales secos.", c: "Depositar botellas de vidrio de gaseosa pesadas." }, correcta: "b" }
        ]
    },
    5: {
        titulo: "Modulo 5: Sentido de pertenencia y convivencia ciudadana",
        descripcion: "Concluye el curso entendiendo como tus habitos diarios forjan tu futuro como ciudadano del mundo.",
        videoUrl: "https://www.youtube-nocookie.com/embed/PjE_U8b2Nq4",
        lectura: `
            <h3>Ciudadania Escolar: Del Colegio a la Sociedad</h3>
            <p>El colegio es un simulador de la sociedad real. Si aprendes a respetar las normas de convivencia y a cuidar los bienes colectivos del INEM, te estaras formando como un ciudadano honesto, civico y responsable que cuidara los parques de su ciudad, las calles, el transporte publico y los recursos de su propio pais.</p>
            <ul>
                <li><strong>Sentido de pertenencia:</strong> Es sentir orgullo por tu institucion educativa y comprometerte con su cuidado como si fuera tu propio hogar.</li>
                <li><strong>El legado:</strong> Recuerda que otros estudiantes vendran detras de ti y merecen encontrar una institucion en tan buenas condiciones como tu la recibiste.</li>
            </ul>
        `,
        preguntas: [
            { id: "m5_p1", pregunta: "Que significa tener 'sentido de pertenencia' por tu colegio?", opciones: { a: "Sentir que eres dueno de un salon y nadie mas lo puede usar.", b: "Cuidar, valorar y sentir orgullo por el colegio, su infraestructura y su comunidad.", c: "Llevarse los materiales de clase para guardarlos en tu casa." }, correcta: "b" },
            { id: "m5_p2", pregunta: "Un estudiante que ejerce una verdadera ciudadania escolar:", opciones: { a: "Sigue las normas solo cuando hay un profesor vigilando de cerca.", b: "Protege los bienes comunes de forma voluntaria, respetando las normas de convivencia.", c: "Le da igual el estado fisico del colegio." }, correcta: "b" },
            { id: "m5_p3", pregunta: "Como fomentan los docentes y directivos el cuidado de los bienes publicos?", opciones: { a: "Prohibiendo a los estudiantes salir a descansar.", b: "Sancionando economicamente a todos sin investigar.", c: "Promoviendo el uso formativo, etico y pedagogico de cada elemento comun de la institucion." }, correcta: "c" },
            { id: "m5_p4", pregunta: "El Manual de Convivencia de la Institucion Educativa contiene normas destinadas a:", opciones: { a: "Asegurar un clima de respeto mutuo, armonia y la preservacion del patrimonio escolar.", b: "Limitar la creatividad y la diversion de los estudiantes.", c: "Darle el poder absoluto de decision al rector." }, correcta: "a" },
            { id: "m5_p5", pregunta: "Participar voluntariamente en jornadas de embellecimiento, pintura o siembra en el colegio ayuda a:", opciones: { a: "Perder horas de clase valiosas sin ningun provecho.", b: "Apropiarse amorosamente del espacio escolar y fortalecer el trabajo cooperativo.", c: "Hacer el trabajo que solo le corresponde al rector." }, correcta: "b" },
            { id: "m5_p6", pregunta: "Cuidar los murales artisticos pintados por tus companeros en las paredes del colegio demuestra:", opciones: { a: "Miedo a ser suspendido por la coordinacion.", b: "Indiferencia ante las expresiones de los demas.", c: "Aprecio sincero por el arte, la cultura y el esfuerzo colectivo del plantel." }, correcta: "c" },
            { id: "m5_p7", pregunta: "Cuando visitas la Biblioteca Escolar para investigar, es tu deber civico:", opciones: { a: "Hacer silencio, cuidar las paginas de los libros y dejarlos en su lugar respectivo.", b: "Arrancar las paginas de los libros que te sirven para tu tarea escolar.", c: "Hablar en voz alta y consumir alimentos cerca de los computadores." }, correcta: "a" },
            { id: "m5_p8", pregunta: "Cual es la mejor manera de invitar a tus companeros a que no danen los pupitres?", opciones: { a: "Tratarlos con violencia fisica y gritarles.", b: "Dar el ejemplo con el cuidado propio y explicar pacificamente la importancia del cuidado colectivo.", c: "Quedarte callado y no intervenir para evitar problemas." }, correcta: "b" },
            { id: "m5_p9", pregunta: "Los bienes publicos y recursos didacticos del INEM estan disenados primordialmente para:", opciones: { a: "Adornar los pasillos y vitrinas sin que nadie los toque.", b: "Ser guardados bajo llave por el personal administrativo.", c: "Asegurar el exito del proceso academico de todos y cada uno de los estudiantes." }, correcta: "c" },
            { id: "m5_p10", pregunta: "Aprender a cuidar tu escuela hoy te prepara de forma directa para:", opciones: { a: "Convertirte en un ciudadano ejemplar que protegera los parques, calles y recursos del pais.", b: "Ser el futuro rector de esta misma institucion.", c: "Terminar los estudios sin necesidad de presentar examenes." }, correcta: "a" }
        ]
    }
};

/* =========================================================
   VARIABLES GLOBALES DEL SISTEMA
   ========================================================= */
let datosUsuario = { nombre: "", documento: "", rol: "" };
let moduloActual = 1;
let modulosAprobados = { 1: false, 2: false, 3: false, 4: false, 5: false };

/* =========================================================
   1. REGISTRO DEL PARTICIPANTE
   ========================================================= */
function iniciarCurso() {
    const txtNombre = document.getElementById("nombre").value.trim();
    const txtDocumento = document.getElementById("documento").value.trim();
    const selRol = document.getElementById("rol").value;

    if (!txtNombre) { alert("Por favor, ingresa tu nombre completo."); document.getElementById("nombre").focus(); return; }
    if (!txtDocumento) { alert("Por favor, ingresa tu numero de documento de identidad."); document.getElementById("documento").focus(); return; }
    if (!selRol) { alert("Por favor, selecciona si eres Estudiante o Docente."); document.getElementById("rol").focus(); return; }

    datosUsuario.nombre = txtNombre;
    datosUsuario.documento = txtDocumento;
    datosUsuario.rol = selRol;

    document.getElementById("infoUsuario").innerHTML = `
        Participante: <strong>${datosUsuario.nombre}</strong> &nbsp;|&nbsp; 
        Documento: <strong>${datosUsuario.documento}</strong> &nbsp;|&nbsp; 
        Rol: <strong>${datosUsuario.rol}</strong>
    `;

    document.getElementById("pantallaRegistro").classList.remove("activa");
    document.getElementById("pantallaCurso").classList.add("activa");

    actualizarBotonesNavegacion();
    irAModulo(1);
}

/* =========================================================
   2. RENDERIZADO DEL MODULO
   ========================================================= */
function renderModulo(id) {
    moduloActual = id;
    const datos = DATOS_MODULOS[id];
    const contenedor = document.getElementById("contenedorModulos");

    let html = `
        <div class="modulo-card">
            <h2 class="modulo-titulo">${datos.titulo}</h2>
            <p class="modulo-descripcion">${datos.descripcion}</p>
            <div class="video-responsive">
                <iframe src="${datos.videoUrl}" allowfullscreen></iframe>
            </div>
            <div class="lectura-seccion">${datos.lectura}</div>
            <div class="quiz-header">
                <h3>Evaluacion de Comprension</h3>
                <p>Responde las 10 preguntas. Necesitas al menos <strong>8 de 10 correctas (80%)</strong> para avanzar al siguiente modulo.</p>
            </div>
            <div class="preguntas-contenedor">
    `;

    datos.preguntas.forEach((pregunta, index) => {
        html += `
            <div class="pregunta-item">
                <p class="pregunta-texto">${index + 1}. ${pregunta.pregunta}</p>
                <div class="opciones-lista">
                    <label><input type="radio" name="${pregunta.id}" value="a"> A) ${pregunta.opciones.a}</label>
                    <label><input type="radio" name="${pregunta.id}" value="b"> B) ${pregunta.opciones.b}</label>
                    <label><input type="radio" name="${pregunta.id}" value="c"> C) ${pregunta.opciones.c}</label>
                </div>
            </div>
        `;
    });

    html += `
            </div>
            <div id="resultadoMod" class="resultado-modulo"></div>
            <button id="btnEvaluar" class="btn-enviar-modulo" onclick="evaluarModulo(${id})">Enviar Respuestas de Evaluacion</button>
        </div>
    `;

    contenedor.innerHTML = html;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* =========================================================
   3. EVALUACION Y VALIDACION (Minimo 80%)
   ========================================================= */
function evaluarModulo(id) {
    const datos = DATOS_MODULOS[id];
    let correctasCount = 0;
    let preguntasSinResponder = [];

    datos.preguntas.forEach((pregunta, index) => {
        const seleccion = document.querySelector(`input[name="${pregunta.id}"]:checked`);
        if (!seleccion) {
            preguntasSinResponder.push(index + 1);
        } else if (seleccion.value === pregunta.correcta) {
            correctasCount++;
        }
    });

    if (preguntasSinResponder.length > 0) {
        alert("Aun no terminas la evaluacion. Te faltan responder las preguntas: " + preguntasSinResponder.join(", "));
        return;
    }

    const divResultado = document.getElementById("resultadoMod");
    const btnEvaluar = document.getElementById("btnEvaluar");

    if (correctasCount >= 8) {
        modulosAprobados[id] = true;
        actualizarProgreso();
        actualizarBotonesNavegacion();

        divResultado.className = "resultado-modulo exito";
        
        if (id < 5) {
            divResultado.innerHTML = `
                Aprobaste con <strong>${correctasCount} de 10</strong> respuestas correctas.<br>
                Has desbloqueado el siguiente modulo pedagogico.
                <br>
                <button class="btn-siguiente" onclick="irAModulo(${id + 1})">Ir al Modulo ${id + 1}</button>
            `;
        } else {
            divResultado.innerHTML = `
                Has completado el ultimo modulo con <strong>${correctasCount} de 10</strong> respuestas correctas.<br>
                Ya puedes generar tu certificacion de aprobacion del curso academico.
                <br>
                <button class="btn-siguiente" onclick="mostrarCertificado()">Generar Certificado PDF</button>
            `;
        }
        btnEvaluar.style.display = "none";
    } else {
        divResultado.className = "resultado-modulo fallo";
        divResultado.innerHTML = `
            Obtuviste <strong>${correctasCount} de 10</strong> respuestas correctas.<br>
            Necesitas al menos 8 respuestas correctas para aprobar (80%).<br>
            Vuelve a leer el modulo de estudio e intentalo de nuevo.
            <br>
            <button class="btn-siguiente" style="background:#a4161a" onclick="renderModulo(${id})">Reintentar Evaluacion</button>
        `;
        btnEvaluar.style.display = "none";
    }

    divResultado.scrollIntoView({ behavior: 'smooth' });
}

/* =========================================================
   4. CONTROL DE NAVEGACION
   ========================================================= */
function irAModulo(id) {
    if (id === 1 || modulosAprobados[id - 1]) {
        for (let i = 1; i <= 5; i++) {
            const btn = document.getElementById(`btnMod${i}`);
            btn.classList.remove("activo");
            if (i === id) btn.classList.add("activo");
        }
        renderModulo(id);
    } else {
        alert("Modulo bloqueado. Debes aprobar la evaluacion del modulo anterior con el 80%.");
    }
}

function actualizarBotonesNavegacion() {
    for (let i = 1; i <= 5; i++) {
        const btn = document.getElementById(`btnMod${i}`);
        if (i === 1) {
            btn.disabled = false;
            btn.className = "btn-modulo completado";
            if (moduloActual === 1) btn.classList.add("activo");
            continue;
        }
        if (modulosAprobados[i - 1]) {
            btn.disabled = false;
            btn.className = "btn-modulo completado";
        } else {
            btn.disabled = true;
            btn.className = "btn-modulo bloqueado";
        }
        if (moduloActual === i) btn.classList.add("activo");
    }
}

/* =========================================================
   5. BARRA DE PROGRESO
   ========================================================= */
function actualizarProgreso() {
    let completados = 0;
    for (let i = 1; i <= 5; i++) { if (modulosAprobados[i]) completados++; }
    let porcentaje = completados * 20;
    document.getElementById("barraProgreso").style.width = porcentaje + "%";
    document.getElementById("progresoTexto").textContent = porcentaje + "%";
}

/* =========================================================
   6. CERTIFICADO PDF
   ========================================================= */
function mostrarCertificado() {
    document.getElementById("pantallaCurso").classList.remove("activa");
    document.getElementById("pantallaCertificado").classList.add("activa");

    document.getElementById("certNombre").textContent = datosUsuario.nombre.toUpperCase();
    document.getElementById("certDocumento").textContent = datosUsuario.documento;
    document.getElementById("certRol").textContent = datosUsuario.rol;

    const hoy = new Date();
    const formatoFecha = { year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById("certFecha").textContent = "Pasto, " + hoy.toLocaleDateString("es-CO", formatoFecha);

    const folioUnico = "INEM-" + hoy.getFullYear() + "-" + Math.floor(1000 + Math.random() * 9000);
    document.getElementById("certFolio").textContent = folioUnico;

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function descargarCertificado() {
    window.print();
}