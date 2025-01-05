// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"; // Import getDatabase for Realtime Database

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWiPq-po_2Bv3Y1Ui4eyHq9x5dtN9c0lI",
  authDomain: "allprojects-2c549.firebaseapp.com",
  projectId: "allprojects-2c549",
  storageBucket: "allprojects-2c549.firebasestorage.app",
  messagingSenderId: "313060685389",
  appId: "1:313060685389:web:a084c41463272bd4ff8e04",
  databaseURL: "https://allprojects-2c549-default-rtdb.firebaseio.com" // Corrected key name to databaseURL
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database
export const db = getDatabase(app); // Use getDatabase for Realtime Database
