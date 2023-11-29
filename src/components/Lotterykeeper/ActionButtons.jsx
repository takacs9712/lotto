import React from "react";

const ActionButtons = ({
  hasResult,
  playerBalance,
  handleGenerateNumbers,
  handleNewTicket,
  handleRestartGame,
}) => {
  return (
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
  );
};

export default ActionButtons;
