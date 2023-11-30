import React from "react";

const DrawNumbersSection = ({
  numbersDrawn,
  prizesToPay,
  drawNumbersHandler,
}) => (
  <div className="mt-8">
    <h3 className="text-lg font-semibold mb-2">Draw Numbers:</h3>
    <button
      onClick={drawNumbersHandler}
      className={`${
        numbersDrawn ? "bg-gray-500" : "bg-yellow-500"
      } text-white px-4 py-2 rounded-md ${
        numbersDrawn ? "cursor-not-allowed" : "hover:bg-yellow-700"
      } focus:outline-none focus:ring ${
        numbersDrawn ? "focus:border-gray-300" : "focus:border-yellow-300"
      }`}
      disabled={numbersDrawn}
    >
      {numbersDrawn ? "Numbers Drawn" : "Draw Numbers"}
    </button>
    {numbersDrawn && prizesToPay === 0 && (
      <p className="mt-2">Sorry, you did not win this time</p>
    )}
    {numbersDrawn && prizesToPay !== 0 && (
      <p className="mt-2">Prizes to Pay: ${prizesToPay}</p>
    )}
  </div>
);

export default DrawNumbersSection;
