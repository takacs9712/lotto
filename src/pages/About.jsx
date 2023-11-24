import React from "react";
import gameInfo from "../assets/gameInfo.json";

const About = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6 text-white">About the game</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-white">
          Game Specifications
        </h2>
        <ul className="list-disc ml-6 text-white">
          {gameInfo.specifications.map((spec, index) => (
            <li key={index}>{spec}</li>
          ))}
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-white">User Features</h2>
        <ul className="list-disc ml-6 text-white">
          {gameInfo.userFeatures.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-white">
          Operator Features
        </h2>
        <ul className="list-disc ml-6 text-white">
          {gameInfo.operatorFeatures.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-white">
          Enhanced Features
        </h2>
        <ul className="list-disc ml-6 text-white">
          {gameInfo.enhancedFeatures.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default About;
