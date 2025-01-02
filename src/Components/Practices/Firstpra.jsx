import React, { useEffect, useState } from 'react';

const Firstpra = () => {
  const getHour = new Date().getHours();
  const getStringTime = new Date().toLocaleTimeString();

  const [timershow, settimershow] = useState(getHour);
  const [timercolor, settimercolor] = useState('');
  const [timestring, settimestring] = useState('');

  useEffect(() => {
    const taketime = setInterval(() => {
      if (timershow >= 0 && timershow < 12) {
        settimercolor('text-red-500'); // Tailwind class for red text
        settimestring(getStringTime);
      } else if (timershow >= 12 && timershow <= 18) {
        settimercolor('text-green-500'); // Tailwind class for green text
        settimestring(getStringTime);
      } else {
        settimercolor('text-black'); // Tailwind class for black text
        settimestring(getStringTime);
      }
    }, 1000);
    return () => clearInterval(taketime);
  }, [timershow,timestring]);

  return (
    <div className="relative h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 overflow-hidden">
      {/* Floating shapes */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white opacity-20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-yellow-300 opacity-30 rounded-full blur-2xl animate-bounce"></div>
      <div className="absolute top-1/3 left-1/2 w-48 h-48 bg-blue-500 opacity-20 rounded-full blur-xl animate-spin-slow"></div>

      {/* Centered content */}
      <div className="flex flex-col items-center justify-center h-full text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
          Welcome to the Future
        </h1>
        <p className="text-lg md:text-2xl text-white opacity-90 mt-4">
          A dynamic and responsive design made with Tailwind CSS & React
        </p>
        <button
          className={`${timercolor} mt-6 px-6 py-3 bg-white font-medium rounded-lg shadow-lg hover:shadow-xl hover:bg-pink-100 transition`}
        >
          {timestring}
        </button>
      </div>
    </div>
  );
};

export default Firstpra;
