import React, { useState } from "react";
import { useCookieContext } from "../context/Context";

const NameForm = ({ onSubmit }) => {
  const { playerName, updatePlayerName } = useCookieContext();
  const [submitted, setSubmitted] = useState(!!playerName);

  const handleNameChange = (event) => {
    updatePlayerName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    if (onSubmit) {
      onSubmit();
    }
  };

  return (
    <div className="mb-8">
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <label htmlFor="playerName" className="text-lg text-gray-300 mr-2">
            Enter your name:
          </label>
          <input
            type="text"
            id="playerName"
            className="px-4 py-2 mt-2 mb-4 bg-gray-700 text-white rounded-md focus:outline-none focus:ring focus:border-blue-300"
            value={playerName}
            onChange={handleNameChange}
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 ml-2"
          >
            Set Name
          </button>
        </form>
      ) : (
        playerName && (
          <h1 className="text-white mt-2 text-xl">
            Welcome, <span className="font-bold">{playerName}!</span>
          </h1>
        )
      )}
    </div>
  );
};

export default NameForm;
