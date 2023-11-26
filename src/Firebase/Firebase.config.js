// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA2LCga2fA6TsEPhZ89XrSEoQpxGljNAPE",
    authDomain: "cozycomps-a12.firebaseapp.com",
    projectId: "cozycomps-a12",
    storageBucket: "cozycomps-a12.appspot.com",
    messagingSenderId: "926869754997",
    appId: "1:926869754997:web:ed268d66a4afbb8593d43c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;