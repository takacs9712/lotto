import React from "react";

const TicketList = ({ ticketList }) => {
  return (
    <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-md overflow-x-auto">
      <h2 className="text-3xl font-bold mb-4 text-center text-yellow-600">
        Ticket List
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border-b">Ticket Number</th>
              <th className="py-2 px-4 border-b">Selected Numbers</th>
              <th className="py-2 px-4 border-b">Matching Numbers</th>
              <th className="py-2 px-4 border-b">Prize</th>
            </tr>
          </thead>
          <tbody>
            {ticketList.map((ticket, index) => (
              <tr key={index} className="border-b text-center">
                <td className="py-2 px-4">{index + 1}</td>
                <td className="py-2 px-4">
                  <div className="flex justify-center">
                    {ticket.numbers.map((num, i) => (
                      <div
                        key={i}
                        className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mx-1 border-2 border-blue-600 hover:bg-blue-700 hover:text-yellow-300 transition duration-300 ease-in-out"
                      >
                        {num}
                      </div>
                    ))}
                  </div>
                </td>
                <td className="py-2 px-4 text-green-500">
                  {ticket.matchingNumbers}
                </td>
                <td className="py-2 px-4 text-orange-500">{ticket.prize}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TicketList;
