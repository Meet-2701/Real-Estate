// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-15177.firebaseapp.com",
  projectId: "mern-estate-15177",
  storageBucket: "mern-estate-15177.appspot.com",
  messagingSenderId: "1007955461881",
  appId: "1:1007955461881:web:bc4c20f0feac8216c1c428"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// 
