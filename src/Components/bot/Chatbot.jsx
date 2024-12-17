// React aur Firebase se zaroori functions import kar rahe hain
import React, { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore"; // Firebase Firestore se functions import
import { useFirebaseContext } from "../Firebasedata/Context"; // Apne Firebase setup ka context import kar rahe hain

// Chatbot component
const Chatbot = () => {
  // Firebase context se login status aur Firestore database ko le rahe hain
  const { islogins, db } = useFirebaseContext();

  // State variables (messages, input aur user ka status)
  const [messages, setMessages] = useState([]); // Sabhi chat messages ko store karta hai
  const [input, setInput] = useState(""); // User ka input store karta hai
  const [user, setUser] = useState(null); // User ka status (logged-in ya nahi)

  // User ka login status check kar rahe hain
  useEffect(() => {
    if (islogins) {
      setUser(true); // Agar user login hai, toh user state ko true set kar rahe hain
    } else {
      console.error("User not logged in. Redirect or handle as necessary.");
    }
  }, [islogins]);

  // Messages ko real-time mein Firebase se fetch kar rahe hain
  useEffect(() => {
    // Firestore se messages ko chronological order mein fetch karne ka query banate hain
    const q = query(collection(db, "messages"), orderBy("createdAt"));

    // Jab messages mein koi change hota hai, tab onSnapshot se usse update karte hain
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(
        snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })) // Firestore ke documents ko readable format mein convert karte hain
      );
    });

    // Cleanup function (jab component remove ho, tab subscription ko hata dena)
    return () => unsubscribe();
  }, [db]);

  // Message bhejne ka function
  const sendMessage = async () => {
    if (!input.trim()) return; // Agar input empty hai, toh kuch nahi karna

    // User ka message Firestore mein save karte hain
    await addDoc(collection(db, "messages"), {
      text: input, // User ka message
      userId: user?.uid || "unknown", // User ka UID ya agar undefined ho toh "unknown"
      createdAt: serverTimestamp(), // Firebase ka timestamp
    });

    // Bot ka reply generate kar rahe hain based on user ke message
    const botReply = getBotResponse(input);
    if (botReply) {
      // Bot ka reply Firestore mein save karte hain
      await addDoc(collection(db, "messages"), {
        text: botReply,
        userId: "bot", // Bot ka userId
        createdAt: serverTimestamp(), // Firebase ka timestamp
      });
    }

    setInput(""); // Input field ko clear karte hain
  };

  // Bot ka response decide karne ka simple logic
  const getBotResponse = (message) => {
    if (message.toLowerCase().includes("hello")) {
      return `Hello ${user?.displayName || "there"}!`; // Agar message mein "hello" hai, toh personalized greeting
    }
    if (message.toLowerCase().includes("help")) {
      return "Sure! Let me know your question."; // Agar message mein "help" hai, toh help offer karna
    }
    return "Sorry, I didn't understand that. Can you try rephrasing?"; // Default response agar bot ko samajh na aaye
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* User ka login status dikhana */}
      <div className="p-4 bg-gray-200">
        {user ? `Logged in as: ${user.displayName || "Anonymous"}` : "Not logged in"}
      </div>

      {/* Messages ko show karne ka area */}
      <div className="flex-grow p-4 overflow-y-auto">
        {messages.map((msg) => (
          <div
            key={msg.id} // Har message ke liye unique key
            className={`p-2 my-2 rounded ${
              msg.userId === "bot" ? "bg-blue-200 text-left" : "bg-green-200 text-right"
            }`} // Bot aur user messages ko alag style dena
          >
            {msg.text} {/* Message ka text */}
          </div>
        ))}
      </div>

      {/* Input field aur send button */}
      <div className="p-4 flex bg-white border-t">
        <input
          type="text" // Text input field
          className="flex-grow p-2 border rounded focus:outline-none"
          placeholder="Type your message..." // Placeholder text
          value={input} // Input ka value
          onChange={(e) => setInput(e.target.value)} // Input mein koi change hote hi state update hota hai
        />
        <button
          onClick={sendMessage} // Button click par sendMessage function ko call karte hain
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
