import React, { useState, useEffect } from 'react';

const Task = () => {
  const [inptask, setinptask] = useState('');
  const [showinp, setshowinp] = useState([]);
  const [editpartcular, seteditparticuler] = useState(null);

  // Load tasks from local storage on component mount
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setshowinp(storedTasks);
    }
  }, []);

  // Save tasks to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(showinp));
  }, [showinp]);

  const checkfun = (e) => {
    setinptask(e.target.value);
  };

  const Display = () => {
    if (editpartcular !== null) {
      setshowinp((pre) =>
        pre.map((Element, index) =>
          index === editpartcular ? inptask : Element
        )
      );
      seteditparticuler(null);
    } else {
      setshowinp((pre) => [...pre, inptask]);
    }
    setinptask('');
  };

  const Delete = (del) => {
    setshowinp((pre) => pre.filter((_, index) => index !== del));
  };

  const Edit = (ele, index) => {
    setinptask(ele);
    seteditparticuler(index);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <input
          type="text"
          onChange={checkfun}
          value={inptask}
          placeholder="Write task"
          className="mb-4 w-64 p-2 border border-gray-300 rounded shadow focus:outline-none focus:ring focus:ring-blue-300"
        />
        <button
          className="mb-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700"
          onClick={Display}
        >
          {editpartcular !== null ? 'Update Task' : 'Add Task'}
        </button>

        {showinp &&
          showinp.map((Element, index) => (
            <div
              key={index}
              className="mb-4 p-4 bg-white rounded shadow border border-gray-200"
            >
              <p className="flex justify-between items-center text-gray-700 px-4 ">
                {Element}
                <span className="flex space-x-2">
                  <button
                    onClick={() => Delete(index)}
                    className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 active:bg-red-500"
                  >
                    Del
                  </button>
                  <button
                    className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 active:bg-orange-500"
                    onClick={() => Edit(Element, index)}
                  >
                    Edit
                  </button>
                </span>
              </p>
            </div>
          ))}
      </div>
    </>
  );
};

export default Task;