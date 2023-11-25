import { useState } from "react";

const useLottoInfo = () => {
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [prize, setPrize] = useState(0);
  const [ticketList, setTicketList] = useState([]);
  const [generatedNumbers, setGeneratedNumbers] = useState([]);
  const [hasResult, setHasResult] = useState(false);

  return {
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
  };
};

export default useLottoInfo;
