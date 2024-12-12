import React from "react";
import PROJECTS from "./Constant";
// Assuming PROJECTS is an array of objects
import Card from './Components/Cards/Cards'

const Home = () => {
  return (
    <div className="w-full max-h-screen">
      <h1 className="uppercase font-extrabold text-center">
        Welcome to my personal project gallery
      </h1>
      <h4 className="text-center">
        Here you can access all my personal projects and play with them
      </h4>
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
  );
};

export default Home;
