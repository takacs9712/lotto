import React from "react";

const Ticket = ({ numbers, price, generated }) => (
  <li
    className={`mb-2 border p-2 rounded-md bg-gray-100 ${
      generated ? "text-gray-600" : ""
    }`}
  >
    <span className="font-semibold">Numbers:</span> {numbers.join(", ")},{" "}
    <span className="font-semibold">Price:</span> ${price} (
    {generated ? "Generated" : "Submitted"})
  </li>
);

export default Ticket;
