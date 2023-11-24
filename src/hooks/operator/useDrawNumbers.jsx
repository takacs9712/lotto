import useRandomNumbers from "./useRandomNumbers";
import useMatchesCalculator from "./useMatchesCalculator";

const useDrawNumbers = () => {
  const calculateMatches = useMatchesCalculator();

  const drawNumbers = (
    submittedTickets,
    setResults,
    setBalance,
    setPrizesToPay,
    numberOfTickets
  ) => {
    const drawnNumbers = useRandomNumbers()();
    const { matchingCounts, totalPayout } = calculateMatches(
      submittedTickets.map((ticket) => ticket.numbers),
      drawnNumbers
    );
    const operatorProfit = totalPayout - totalPayout;
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

    setBalance((prevBalance) => prevBalance - totalPayout);
    setPrizesToPay((prevPrizesToPay) => prevPrizesToPay + totalPayout);
  };

  return drawNumbers;
};

export default useDrawNumbers;
