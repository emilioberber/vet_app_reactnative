
// Import the functions you need from the SDKs you need
import * as firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBp0e3GoP6hUWxguHFw6AmNyH9cBGyN_G4",
    authDomain: "rnvetapp.firebaseapp.com",
    projectId: "rnvetapp",
    storageBucket: "rnvetapp.appspot.com",
    messagingSenderId: "1081044385929",
    appId: "1:1081044385929:web:3dbc81d482f7110d2b8658"
};

// Initialize Firebase
let app;
if(firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
} else{
    app = firebase.app()
}

const auth = firebase.auth()

export { auth };


/**************************/

/*
import firebase from 'firebase/compat/app'; // Importa la versión compatible (compat) de Firebase
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBp0e3GoP6hUWxguHFw6AmNyH9cBGyN_G4",
    authDomain: "rnvetapp.firebaseapp.com",
    projectId: "rnvetapp",
    storageBucket: "rnvetapp.appspot.com",
    messagingSenderId: "1081044385929",
    appId: "1:1081044385929:web:3dbc81d482f7110d2b8658"
};

// Inicializa Firebase con la configuración
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };
*/

/**************************/

/*
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

// Your Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyBp0e3GoP6hUWxguHFw6AmNyH9cBGyN_G4",
    authDomain: "rnvetapp.firebaseapp.com",
    projectId: "rnvetapp",
    storageBucket: "rnvetapp.appspot.com",
    messagingSenderId: "1081044385929",
    appId: "1:1081044385929:web:3dbc81d482f7110d2b8658"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Get Firebase Authentication and Database instances
const auth = getAuth(firebaseApp);
const db = getDatabase(firebaseApp);

export { auth, db };
*/
