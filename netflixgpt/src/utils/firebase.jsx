// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYZAmMpH_Yu14XYItFsTIWxrBjaKpIqHs",
  authDomain: "netflixgpt-90adf.firebaseapp.com",
  projectId: "netflixgpt-90adf",
  storageBucket: "netflixgpt-90adf.firebasestorage.app",
  messagingSenderId: "385197579524",
  appId: "1:385197579524:web:2d53d9da1380b559418451",
  measurementId: "G-SKLGVRYTYF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

 export const auth = getAuth();