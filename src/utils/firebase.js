import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_CONFIG.apiKey,
  authDomain: process.env.REACT_APP_FIREBASE_CONFIG.authDomain,
  projectId: process.env.REACT_APP_FIREBASE_CONFIG.projectId,
  storageBucket: process.env.REACT_APP_FIREBASE_CONFIG.storageBucket,
  messagingSenderId: process.env.REACT_APP_FIREBASE_CONFIG.messagingSenderId,
  appId: process.env.REACT_APP_FIREBASE_CONFIG.appId,
  measurementId: process.env.REACT_APP_FIREBASE_CONFIG.measurementId
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

export  {app, db}