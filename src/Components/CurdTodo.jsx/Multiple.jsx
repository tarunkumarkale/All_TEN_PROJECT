import React, { useState } from 'react';

const Multiple = () => {
  const OLD_task = [
    { Task: 'brush', Done: true },
    { Task: 'drink tea', Done: true }
  ];

  const [inpdata, setinpdata] = useState(OLD_task);
  const [editvalue, seteditvalue] = useState(null);
  const [formData, setformData] = useState({ Task: '', Done: '' });

  const writeinp = (e) => {
    const { name, value } = e.target;
    setformData((prev) => ({ ...prev, [name]: value }));
  };

  const addOrEditTask = (e) => {
    e.preventDefault();
    if (editvalue !== null) {
      setinpdata((prev) =>
        prev.map((element, index) =>
          index === editvalue ? { ...formData } : element
        )
      );
      seteditvalue(null);
    } else {
      setinpdata((prev) => [...prev, { ...formData }]);
    }
    setformData({ Task: '', Done: '' });
  };

  const edit = (element, index) => {
    setformData({ Task: element.Task, Done: element.Done });
    seteditvalue(index);
  };

  const trash = (i) => {
    setinpdata((prev) => prev.filter((_, index) => index !== i));
  };

  return (
    <div>
      <form onSubmit={addOrEditTask}>
        <input
          type="text"
          name="Task"
          onChange={writeinp}
          value={formData.Task}
          placeholder="Write your task"
        />
        <input
          type="text"
          name="Done"
          onChange={writeinp}
          value={formData.Done}
          placeholder="Done or not"
        />
        <button type="submit">{editvalue !== null ? 'Update Task' : 'Add Task'}</button>
      </form>
      <div>
        {inpdata.map((element, index) => (
          <div key={index}>
            {element.Task} - {element.Done ? 'Done' : 'Not Done'}
            <button onClick={() => edit(element, index)}>Edit</button>
            <button onClick={() => trash(index)}>Trash</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Multiple;
