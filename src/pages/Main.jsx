import React from "react";
import { Link } from "react-router-dom";
import { IoPerson } from "react-icons/io5";
import { MdOutlinePersonalVideo } from "react-icons/md";
import NameForm from "../components/NameForm";

const Main = () => {
  return (
    <div className="flex flex-col h-screen items-center justify-center m-2">
      <div className="text-center text-white p-6 bg-opacity-75 bg-gray-800 rounded-md shadow-lg md:p-12">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-6">
          Lottokeeper
        </h1>
        <NameForm />
        <div className="flex flex-col md:flex-row justify-center items-center flex-wrap mb-8">
          <Link
            to="/Lottokeeper"
            className="mb-4 md:mb-0 md:mr-2 w-full md:w-auto px-4 md:px-8 py-3 md:py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md transition duration-300 flex items-center"
          >
            <IoPerson className="mr-2" />
            Play as Player
          </Link>
          <Link
            to="/Lottooperator"
            className="w-full md:w-auto px-4 md:px-8 py-3 md:py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-md transition duration-300 flex items-center"
          >
            <MdOutlinePersonalVideo className="mr-2" />
            Play as Operator
          </Link>
        </div>
        <p className="text-sm md:text-lg text-gray-300">
          Choose your role and experience the thrill of online Lotto. Are you
          ready to win big?
        </p>
      </div>
    </div>
  );
};

export default Main;
