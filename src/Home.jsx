import React from "react";
import PROJECTS from "./Constant";
// Assuming PROJECTS is an array of objects
import Card from './Components/Cards/Cards'

const Home = () => {
  return (
    <div className="w-full max-h-screen p-6">
      <h1 className="uppercase font-extrabold text-center mb-4">
        Welcome to my personal project gallery
      </h1>
      <h4 className="text-center mb-6">
        Here you can access all my personal projects and play with them
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Render Card components for each project */}
        {PROJECTS.map((element, index) => (
          <Card
            key={index}
            name={element.projectname}
            btn={element.linkofproject} // Link of the project
            image={element.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
