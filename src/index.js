import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCxXve-AMDfN1_3Hr5AUtT6kqd95SvqdJI",
    authDomain: "react-demo-for-me.firebaseapp.com",
    databaseURL: "https://react-demo-for-me.firebaseio.com",
    projectId: "react-demo-for-me",
    storageBucket: "react-demo-for-me.appspot.com",
    messagingSenderId: "441146723455",
    appId: "1:441146723455:web:33c73af14353739d4fc34a",
    measurementId: "G-DZNLTXHWMN"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

const signedIn = document.querySelector("#signedIn");
const signedOut = document.querySelector("#signedOut");

const signInBtn = document.querySelector(".sign-in-with-google");
const signOutBtn = document.querySelector(".sign-out");

auth.onAuthStateChanged(user => {
    if(user){
        signedIn.hidden = false;
        signedOut.hidden = true;
    }else {
        signedIn.hidden = true;
        signedOut.hidden = false;
    }
})

signOutBtn.onClick = async () => {
    await auth.signOut();
}
signInBtn.onClick = async () => {
    const provider = firebase.auth.GoogleAuthProvider();
    await auth.signInWithPopup(provider);
}