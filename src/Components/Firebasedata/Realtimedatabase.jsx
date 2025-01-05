import React, { useState } from "react";
import { useFiresbaseAllContext } from "./AllAboutContext";


const RealtimeDatabase = () => {
  const [name, setName] = useState("");
  const [data, setData] = useState("");
  const { Realtimeupdate } = useFiresbaseAllContext();
console.log(Realtimeupdate)
  const handleNameChange = (e) => setName(e.target.value);
  const handleDataChange = (e) => setData(e.target.value);
  const handleSubmit = () => Realtimeupdate(name, data);

  return (
    <div>
      <input
        type="text"
        className="bg-green-400 rounded-lg w-50% items-center justify-center"
        onChange={handleNameChange}
        value={name}
      />
      <input
        type="text"
        className="bg-green-400 rounded-lg w-50% items-center justify-center"
        onChange={handleDataChange}
        value={data}
      />
      <button onClick={handleSubmit}>Click</button>
    </div>
  );
};

export default RealtimeDatabase;
