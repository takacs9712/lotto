import React from "react";
import NumberButton from "../Buttons/NumberButton";

const NumberGrid = ({ selectedNumbers, handleSelectNumber }) => {
  return (
    <div className="grid grid-cols-6 gap-4 mt-6">
      {[...Array(39).keys()].map((num) => (
        <NumberButton
          key={num + 1}
          number={num + 1}
          isSelected={selectedNumbers.includes(num + 1)}
          onClick={() => handleSelectNumber(num + 1)}
          style={{
            backgroundColor: "white",
            border: "1px solid black",
          }}
        />
      ))}
    </div>
  );
};

export default NumberGrid;
