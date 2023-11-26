import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCookieContext } from "../../context/Context";

const usePlayerInfo = () => {
  const { playerName: routePlayerName } = useParams();
  const {
    playerName: contextPlayerName,
    playerBalance,
    prize,
    totalPrize,
    updatePlayerBalance,
    updatePrize,
    updateTotalPrize,
  } = useCookieContext();
  const [playerName, setPlayerName] = useState(
    routePlayerName || contextPlayerName || ""
  );
  const [localPlayerBalance, setLocalPlayerBalance] = useState(
    playerBalance !== undefined ? playerBalance : 10000
  );

  useEffect(() => {
    if (contextPlayerName) {
      setPlayerName(contextPlayerName);
    }
  }, [contextPlayerName]);

  useEffect(() => {
    if (playerBalance !== undefined) {
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
    totalPrize,
    setPlayerName,
    setBalance,
    updatePrize,
    updateTotalPrize,
  };
};

export default usePlayerInfo;
