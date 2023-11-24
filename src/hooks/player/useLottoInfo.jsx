import { useEffect, useState } from "react";

const useLottoInfo = () => {
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [lottoNumbers, setLottoNumbers] = useState([]);
  const [prize, setPrize] = useState(0);
  const [ticketList, setTicketList] = useState([]);
  const [generatedNumbers, setGeneratedNumbers] = useState([]);
  const [hasResult, setHasResult] = useState(false);

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

  return {
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
  };
};

export default useLottoInfo;
