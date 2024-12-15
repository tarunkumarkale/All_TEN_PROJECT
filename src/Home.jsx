


import React, { useEffect } from "react";
import PROJECTS from "./Constant";
import Card from './Components/Cards/Cards';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", offset: 100 });
  }, []);

  return (
    <div
      className="w-full min-h-screen p-6 relative"
      style={{
        backgroundImage: 'url("https://source.unsplash.com/random/1600x900?nature,abstract")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content Section */}
      <div className="relative z-10">
        <h1 className="text-3xl uppercase font-extrabold text-center text-white mb-4">
          Welcome to My Personal Project Gallery
        </h1>
        <h4 className="text-lg text-center text-white mb-6">
          Here you can access all my personal projects and play with them
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((element, index) => (
            <Card
              key={index}
              name={element.projectname}
              btn={element.linkofproject}
              image={element.image}
              animation="fade-up" // AOS animation for cards
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
