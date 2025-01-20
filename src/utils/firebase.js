// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLIE8pz8alWeP8FtEqIVOnO008R0Wu4og",
  authDomain: "climateconnect-inc.firebaseapp.com",
  projectId: "climateconnect-inc",
  storageBucket: "climateconnect-inc.firebasestorage.app",
  messagingSenderId: "597946367538",
  appId: "1:597946367538:web:2d8a1e395e091e1136462b",
  measurementId: "G-XFG2HDJ1HF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
