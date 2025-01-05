import React from 'react';
import { useNavigate } from 'react-router-dom';
import { firee } from '../../Constant';


const FullFirebase = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Background Video or Image */}
      <div className="absolute inset-0 z-0">
        {/* Background Video */}
        {/* <video
          className="w-full h-full object-cover"
          src="path-to-your-video.mp4"
          autoPlay
          loop
          muted
        ></video> */}

        {/* Or Background Image (uncomment to use) */}
        <img
          className="w-full h-full object-cover"
          src={firee}
          alt="Background"
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full">
        <h1 className="text-center text-white text-5xl mb-16">
          Welcome to Firebase
        </h1>
        <div className="flex flex-row">
          <button
            className="bg-slate-200 text-red-600 mr-5 p-3 text-lg font-bold"
            onClick={() => navigate('/realtimedatabse')}
          >
            Realtime Database
          </button>
          <button
            className="bg-slate-200 text-red-600 p-3 text-lg font-bold"
            onClick={() => navigate('/Auth')}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default FullFirebase;
