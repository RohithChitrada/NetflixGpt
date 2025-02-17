// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBRrfonDLbnU6BKpO58HjI6RD5XR_Cqr8",
  authDomain: "netflixgpt-e991c.firebaseapp.com",
  projectId: "netflixgpt-e991c",
  storageBucket: "netflixgpt-e991c.firebasestorage.app",
  messagingSenderId: "195464613600",
  appId: "1:195464613600:web:793909777f7e187842ca85",
  measurementId: "G-ZP4RMPQZHE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);