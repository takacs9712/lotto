import useRandomNumbers from "./useRandomNumbers";
import useMatchesCalculator from "./useMatchesCalculator";

const useDrawNumbers = () => {
  const calculateMatches = useMatchesCalculator();

  const drawNumbers = (
    submittedTickets,
    setResults,
    setOperatorBalance,
    setPrizesToPay,
    numberOfTickets
  ) => {
    const drawnNumbers = useRandomNumbers()();
    const { matchingCounts, totalPayout } = calculateMatches(
      submittedTickets.map((ticket) => ticket.numbers),
      drawnNumbers
    );
    const operatorProfit = numberOfTickets * 500 - totalPayout;
    setResults({
      fiveMatches: matchingCounts[5],
      fourMatches: matchingCounts[4],
      threeMatches: matchingCounts[3],
      twoMatches: matchingCounts[2],
      noMatches: matchingCounts[0],
      totalRevenue: numberOfTickets * 500,
      totalPayout: totalPayout,
      operatorProfit: operatorProfit,
    });

    setOperatorBalance((prevBalance) => prevBalance - totalPayout);
    setPrizesToPay((prevPrizesToPay) => totalPayout - prevPrizesToPay);
  };

  return drawNumbers;
};

export default useDrawNumbers;
