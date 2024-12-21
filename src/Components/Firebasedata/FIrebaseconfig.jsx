import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDa5V0I9zIvw4flpTJ8e4RRzZBJcWTNC2s",
  authDomain: "auth-f9f2e.firebaseapp.com",
  projectId: "auth-f9f2e",
  storageBucket: "auth-f9f2e.appspot.com",
  messagingSenderId: "337319488284",
  appId: "1:337319488284:web:b2aac4708b0f7b9d6568d9",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firestore
// export const db = getFirestore(app);
