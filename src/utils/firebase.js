// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";

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
// eslint-disable-next-line
const analytics = getAnalytics(app);


export const auth = getAuth();