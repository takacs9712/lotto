import React from "react";
import Ticket from "../Ticket";

const SimulatedPlayersList = ({ simulatedPlayers }) => (
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
);

export default SimulatedPlayersList;
