import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import { IoPerson } from "react-icons/io5";
import { MdOutlinePersonalVideo } from "react-icons/md";
import NameForm from "../components/NameForm";

const Main = () => {
  const springProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = () => {
    setFormSubmitted(true);
  };

  return (
    <animated.div
      style={springProps}
      className="flex flex-col h-screen items-center justify-center m-2 text-white"
    >
      <div className="text-center p-6 md:p-12 bg-gray-800 rounded-md shadow-lg">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-blue-500">
          Lottokeeper
        </h1>
        <NameForm onSubmit={handleFormSubmit} />
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 mb-8">
          <Link
            to="/Lottokeeper"
            className={`w-full md:w-48 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md transition duration-300 flex items-center ${
              !formSubmitted ? "pointer-events-none opacity-50" : ""
            }`}
          >
            <IoPerson className="mr-2" />
            Play as Player
          </Link>
          <Link
            to="/Lottooperator"
            className={`w-full md:w-48 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-md transition duration-300 flex items-center ${
              !formSubmitted ? "pointer-events-none opacity-50" : ""
            }`}
          >
            <MdOutlinePersonalVideo className="mr-2" />
            Play as Operator
          </Link>
        </div>
        <p className="text-lg text-gray-300">
          Choose your role and experience the thrill of online Lotto. Are you
          ready to win big?
        </p>
      </div>
    </animated.div>
  );
};

export default Main;
