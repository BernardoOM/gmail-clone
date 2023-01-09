import { initializeApp } from "firebase/app"
import { getFirestore, serverTimestamp } from "firebase/firestore"
import {
    getAuth,
    createUserWithEmailAndPassword,
    updateProfile,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
} from "firebase/auth"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAThcI6IMSmTQWiLllPJ_knhDD0B5qnQ94",
    authDomain: "clone-93340.firebaseapp.com",
    projectId: "clone-93340",
    storageBucket: "clone-93340.appspot.com",
    messagingSenderId: "106481869437",
    appId: "1:106481869437:web:3d6ecb1c4d876db9494714",
    measurementId: "G-Z8FZV9V3FL",
}

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

function getServerTimestamp() {
    return serverTimestamp()
}

export {
    db,
    auth,
    provider,
    getServerTimestamp,
    createUserWithEmailAndPassword,
    updateProfile,
    signInWithEmailAndPassword,
}
