import React, { useState } from "react";
import Delete from './delete'

const Chatbot = () => {
  const [input, setInput] = useState(""); // Renamed `inp` to `input`
  const [display, setDisplay] = useState([]);
  const [editIndex, setEditIndex] = useState(null); // Renamed `editbtn` to `editIndex`

  // Handles input change and editing
  const handleInputChange = (e) => {
    const data = e.target.value;
    setInput(data);
  };

  // Adds or edits a display item
  const handleAddOrEdit = () => {
    if (editIndex !== null) {
      setDisplay((prev) =>
        prev.map((item, index) => (index === editIndex ? input : item))
      );
      setEditIndex(null); // Reset edit mode
    } else {
      setDisplay((prev) => [...prev, input]);
    }
    setInput(""); // Clear the input
  };

  // Deletes an item
  const handleDelete = (index) => {
    setDisplay((prev) => prev.filter((_, i) => i !== index));
  };

  // Edits an item
  const handleEdit = (index) => {
    setInput(display[index]);
    setEditIndex(index);
  };

  return (
    <div>
      <input
        type="text"
        className="bg-green-300"
        name="fname"
        onChange={handleInputChange}
        value={input}
        placeholder="Enter your name"
      />
      <button onClick={handleAddOrEdit}>
        {editIndex !== null ? "Update" : "Add"}
      </button>

      <p>
        {display.map((item, index) => (
          <Delete
            key={index}
            Editbtn={() => handleEdit(index)}
            Delbtn={() => handleDelete(index)}
            data={item}
          />
        ))}
      </p>
    </div>
  );
};

export default Chatbot;
