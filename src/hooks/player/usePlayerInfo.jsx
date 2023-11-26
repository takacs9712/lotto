// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { useCookieContext } from "../../context/Context";

// const usePlayerInfo = () => {
//   const { playerName: routePlayerName } = useParams();
//   const { playerName: contextPlayerName } = useCookieContext();
//   const [playerName, setPlayerName] = useState(
//     routePlayerName || contextPlayerName || ""
//   );
//   const [playerBalance, setPlayerBalance] = useState(10000);

//   useEffect(() => {
//     if (contextPlayerName) {
//       setPlayerName(contextPlayerName);
//     }
//   }, [contextPlayerName]);

//   return {
//     playerName,
//     playerBalance,
//     setPlayerName,
//     setPlayerBalance,
//   };
// };

// export default usePlayerInfo;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCookieContext } from "../../context/Context";

const usePlayerInfo = () => {
  const { playerName: routePlayerName } = useParams();
  const {
    playerName: contextPlayerName,
    playerBalance,
    prize,
    updatePlayerBalance,
    updatePrize,
  } = useCookieContext();
  const [playerName, setPlayerName] = useState(
    routePlayerName || contextPlayerName || ""
  );
  const [localPlayerBalance, setLocalPlayerBalance] = useState(10000);

  useEffect(() => {
    if (contextPlayerName) {
      setPlayerName(contextPlayerName);
    }
  }, [contextPlayerName]);

  useEffect(() => {
    if (playerBalance) {
      setLocalPlayerBalance(playerBalance);
    }
  }, [playerBalance]);

  const setBalance = (balance) => {
    setLocalPlayerBalance(balance);
    updatePlayerBalance(balance);
  };

  return {
    playerName,
    playerBalance: localPlayerBalance,
    prize,
    setPlayerName,
    setBalance,
    updatePrize,
  };
};

export default usePlayerInfo;
