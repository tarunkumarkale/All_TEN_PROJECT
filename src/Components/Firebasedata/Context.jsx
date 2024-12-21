import { createContext, useContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
// import { db } from "./Firebaseconfig";
import { app } from "./Firebaseconfig";

// Context for Firebase
export const FirebaseContext = createContext(null);
//getdatabase
// Global Context Provider
export const GlobalContext = ({ children }) => {
  const [islogins, setIsLogins] = useState(false); // State for login status
  const auth = getAuth(app);

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
    <FirebaseContext.Provider value={{ Signup, SignIn, islogins }}>
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



// import { createContext, useContext, useEffect, useState } from "react";
// import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
// import { getDatabase } from "firebase/database";
// import { app } from "./Firebaseconfig";

// // Context for Firebase
// export const FirebaseContext = createContext(null);

// // Global Context Provider
// export const GlobalContext = ({ children }) => {
//   const [islogins, setIsLogins] = useState(false); // State for login status
//   const auth = getAuth(app);
//   const db = getDatabase(app); // Database instance

//   useEffect(() => {
//     // Check auth state
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       setIsLogins(!!user); // Update login status
//     });

//     return () => unsubscribe(); // Cleanup listener
//   }, [auth]);

//   // Sign-Up Function
//   const Signup = (email, password) => {
//     return createUserWithEmailAndPassword(auth, email, password);
//   };

//   // Sign-In Function
//   const SignIn = (email, password) => {
//     return signInWithEmailAndPassword(auth, email, password);
//   };

//   return (
//     <FirebaseContext.Provider value={{ Signup, SignIn, islogins, db }}>
//       {children}
//     </FirebaseContext.Provider>
//   );
// };

// // Hook to use Firebase context
// export const useFirebaseContext = () => {
//   const context = useContext(FirebaseContext);
//   if (!context) {
//     throw new Error("useFirebaseContext must be used within a GlobalContext");
//   }
//   return context;
// };



// import { createContext, useContext, useEffect, useState } from "react";
// import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import { app } from "./Firebaseconfig";

// export const FirebaseContext = createContext(null);

// export const GlobalContext = ({ children }) => {
//   const [islogins, setIsLogins] = useState(false);
//   const auth = getAuth(app);
//   const db = getFirestore(app);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       setIsLogins(!!user);
//     });

//     return () => unsubscribe();
//   }, [auth]);

//   const Signup = (email, password) => createUserWithEmailAndPassword(auth, email, password);

//   const SignIn = (email, password) => signInWithEmailAndPassword(auth, email, password);

//   return (
//     <FirebaseContext.Provider value={{ Signup, SignIn, islogins, db }}>
//       {children}
//     </FirebaseContext.Provider>
//   );
// };

// export const useFirebaseContext = () => {
//   const context = useContext(FirebaseContext);
//   if (!context) {
//     throw new Error("useFirebaseContext must be used within a GlobalContext");
//   }
//   return context;
// };
