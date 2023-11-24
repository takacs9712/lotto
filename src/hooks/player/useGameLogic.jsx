import { useEffect, useState } from "react";
import useLottoInfo from "./useLottoInfo";
import usePlayerInfo from "./usePlayerInfo";

const useGameLogic = () => {
  const { playerName, playerBalance, setPlayerName, setPlayerBalance } =
    usePlayerInfo();

  const {
    selectedNumbers,
    lottoNumbers,
    prize,
    ticketList,
    generatedNumbers,
    hasResult,
    setHasResult,
    setSelectedNumbers,
    setGeneratedNumbers,
    setLottoNumbers,
    setPrize,
    setTicketList,
  } = useLottoInfo();

  const [numbersGenerated, setNumbersGenerated] = useState(false);
  const [isGeneratingNumbers, setIsGeneratingNumbers] = useState(false);

  useEffect(() => {
    setLottoNumbers(generateRandomNumbers());
  }, []);

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

    if (
      playerBalance >= 500 &&
      selectedNumbers.length === 5 &&
      !hasResult &&
      !numbersGenerated
    ) {
      const matchingNumbers = selectedNumbers.filter((num) =>
        lottoNumbers.some(
          (lottoNum) =>
            lottoNum === num &&
            lottoNumbers.filter((n) => n === num).length === 1
        )
      );

      let currentPrize = 0;

      switch (matchingNumbers.length) {
        case 2:
          currentPrize = 400;
          break;
        case 3:
          currentPrize = 600;
          break;
        case 4:
          currentPrize = 1000;
          break;
        case 5:
          currentPrize = 10000;
          break;
        default:
          currentPrize = 0;
      }

      const newTicket = {
        numbers: selectedNumbers,
        matchingNumbers: matchingNumbers.length,
        prize: currentPrize,
      };

      setTicketList([...ticketList, newTicket]);

      setPlayerBalance(playerBalance + currentPrize - 500);
      setGeneratedNumbers(generateRandomNumbers());
      setHasResult(true);
      setSelectedNumbers([]);
      setIsGeneratingNumbers(true);
      setNumbersGenerated(true);
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
    playerName,
    playerBalance,
    selectedNumbers,
    lottoNumbers,
    prize,
    ticketList,
    generatedNumbers,
    hasResult,
    setHasResult,
    setPlayerName,
    setPlayerBalance,
    setSelectedNumbers,
    setGeneratedNumbers,
    setLottoNumbers,
    setPrize,
    setTicketList,
    handleSelectNumber,
    handleGenerateNumbers,
    handleNewTicket,
  };
};

export default useGameLogic;
