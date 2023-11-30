import React from "react";

const SubmittedTicketsTable = ({ tickets, handleSort }) => (
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
      {tickets.map((ticket, index) => (
        <tr key={index} className="border border-gray-800">
          <td className="py-2 px-4">{ticket.numbers.join(", ")}</td>
          <td className="py-2 px-4">{ticket.matches}</td>
          <td className="py-2 px-4">{ticket.payout}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default SubmittedTicketsTable;
