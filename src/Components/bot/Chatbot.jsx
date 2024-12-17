import React, { useState, useEffect } from "react";

import { collection, addDoc, query, orderBy, onSnapshot, serverTimestamp } from "firebase/firestore";
import { useFirebaseContext } from "../Firebasedata/Context";

const Chatbot = () => {

    const  {islogins,db}=useFirebaseContext()
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [user, setUser] = useState(null); // State to track the logged-in user

  // Ensure only authenticated users can access
  useEffect(() => {
    if (islogins) {
      setUser(true);
    } else {
      console.error("User not logged in. Redirect or handle as necessary.");
    }
  }, []);

  // Fetch messages in real-time
  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("createdAt"));
    const unsubscribe = onSnapshot(q, (snapshot) =>
      setMessages(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
    );

    return () => unsubscribe();
  }, []);

  // Function to send a message
  const sendMessage = async () => {
    if (!input.trim()) return;

    // Save user message
    await addDoc(collection(db, "messages"), {
      text: input,
      userId: user?.uid || "unknown", // Use current user's UID or "unknown" if undefined
      createdAt: serverTimestamp(),
    });

    // Generate bot response
    const botReply = getBotResponse(input);
    if (botReply) {
      await addDoc(collection(db, "messages"), {
        text: botReply,
        userId: "bot",
        createdAt: serverTimestamp(),
      });
    }

    setInput("");
  };

  // Simple bot logic
  const getBotResponse = (message) => {
    if (message.toLowerCase().includes("hello")) return `Hello ${user?.displayName || "there"}!`;
    if (message.toLowerCase().includes("help")) return "Sure! Let me know your question.";
    return "Sorry, I didn't understand that. Can you try rephrasing?";
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="p-4 bg-gray-200">
        {/* Show user info */}
        {user ? `Logged in as: ${user.displayName || "Anonymous"}` : "Not logged in"}
      </div>

      <div className="flex-grow p-4 overflow-y-auto">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`p-2 my-2 rounded ${
              msg.userId === "bot" ? "bg-blue-200 text-left" : "bg-green-200 text-right"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className="p-4 flex bg-white border-t">
        <input
          type="text"
          className="flex-grow p-2 border rounded focus:outline-none"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={sendMessage}
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
