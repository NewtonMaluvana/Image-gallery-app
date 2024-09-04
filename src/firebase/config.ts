// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAv8aXaN9NIrjRvURPZDLOt2vH44hpESEk",
  authDomain: "gallery-app-fa89e.firebaseapp.com",
  projectId: "gallery-app-fa89e",
  storageBucket: "gallery-app-fa89e.appspot.com",
  messagingSenderId: "631937639193",
  appId: "1:631937639193:web:37e330cdb251485ed15b88",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
