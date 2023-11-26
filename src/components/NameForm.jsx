import React, { useState } from "react";
import { useCookieContext } from "../context/Context";

const NameForm = ({ onSubmit }) => {
  const { playerName, updatePlayerName } = useCookieContext();
  const [submitted, setSubmitted] = useState(!!playerName);
  const [error, setError] = useState(false);

  const handleNameChange = (event) => {
    updatePlayerName(event.target.value);
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!playerName.trim()) {
      setError(true);
      return;
    }

    setSubmitted(true);
    if (onSubmit) {
      onSubmit();
    }
  };

  const handleChangeName = () => {
    setSubmitted(false);
    setError(false);
  };

  return (
    <div className="mb-8">
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col">
            {" "}
            <label htmlFor="playerName" className="text-lg text-gray-300 mr-2">
              Enter your name:
            </label>
            <input
              type="text"
              id="playerName"
              className={`px-4 py-2 mt-2 mx-32 mb-4 bg-gray-700 text-white rounded-md 
                          focus:outline-none focus:ring focus:border-blue-300 
                          ${error ? "border-red-500" : ""}`}
              value={playerName}
              onChange={handleNameChange}
            />
            {error && (
              <p className="text-red-500">Please enter a valid name.</p>
            )}
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md 
                       hover:bg-blue-600 focus:outline-none focus:ring 
                       focus:border-blue-300 mt-2"
          >
            Set Name
          </button>
        </form>
      ) : (
        playerName && (
          <div>
            <h1 className="text-white mt-2 text-xl">
              Welcome, <span className="font-bold">{playerName}!</span>
            </h1>
            <button
              onClick={handleChangeName}
              className="text-blue-500 mt-2 cursor-pointer"
            >
              Change Name
            </button>
          </div>
        )
      )}
    </div>
  );
};

export default NameForm;
