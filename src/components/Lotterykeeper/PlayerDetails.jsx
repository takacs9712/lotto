import React from "react";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

const PlayerDetails = ({
  playerName,
  playerBalance,
  totalPrize,
  selectedNumbers,
  hasResult,
  generatedNumbers,
}) => {
  return (
    <div className="bg-gray-100 p-8 rounded-sm shadow-md w-full">
      <h2 className=" flex justify-center text-4xl font-extrabold mb-4 text-blue-700">
        Player Details
      </h2>
      <p className="text-xl mb-4 text-blue-800">
        <span className="font-semibold">Player:</span> {playerName}
      </p>
      <p className="text-xl mb-4 flex items-center text-blue-800">
        <span className="font-semibold">Balance:</span>
        <span className="ml-2 text-green-600">${playerBalance}</span>
        <RiMoneyDollarCircleFill className="ml-2 text-green-600" />
      </p>
      <p className="text-xl mb-4 flex items-center text-blue-800">
        <span className="font-semibold">Prize:</span>
        <span className="ml-2 text-yellow-600">${totalPrize}</span>
        <RiMoneyDollarCircleFill className="ml-2 text-yellow-600" />
      </p>
      <p className="text-xl mb-4 text-blue-800">
        <span className="font-semibold">Selected Numbers:</span>{" "}
        <span className="text-yellow-600">{selectedNumbers.join(", ")}</span>
      </p>
      {hasResult && (
        <div className="text-xl ">
          <div className="flex items-center mb-4">
            <span className="font-semibold text-blue-800 mr-2">
              Winning Numbers:
            </span>
            <div className="flex justify-center text-sm">
              {generatedNumbers.map((num) => (
                <div
                  key={num}
                  className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mx-1 border-2 border-blue-600 hover:bg-blue-700 hover:text-yellow-300 transition duration-300 ease-in-out"
                >
                  {num}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlayerDetails;
