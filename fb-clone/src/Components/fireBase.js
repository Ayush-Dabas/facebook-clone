// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyARA-PbXR6GtALzWy_JpptTPY6S5BOK0w8",
    authDomain: "facebook-clone-c469a.firebaseapp.com",
    projectId: "facebook-clone-c469a",
    storageBucket: "facebook-clone-c469a.appspot.com",
    messagingSenderId: "825004609592",
    appId: "1:825004609592:web:9a973e09c16bc2ecf956cd",
    measurementId: "G-FNG0DKCMGD"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider };
  export default db;