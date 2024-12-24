import React from 'react';
import { useParams } from 'react-router-dom';

const Direct = () => {
  const { userid } = useParams();
  console.log("userid from useParams:", userid); // Debugging log

  // Keep keys as strings for matching with useParams output
  const userdata = {
    "1": { name: "John", email: "john@exm.com" },
    "2": { name: "Jo", email: "jo@exm.com" },
    "3": { name: "O", email: "o@exm.com" }
  };

  // Access the correct user data
  const data = userdata[userid];

  return (
    <div>
      {data 
        ? `${data.name} and ${data.email}` 
        : "User not found"} {/* Default fallback */}
    </div>
  );
};

export default Direct;
