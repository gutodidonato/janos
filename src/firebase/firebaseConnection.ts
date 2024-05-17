// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/database';
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword  } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDzQ5M2kisl20rUvWYK1p2JBblZbIJZJWQ",
  authDomain: "jannos-22298.firebaseapp.com",
  databaseURL: "https://jannos-22298-default-rtdb.firebaseio.com",
  projectId: "jannos-22298",
  storageBucket: "jannos-22298.appspot.com",
  messagingSenderId: "1060561872153",
  appId: "1:1060561872153:web:3d71baa694d91f093dd188"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword  };