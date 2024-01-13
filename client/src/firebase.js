
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-7366c.firebaseapp.com",
  projectId: "mern-estate-7366c",
  storageBucket: "mern-estate-7366c.appspot.com",
  messagingSenderId: "234879552255",
  appId: "1:234879552255:web:b5af8d73c878214f155aca"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);