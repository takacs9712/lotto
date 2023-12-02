import React, { useState, useEffect } from "react";
import useRandomNumbers from "../../hooks/operator/useRandomNumbers";
import useMatchesCalculator from "../../hooks/operator/useMatchesCalculator";
import useDrawNumbers from "../../hooks/operator/useDrawNumbers";
import ResultsTable from "../Operator/ResultsTable";
import SimulatedPlayersList from "../Operator/SimulatedPlayersList";
import SubmittedTicketsTable from "../Operator/SubmittedTicketsTable";
import DrawNumbersSection from "../Operator/DrawNumbersSection";
import { useCookie } from "../../context/useCookies";

const Operator = () => {
  const generateRandomNumbers = useRandomNumbers();
  const calculateMatches = useMatchesCalculator();
  const drawNumbers = useDrawNumbers();

  const [balance, setBalance] = useState(0);
  const [operatorBalance, setOperatorBalance] = useState(0);
  const [simulatedPlayers, setSimulatedPlayers] = useState([]);
  const [numberOfTickets, setNumberOfTickets] = useState(0);
  const [submittedTickets, setSubmittedTickets] = useState([]);
  const [prizesToPay, setPrizesToPay] = useState(0);

  const [results, setResults] = useState({
    fiveMatches: 0,
    fourMatches: 0,
    threeMatches: 0,
    twoMatches: 0,
    oneMatches: 0,
    noMatches: 0,
    totalRevenue: 0,
    totalPayout: 0,
    operatorProfit: 0,
  });

  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [numbersDrawn, setNumbersDrawn] = useState(false);

  const [savedResults, setSavedResults] = useCookie("lottoResults", results);

  useEffect(() => {
    setResults(savedResults);
  }, [savedResults]);

  const handleSort = (column) => {
    if (sortBy === column) {
      setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
    } else {
      setSortBy(column);
      setSortOrder("asc");
    }
  };

  const sortTickets = () => {
    return [...submittedTickets].sort((a, b) => {
      if (sortBy === "numbers") {
        return sortOrder === "asc"
          ? a.numbers.join(",").localeCompare(b.numbers.join(","))
          : b.numbers.join(",").localeCompare(a.numbers.join(","));
      } else if (sortBy === "matches" || sortBy === "payout") {
        const matchesA = calculateMatches(a.numbers, generateRandomNumbers())
          .matchingCounts[5];
        const matchesB = calculateMatches(b.numbers, generateRandomNumbers())
          .matchingCounts[5];
        const valueA =
          sortBy === "matches"
            ? matchesA
            : calculateMatches(a.numbers, generateRandomNumbers()).totalPayout;
        const valueB =
          sortBy === "matches"
            ? matchesB
            : calculateMatches(b.numbers, generateRandomNumbers()).totalPayout;
        return sortOrder === "asc" ? valueA - valueB : valueB - valueA;
      } else {
        return 0;
      }
    });
  };

  const resetGame = () => {
    setNumbersDrawn(false);
    setBalance(0);
    setOperatorBalance(0);
    setSimulatedPlayers([]);
    setNumberOfTickets(0);
    setSubmittedTickets([]);
    setPrizesToPay(0);
    resetResults();
  };

  const resetResults = () => {
    setResults({
      fiveMatches: 0,
      fourMatches: 0,
      threeMatches: 0,
      twoMatches: 0,
      noMatches: 0,
      totalRevenue: 0,
      totalPayout: 0,
      operatorProfit: 0,
    });
  };

  const submitTicket = () => {
    const remainingTickets = simulatedPlayers.length - submittedTickets.length;

    if (remainingTickets > 0) {
      const newSubmittedTickets = simulatedPlayers
        .slice(0, remainingTickets)
        .map((player) => ({
          numbers: player.numbers,
          price: player.price,
          generated: false,
        }));

      setSubmittedTickets([...submittedTickets, ...newSubmittedTickets]);
      setBalance((prevBalance) => prevBalance + 0);
    } else {
      alert("All generated tickets have been submitted.");
    }
  };

  const drawNumbersHandler = () => {
    if (!numbersDrawn) {
      const submittedAndNotDrawnTickets = submittedTickets.filter(
        (ticket) => !ticket.generated
      );

      if (submittedAndNotDrawnTickets.length > 0) {
        const drawnNumbers = generateRandomNumbers();
        console.log("Drawn Numbers:", drawnNumbers);

        const updatedSubmittedTickets = submittedTickets.map((ticket) =>
          ticket.generated ? ticket : { ...ticket, generated: true }
        );
        setSubmittedTickets(updatedSubmittedTickets);

        drawNumbers(
          updatedSubmittedTickets,
          setResults,
          (prevOperatorBalance) => prevOperatorBalance - prizesToPay,
          setPrizesToPay,
          numberOfTickets
        );

        setOperatorBalance(
          (prevOperatorBalance) => prevOperatorBalance - prizesToPay
        );
        setBalance((prevBalance) => prevBalance - prizesToPay);
        setNumbersDrawn(true);
      } else {
        alert("No more tickets to draw.");
      }
    } else {
      alert("Numbers already drawn. Please reset the game.");
    }
    setSavedResults(results);
  };

  return (
    <div className="container mx-auto my-8 p-6 bg-gray-200 rounded-md">
      <h2 className="text-2xl font-bold mb-4">Operator</h2>
      <p className="text-lg mb-4">Balance: ${balance}</p>
      <div className="mb-8">
        <label
          htmlFor="numberOfTickets"
          className="block text-sm font-medium text-gray-700"
        >
          Number of Tickets:
        </label>
        <input
          type="number"
          id="numberOfTickets"
          value={numberOfTickets}
          onChange={(e) => setNumberOfTickets(parseInt(e.target.value))}
          className="mt-1 p-2 border rounded-md w-16"
        />
        <button
          onClick={() => {
            const newTickets = Array.from({ length: numberOfTickets }, () => ({
              numbers: generateRandomNumbers(),
              price: 500,
              generated: true,
            }));

            setSimulatedPlayers([...simulatedPlayers, ...newTickets]);
            setBalance((prevBalance) => prevBalance + numberOfTickets * 500);
            setOperatorBalance(
              (prevBalance) => prevBalance + numberOfTickets * 500
            );
          }}
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
        >
          Generate Tickets
        </button>
      </div>
      <SimulatedPlayersList simulatedPlayers={simulatedPlayers} />
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-2">Submitted Tickets:</h3>
        <button
          onClick={submitTicket}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700 focus:outline-none focus:ring focus:border-green-300"
        >
          Submit Ticket
        </button>
        <button
          onClick={resetGame}
          className="ml-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring focus:border-red-300"
        >
          Reset Game
        </button>

        <SubmittedTicketsTable
          tickets={sortTickets()}
          handleSort={handleSort}
        />
      </div>
      <DrawNumbersSection
        numbersDrawn={numbersDrawn}
        prizesToPay={prizesToPay}
        drawNumbersHandler={drawNumbersHandler}
      />
      <ResultsTable results={results} />
    </div>
  );
};

export default Operator;
