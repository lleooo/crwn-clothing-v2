import {initializeApp} from "firebase/app";
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAAF7_j-0dHzTDwYdQhS0cvQ1b2iAi-BVg",
    authDomain: "react-clothing-db-a0093.firebaseapp.com",
    projectId: "react-clothing-db-a0093",
    storageBucket: "react-clothing-db-a0093.appspot.com",
    messagingSenderId: "112045815714",
    appId: "1:112045815714:web:34dcbbcdc43485aa13a4fb"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);