import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCSfGCaPHWGsXTwtpZ-BDaj6mdEggWDABA",
    authDomain: "crown-db-bf52f.firebaseapp.com",
    databaseURL: "https://crown-db-bf52f.firebaseio.com",
    projectId: "crown-db-bf52f",
    storageBucket: "crown-db-bf52f.appspot.com",
    messagingSenderId: "587767509443",
    appId: "1:587767509443:web:ef651da1b102ab849d8d76",
    measurementId: "G-G2DCTDERYD"  
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;