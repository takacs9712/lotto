import React, { useState } from "react";
import Ticket from "../Ticket";
import useRandomNumbers from "../../hooks/operator/useRandomNumbers";
import useMatchesCalculator from "../../hooks/operator/useMatchesCalculator";
import useDrawNumbers from "../../hooks/operator/useDrawNumbers";

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
    noMatches: 0,
    totalRevenue: 0,
    totalPayout: 0,
    operatorProfit: 0,
  });

  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

  const [gameStarted, setGameStarted] = useState(false);
  const [numbersDrawn, setNumbersDrawn] = useState(false);

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

  const startGame = () => {
    setGameStarted(true);
    setNumbersDrawn(false);
  };

  const resetGame = () => {
    setGameStarted(false);
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
    if (gameStarted && !numbersDrawn) {
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
    } else if (!gameStarted) {
      alert("Please start the game first.");
    } else {
      alert("Numbers already drawn. Please reset the game.");
    }
  };

  return (
    <div className="container mx-auto my-8 p-6 bg-gray-200 rounded-md">
      <h2 className="text-2xl font-bold mb-4">Operator</h2>
      <p className="text-lg mb-4">Balance: ${balance}</p>
      {gameStarted ? (
        <>
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
                const newTickets = Array.from(
                  { length: numberOfTickets },
                  () => ({
                    numbers: generateRandomNumbers(),
                    price: 500,
                    generated: true,
                  })
                );

                setSimulatedPlayers([...simulatedPlayers, ...newTickets]);
                setBalance(
                  (prevBalance) => prevBalance + numberOfTickets * 500
                );
                setOperatorBalance(
                  (prevBalance) => prevBalance + numberOfTickets * 500
                );
              }}
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
            >
              Generate Tickets
            </button>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Simulated Players:</h3>
            <ul>
              {simulatedPlayers.map((player, index) => (
                <Ticket
                  key={index}
                  numbers={player.numbers}
                  price={player.price}
                  generated={player.generated}
                />
              ))}
            </ul>
          </div>
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
            <table className="mt-4 w-full border-collapse border border-gray-800">
              <thead>
                <tr>
                  <th
                    onClick={() => handleSort("numbers")}
                    className="py-2 px-4 bg-gray-800 text-white cursor-pointer"
                  >
                    Numbers
                  </th>
                  <th
                    onClick={() => handleSort("matches")}
                    className="py-2 px-4 bg-gray-800 text-white cursor-pointer"
                  >
                    Matches
                  </th>
                  <th
                    onClick={() => handleSort("payout")}
                    className="py-2 px-4 bg-gray-800 text-white cursor-pointer"
                  >
                    Payout
                  </th>
                </tr>
              </thead>
              <tbody>
                {sortTickets().map((ticket, index) => (
                  <tr key={index} className="border border-gray-800">
                    <td className="py-2 px-4">{ticket.numbers.join(", ")}</td>
                    <td className="py-2 px-4">
                      {
                        calculateMatches(
                          ticket.numbers,
                          generateRandomNumbers()
                        ).matchingCounts[5]
                      }
                    </td>
                    <td className="py-2 px-4">
                      {
                        calculateMatches(
                          ticket.numbers,
                          generateRandomNumbers()
                        ).totalPayout
                      }
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-2">Draw Numbers:</h3>
            <button
              onClick={drawNumbersHandler}
              className={`${
                numbersDrawn ? "bg-gray-500" : "bg-yellow-500"
              } text-white px-4 py-2 rounded-md ${
                numbersDrawn ? "cursor-not-allowed" : "hover:bg-yellow-700"
              } focus:outline-none focus:ring ${
                numbersDrawn
                  ? "focus:border-gray-300"
                  : "focus:border-yellow-300"
              }`}
              disabled={numbersDrawn}
            >
              {numbersDrawn ? "Numbers Drawn" : "Draw Numbers"}
            </button>
            <p className="mt-2">Prizes to Pay: ${prizesToPay}</p>
          </div>
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-2">Results:</h3>
            <table className="min-w-full border border-gray-300">
              <thead>
                <tr>
                  <th className="border border-gray-300 py-2 px-4">Matches</th>
                  <th className="border border-gray-300 py-2 px-4">Count</th>
                  <th className="border border-gray-300 py-2 px-4">
                    Price per Match
                  </th>
                  <th className="border border-gray-300 py-2 px-4">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 py-2 px-4">
                    5 Matches
                  </td>
                  <td className="border border-gray-300 py-2 px-4">
                    {results.fiveMatches}
                  </td>
                  <td className="border border-gray-300 py-2 px-4">$10000</td>
                  <td className="border border-gray-300 py-2 px-4">
                    ${results.fiveMatches * 10000}
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 py-2 px-4">
                    4 Matches
                  </td>
                  <td className="border border-gray-300 py-2 px-4">
                    {results.fourMatches}
                  </td>
                  <td className="border border-gray-300 py-2 px-4">$1000</td>
                  <td className="border border-gray-300 py-2 px-4">
                    ${results.fourMatches * 1000}
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 py-2 px-4">
                    3 Matches
                  </td>
                  <td className="border border-gray-300 py-2 px-4">
                    {results.threeMatches}
                  </td>
                  <td className="border border-gray-300 py-2 px-4">$600</td>
                  <td className="border border-gray-300 py-2 px-4">
                    ${results.threeMatches * 600}
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 py-2 px-4">
                    2 Matches
                  </td>
                  <td className="border border-gray-300 py-2 px-4">
                    {results.twoMatches}
                  </td>
                  <td className="border border-gray-300 py-2 px-4">$400</td>
                  <td className="border border-gray-300 py-2 px-4">
                    ${results.twoMatches * 400}
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 py-2 px-4">
                    No Matches
                  </td>
                  <td className="border border-gray-300 py-2 px-4">
                    {results.noMatches}
                  </td>
                  <td className="border border-gray-300 py-2 px-4">$0</td>
                  <td className="border border-gray-300 py-2 px-4">$0</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td
                    colSpan="3"
                    className="border border-gray-300 py-2 px-4 font-semibold"
                  >
                    Total Payout:
                  </td>
                  <td className="border border-gray-300 py-2 px-4 font-semibold">
                    ${results.totalPayout}
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan="3"
                    className="border border-gray-300 py-2 px-4 font-semibold"
                  >
                    Total Revenue:
                  </td>
                  <td className="border border-gray-300 py-2 px-4 font-semibold">
                    ${results.totalRevenue}
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan="3"
                    className="border border-gray-300 py-2 px-4 font-semibold"
                  >
                    Operator Profit:
                  </td>
                  <td className="border border-gray-300 py-2 px-4 font-semibold">
                    ${results.operatorProfit}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </>
      ) : (
        <button
          onClick={startGame}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
        >
          Start Game
        </button>
      )}
    </div>
  );
};

export default Operator;
