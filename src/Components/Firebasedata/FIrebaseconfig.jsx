// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDa5V0I9zIvw4flpTJ8e4RRzZBJcWTNC2s",
  authDomain: "auth-f9f2e.firebaseapp.com",
  projectId: "auth-f9f2e",
  storageBucket: "auth-f9f2e.appspot.com", // Corrected to .appspot.com
  messagingSenderId: "337319488284",
  appId: "1:337319488284:web:b2aac4708b0f7b9d6568d9",
  databaseURL: "https://auth-f9f2e-default-rtdb.firebaseio.com", // Removed ': null'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
