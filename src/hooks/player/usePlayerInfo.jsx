import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCookieContext } from "../../context/Context";

const usePlayerInfo = () => {
  const { playerName: routePlayerName } = useParams();
  const { playerName: contextPlayerName } = useCookieContext();
  const [playerName, setPlayerName] = useState(
    routePlayerName || contextPlayerName || ""
  );
  const [playerBalance, setPlayerBalance] = useState(10000);

  useEffect(() => {
    if (contextPlayerName) {
      setPlayerName(contextPlayerName);
    }
  }, [contextPlayerName]);

  return {
    playerName,
    playerBalance,
    setPlayerName,
    setPlayerBalance,
  };
};

export default usePlayerInfo;
