// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field

var firebaseConfig = {
    apiKey: "AIzaSyC79qTU7866s9lTSz4PzD4WliqVjrMaH64",
    authDomain: "prueba-d3802.firebaseapp.com",
    projectId: "prueba-d3802",
    storageBucket: "prueba-d3802.appspot.com",
    messagingSenderId: "323601035406",
    appId: "1:323601035406:web:4d767279e17dfd4ff659df"

};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
leer_datos();

function capturar_datos() {
    let nombre = document.getElementById('nombre').value;
    let correo = document.getElementById('correo').value;
    let telefono = document.getElementById('telefono').value;

    db.collection("usuarios").add({
        correo: correo,
        nombre: nombre,
        telefono: telefono
    })
        .then(function (docRef) {
            console.log("Documento escrito con el ID :D", docRef.id);
            document.getElementById('nombre').value = '';
            document.getElementById('correo').value = '';
            document.getElementById('telefono').value = '';

        })
        .catch(function (error) {
            console.error("Error al escribir en firestore", error);

        });
}
function leer_datos() {
    let tabla_datos = document.getElementById('tabla-datos');
    db.collection("usuarios").get().then((querySnapshot) => {
        tabla_datos.innerHTML = '';
        querySnapshot.forEach((doc) => {
            console.log('Datos recibidos ' + `${doc.id}=>${doc.data().nombre}`);
            tabla_datos.innerHTML += `
        <tr>
         <th scope="row">${doc.id}</th>
         <td>${doc.data().nombre}</td>
         <td>${doc.data().correo}</td>
         <td>${doc.data().telefono}</td>
      </tr>
      
      `
        });
    })

}





//       <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/8.8.0/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->

// <script>
//   // Your web app's Firebase configuration
//   var firebaseConfig = {
//     apiKey: "AIzaSyC79qTU7866s9lTSz4PzD4WliqVjrMaH64",
//     authDomain: "prueba-d3802.firebaseapp.com",
//     projectId: "prueba-d3802",
//     storageBucket: "prueba-d3802.appspot.com",
//     messagingSenderId: "323601035406",
//     appId: "1:323601035406:web:4d767279e17dfd4ff659df"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
// </script>
