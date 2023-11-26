import { useState } from "react";
import useLottoInfo from "./useLottoInfo";
import usePlayerInfo from "./usePlayerInfo";

import { prizeData } from "../../utils/constants";

const useGameLogic = () => {
  const {
    playerName: contextPlayerName,
    playerBalance: contextPlayerBalance,
    prize: contextPrize,
    setPlayerName,
    setBalance: setPlayerBalanceContext,
    updatePrize,
  } = usePlayerInfo();

  const {
    selectedNumbers,
    prize,
    ticketList,
    generatedNumbers,
    hasResult,
    setHasResult,
    setSelectedNumbers,
    setGeneratedNumbers,
    setPrize,
    setTicketList,
  } = useLottoInfo();

  const [numbersGenerated, setNumbersGenerated] = useState(false);
  const [isGeneratingNumbers, setIsGeneratingNumbers] = useState(false);

  const generateRandomNumbers = () => {
    const numbers = [];
    while (numbers.length < 5) {
      const randomNum = Math.floor(Math.random() * 39) + 1;
      if (!numbers.includes(randomNum)) {
        numbers.push(randomNum);
      }
    }
    return numbers;
  };

  const handleSelectNumber = (number) => {
    if (selectedNumbers.length < 5 && !selectedNumbers.includes(number)) {
      setSelectedNumbers([...selectedNumbers, number]);
    }
  };

  const handleGenerateNumbers = () => {
    if (isGeneratingNumbers || numbersGenerated) {
      alert("You have already generated numbers for this ticket.");
      return;
    }

    const randomNum = generateRandomNumbers();
    setGeneratedNumbers(randomNum);

    if (
      contextPlayerBalance >= 500 &&
      selectedNumbers.length === 5 &&
      !hasResult &&
      !numbersGenerated
    ) {
      const matchingNumbersCount = selectedNumbers.filter((num) =>
        randomNum.includes(num)
      ).length;

      const currentPrize = prizeData[matchingNumbersCount] || 0;

      const newTicket = {
        numbers: selectedNumbers,
        matchingNumbers: matchingNumbersCount,
        prize: currentPrize,
      };

      setTicketList([...ticketList, newTicket]);

      setPlayerBalanceContext(contextPlayerBalance + currentPrize - 500);
      setHasResult(true);
      setSelectedNumbers([]);
      setIsGeneratingNumbers(true);
      setNumbersGenerated(true);

      // Update the prize in the player context
      updatePrize(contextPrize + currentPrize);
    } else {
      alert("Please select exactly 5 numbers to generate your lottery ticket.");
    }
  };

  const handleNewTicket = () => {
    setNumbersGenerated(false);
    setHasResult(false);
    setIsGeneratingNumbers(false);
  };

  return {
    playerName: contextPlayerName,
    playerBalance: contextPlayerBalance,
    selectedNumbers,
    prize,
    ticketList,
    generatedNumbers,
    hasResult,
    setHasResult,
    setPlayerName,
    setBalance: setPlayerBalanceContext,
    setSelectedNumbers,
    setGeneratedNumbers,
    setPrize,
    setTicketList,
    handleSelectNumber,
    handleGenerateNumbers,
    handleNewTicket,
  };
};

export default useGameLogic;
