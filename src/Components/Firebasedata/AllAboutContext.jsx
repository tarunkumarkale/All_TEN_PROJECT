// Importing required functions from Firebase SDK
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import { createContext, useContext } from "react";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWiPq-po_2Bv3Y1Ui4eyHq9x5dtN9c0lI",
  authDomain: "allprojects-2c549.firebaseapp.com",
  projectId: "allprojects-2c549",
  storageBucket: "allprojects-2c549.firebasestorage.app",
  messagingSenderId: "313060685389",
  appId: "1:313060685389:web:a084c41463272bd4ff8e04",
  databaseURL: "https://allprojects-2c549-default-rtdb.firebaseio.com", // Ensure there are no extra spaces here
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database
const db = getDatabase(app);

// Create Context
export const FirebaseContext = createContext(null);

// GlobalContext component
export const GlobalContext = ({ children }) => {
  // Function to update Realtime Database with user details
  const Realtimeupdate = (name, biodata) => {
    if (!name || !biodata) {
      console.error("Name and biodata are required!");
      return;
    }
    // Ensure the path in the database is correct
    set(ref(db, "users/Details"), {
      username: name,
      details: biodata,
    })
      .then(() => {
        console.log("Data written successfully!");
      })
      .catch((error) => {
        console.error("Error writing data:", error);
      });
  };

  return (
    <FirebaseContext.Provider value={{ Realtimeupdate }}>
      {children}
    </FirebaseContext.Provider>
  );
};

// Custom hook to use Firebase context
export const useFiresbaseAllContext = () => {
  const Firebseusecontext = useContext(FirebaseContext);
  if (!Firebseusecontext) {
    console.log("Firebase context not available");
  }
  return Firebseusecontext;
};
