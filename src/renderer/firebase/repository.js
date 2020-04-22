// Configuración de Firebase

console.log("firebase", firebase)

// La siguiente variable guarda nuestra configuración de firebase los valores los obtenemos de las variables de entorno, recuerda crear el archivo variables.env 
var firebaseConfig = {
  apiKey: process.env.VUE_apiKey,
  authDomain: process.env.VUE_authDomain,
  databaseURL: process.env.VUE_databaseURL,
  projectId: process.env.VUE_projectId,
  storageBucket: process.env.VUE_storageBucket,
  messagingSenderId: process.env.VUE_messagingSenderId,
  appId: process.env.VUE_appId,
  measurementId: process.env.VUE_measurementId
}

// Iniciamos firebase
firebase.initializeApp(firebaseConfig)
firebase.analytics()

// Iniciamos la base de datos
var db = firebase.database();

export default{
  db
}
