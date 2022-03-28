// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhJBsrWGTxVjY7QX05i3koTromEMDH6KM",
  authDomain: "tiendacom-ar.firebaseapp.com",
  projectId: "tiendacom-ar",
  storageBucket: "tiendacom-ar.appspot.com",
  messagingSenderId: "304127496322",
  appId: "1:304127496322:web:b27c2aab5fe04991fba49b",
  measurementId: "G-VPRZS2M3TJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export  { app, db}