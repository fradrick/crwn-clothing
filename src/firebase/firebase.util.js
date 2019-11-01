import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyCw7a0xlIr4LZjpjo8nZe9A_PpWOhcH-Z4",
    authDomain: "crwn-db-5b542.firebaseapp.com",
    databaseURL: "https://crwn-db-5b542.firebaseio.com",
    projectId: "crwn-db-5b542",
    storageBucket: "crwn-db-5b542.appspot.com",
    messagingSenderId: "352706530254",
    appId: "1:352706530254:web:06d6053b67fc6cb1f3799f",
    measurementId: "G-H3KMG6W892"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestone = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
