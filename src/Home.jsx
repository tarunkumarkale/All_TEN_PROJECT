import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import PROJECTS from "./Constant";
import Card from "./Components/Cards/Cards";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", offset: 100 });
  }, []);


  console.log(PROJECTS[0])
  return (
    <div className="w-full min-h-screen p-6 relative">
      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

      {/* Content Section */}
      <div className="relative z-10">
        <h1
          className="text-3xl uppercase font-extrabold text-center text-red-500 mb-4  "
          aria-label="Project Gallery Header"
        >
          Welcome to My Personal Project Gallery
        </h1>
        <h4 className="text-lg text-center text-white mb-6">
          Here you can access all my personal projects and play with them
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS && PROJECTS.length > 0 ? (
            PROJECTS.map((element, index) => (
              <Card
                key={index}
                name={element.projectname}
                btn={element.linkofproject}
                image={element.image}
              />
            ))
          ) : (
            <p className="text-white text-center col-span-full">
              No projects available. Check back later!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;