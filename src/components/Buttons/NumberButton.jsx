import React from "react";

const NumberButton = ({ number, isSelected, onClick }) => {
  return (
    <button
      className={`border p-2 rounded ${
        isSelected ? "bg-blue-500 text-white" : ""
      }`}
      onClick={onClick}
    >
      {number}
    </button>
  );
};

export default NumberButton;
