import { createContext, useContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "./Firebaseconfig";

// Context for Firebase
export const FirebaseContext = createContext(null);

// Global Context Provider
export const GlobalContext = ({ children }) => {
  const [islogins, setIsLogins] = useState(false); // State for login status
  const auth = getAuth(app);
  const db=getDatabase(app)
  useEffect(() => {
    // Check auth state
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLogins(true); // User is logged in
      } else {
        setIsLogins(false); // User is not logged in
      }
    });

    return () => unsubscribe(); // Cleanup listener
  }, [auth]);

  // Sign-Up Function
  const Signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Sign-In Function
  const SignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  return (
    <FirebaseContext.Provider value={{ Signup, SignIn, islogins,db }}>
      {children}
    </FirebaseContext.Provider>
  );
};

// Hook to use Firebase context
export const useFirebaseContext = () => {
  const context = useContext(FirebaseContext);
  if (!context) {
    throw new Error("useFirebaseContext must be used within a GlobalContext");
  }
  return context;
};
