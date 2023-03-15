  // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
    const firebaseConfig = {
    apiKey: "AIzaSyCSUbyK7-_9OxL37rU6SrYPTNZjebZp3Jg",
    authDomain: "configuracion-chatbot.firebaseapp.com",
    projectId: "configuracion-chatbot",
    storageBucket: "configuracion-chatbot.appspot.com",
    messagingSenderId: "744369750392",
    appId: "1:744369750392:web:2148111f792248155fc88d"
    };

  // Initialize Firebase
    const app = initializeApp(firebaseConfig);


    nombreDeNegocio = document.getElementById("negocio").value;
    breveDescripcion = document.getElementById("descrip_1").value;
    extensaDescripcion = document.getElementById("descrip_2").value;
    horariosDeAtencion = document.getElementById("horarios").value; 
    planesServicios = document.getElementById("planes").value;
    preguntasFrecuentes = document.getElementById("consultas_frecuentes").value; 

    const enviar = document.querySelector("contact-submit");

    enviar.addEventListener("click", writeUserData);

    function writeUserData(negocio, breveDescripcion, extensaDescripcion, horariosDeAtencion, planesServicios, preguntasFrecuentes) {
        const db = getDatabase();
        set(ref(db, 'users/' + negocio), {
        Breve descripción: breveDescripcion,
        Descripción extensa: extensaDescripcion,
        Horarios: horariosDeAtencion,
        Información sobre planes y servicios: planesServicios,
        Preguntas frecuentes: preguntasFrecuentes
        });
    }
