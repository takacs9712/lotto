import React from "react";
import useGameLogic from "../../hooks/player/useGameLogic";
import PlayerDetails from "../Lotterykeeper/PlayerDetails";
import NumberGrid from "../Lotterykeeper/NumberGrid";
import ActionButtons from "../Lotterykeeper/ActionButtons";
import TicketList from "../Lotterykeeper/TicketList";

const Lottokeeper = () => {
  const {
    playerName,
    playerBalance,
    selectedNumbers,
    ticketList,
    generatedNumbers,
    hasResult,
    totalPrize,
    handleSelectNumber,
    handleGenerateNumbers,
    handleNewTicket,
    handleRestartGame,
  } = useGameLogic();

  return (
    <div className="container mx-auto p-4 bg-gray-100 m-6 rounded-lg">
      <PlayerDetails
        playerName={playerName}
        playerBalance={playerBalance}
        totalPrize={totalPrize}
        selectedNumbers={selectedNumbers}
        hasResult={hasResult}
        generatedNumbers={generatedNumbers}
      />

      <NumberGrid
        selectedNumbers={selectedNumbers}
        handleSelectNumber={handleSelectNumber}
      />

      <ActionButtons
        hasResult={hasResult}
        playerBalance={playerBalance}
        handleGenerateNumbers={handleGenerateNumbers}
        handleNewTicket={handleNewTicket}
        handleRestartGame={handleRestartGame}
      />

      <TicketList ticketList={ticketList} />
    </div>
  );
};

export default Lottokeeper;
