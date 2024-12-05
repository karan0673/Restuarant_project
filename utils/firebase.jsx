// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4zcg39n1NyuNcntbaPq-bR2o432-ZwEo",
  authDomain: "restaurant-store-d53de.firebaseapp.com",
  projectId: "restaurant-store-d53de",
  storageBucket: "restaurant-store-d53de.firebasestorage.app",
  messagingSenderId: "85658124746",
  appId: "1:85658124746:web:70c96502ea34cbbe720f33",
  measurementId: "G-HL2PGYXLS2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);