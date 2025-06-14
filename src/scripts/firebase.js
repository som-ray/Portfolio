// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDgblu072-g6RNOfA6T6wFOeMWE33P46qY",
    authDomain: "devcat-6340a.firebaseapp.com",
    projectId: "devcat-6340a",
    storageBucket: "devcat-6340a.firebasestorage.app",
    messagingSenderId: "742386547233",
    appId: "1:742386547233:web:4dac87fabe2b8cccf38160",
    measurementId: "G-X56N45KF45"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export function loginWithGoogle() {
    signInWithPopup(auth, provider)
        .then(result => {
            const user = result.user;
            console.log(user)
            console.log(user.displayName);
        })
        .catch(error => {
            console.error(error.message);
        });
}
