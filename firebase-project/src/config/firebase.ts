// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// import dotenv from 'dotenv'
// dotenv.config()
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5-wPAbYFGsii2PQWQ1fyDGs0ur8i4EJQ",
  authDomain: "react-firebase-f3d2a.firebaseapp.com",
  projectId: "react-firebase-f3d2a",
  storageBucket: "react-firebase-f3d2a.appspot.com",
  messagingSenderId: "93690537601",
  appId: "1:93690537601:web:ad0ce8e0d90fe3ecad8f80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();