import React from "react";
import useGameLogic from "../../hooks/player/useGameLogic";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

const Lottokeeper = () => {
  const {
    playerName,
    playerBalance,
    selectedNumbers,
    ticketList,
    generatedNumbers,
    hasResult,
    handleSelectNumber,
    handleGenerateNumbers,
    handleNewTicket,
    handleRestartGame, // New function for restarting the game
  } = useGameLogic();

  const totalPrize = ticketList.reduce(
    (total, ticket) => total + ticket.prize,
    0
  );

  return (
    <div className="container mx-auto p-4 bg-white m-6 rounded-lg">
      <div className="flex flex-col items-center mb-5">
        <h2 className="text-3xl font-extrabold mb-4 text-indigo-700">
          Player Dashboard
        </h2>
        <div className="bg-white p-6 rounded-md shadow-md w-full">
          <p className="text-lg mb-2">
            <span className="font-semibold text-gray-700">Player:</span>{" "}
            {playerName}
          </p>
          <p className="text-lg mb-2 flex items-center">
            <span className="font-semibold text-gray-700">Balance:</span>
            <span className="ml-1 text-green-500">{playerBalance}$</span>
            <RiMoneyDollarCircleFill className="ml-1 text-green-500" />
          </p>
          <p className="text-lg mb-2 flex items-center">
            <span className="font-semibold text-gray-700">Prize:</span>
            <span className="ml-1 text-yellow-500">{totalPrize}</span>
            <RiMoneyDollarCircleFill className="ml-1 text-yellow-500" />
          </p>
          <p className="text-lg mb-2 flex items-center">
            <span className="font-semibold text-gray-700">
              Selected Numbers:
            </span>{" "}
            <span className="text-indigo-500">
              {selectedNumbers.join(", ")}
            </span>
          </p>
          <div className="text-lg">
            <span className="font-semibold text-gray-700">
              Winning Numbers:
            </span>
            {hasResult && (
              <div className="flex flex-wrap justify-left mt-4">
                {generatedNumbers.map((num) => (
                  <div
                    key={num}
                    className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-2 my-2 border-2 border-blue-600 hover:bg-blue-700 hover:text-yellow-300 transition duration-300 ease-in-out"
                  >
                    {num}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-6 gap-4">
        {[...Array(39).keys()].map((num) => (
          <button
            key={num + 1}
            className={`border p-2 rounded ${
              selectedNumbers.includes(num + 1) ? "bg-blue-500 text-white" : ""
            }`}
            onClick={() => handleSelectNumber(num + 1)}
          >
            {num + 1}
          </button>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button
          className="bg-green-500 text-white p-2 rounded mr-4"
          onClick={handleGenerateNumbers}
        >
          Generate Numbers
        </button>
        {hasResult && (
          <button
            className="bg-blue-500 text-white p-2 rounded mr-4"
            onClick={handleNewTicket}
          >
            New Ticket
          </button>
        )}
        {playerBalance === 0 && (
          <button
            className="bg-red-500 text-white p-2 rounded"
            onClick={handleRestartGame}
          >
            Restart Game
          </button>
        )}
      </div>
      <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-md overflow-x-auto">
        <h2 className="text-3xl font-bold mb-4 text-center text-yellow-600">
          Ticket List
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-2 px-4 border-b">Ticket Number</th>
                <th className="py-2 px-4 border-b">Selected Numbers</th>
                <th className="py-2 px-4 border-b">Matching Numbers</th>
                <th className="py-2 px-4 border-b">Prize</th>
              </tr>
            </thead>
            <tbody>
              {ticketList.map((ticket, index) => (
                <tr key={index} className="border-b text-center">
                  <td className="py-2 px-4">{index + 1}</td>
                  <td className="py-2 px-4">
                    <div className="flex justify-center">
                      {ticket.numbers.map((num, i) => (
                        <div
                          key={i}
                          className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mx-1 border-2 border-blue-600 hover:bg-blue-700 hover:text-yellow-300 transition duration-300 ease-in-out"
                        >
                          {num}
                        </div>
                      ))}
                    </div>
                  </td>
                  <td className="py-2 px-4 text-green-500">
                    {ticket.matchingNumbers}
                  </td>
                  <td className="py-2 px-4 text-orange-500">{ticket.prize}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Lottokeeper;
