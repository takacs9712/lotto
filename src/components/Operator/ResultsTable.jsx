import React, { useState } from "react";
import { useCookie } from "../../context/useCookies";

const ResultsTable = ({ results }) => {
  const [savedResults, setSavedResults] = useCookie("lottoResults", results);

  const [saveButtonDisabled, setSaveButtonDisabled] = useState(false);

  const saveResultsToCookies = () => {
    setSavedResults(results);
    console.log("Results saved to cookies:", results);
    setSaveButtonDisabled(true);
    console.log("Button Disabled:", saveButtonDisabled);
  };

  return (
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
            <td className="border border-gray-300 py-2 px-4">5 Matches</td>
            <td className="border border-gray-300 py-2 px-4">
              {results.fiveMatches}
            </td>
            <td className="border border-gray-300 py-2 px-4">$10000</td>
            <td className="border border-gray-300 py-2 px-4">
              ${results.fiveMatches * 10000}
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 py-2 px-4">4 Matches</td>
            <td className="border border-gray-300 py-2 px-4">
              {results.fourMatches}
            </td>
            <td className="border border-gray-300 py-2 px-4">$1000</td>
            <td className="border border-gray-300 py-2 px-4">
              ${results.fourMatches * 1000}
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 py-2 px-4">3 Matches</td>
            <td className="border border-gray-300 py-2 px-4">
              {results.threeMatches}
            </td>
            <td className="border border-gray-300 py-2 px-4">$600</td>
            <td className="border border-gray-300 py-2 px-4">
              ${results.threeMatches * 600}
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 py-2 px-4">2 Matches</td>
            <td className="border border-gray-300 py-2 px-4">
              {results.twoMatches}
            </td>
            <td className="border border-gray-300 py-2 px-4">$400</td>
            <td className="border border-gray-300 py-2 px-4">
              ${results.twoMatches * 400}
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 py-2 px-4">1 Matches</td>
            <td className="border border-gray-300 py-2 px-4">
              {results.oneMatches * 0}
            </td>
            <td className="border border-gray-300 py-2 px-4">$400</td>
            <td className="border border-gray-300 py-2 px-4">
              ${results.oneMatches * 200}
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 py-2 px-4">No Matches</td>
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
            <td className="border border-gray-300 py-2 px-4 font-semibold text-red-500">
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
            <td className="border border-gray-300 py-2 px-4 font-semibold text-green-600">
              ${results.operatorProfit}
            </td>
          </tr>
        </tfoot>
      </table>
      <button
        className={`mt-4 bg-blue-500 text-white py-2 px-4 rounded ${
          saveButtonDisabled
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
        }`}
        onClick={saveResultsToCookies}
        disabled={saveButtonDisabled}
      >
        Save Results
      </button>
    </div>
  );
};

export default ResultsTable;
