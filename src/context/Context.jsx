import React, { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

const CookieContext = createContext();

export const CookieProvider = ({ children }) => {
  const [playerName, setPlayerName] = useState("");
  const [playerBalance, setPlayerBalance] = useState(0);
  const [prize, setPrize] = useState(0);

  useEffect(() => {
    const storedName = Cookies.get("playerName");
    const storedBalance = Cookies.get("playerBalance");
    const storedPrize = Cookies.get("prize");

    if (storedName) {
      setPlayerName(storedName);
    }
    if (storedBalance) {
      setPlayerBalance(parseFloat(storedBalance));
    }
    if (storedPrize) {
      setPrize(parseFloat(storedPrize));
    }
  }, []);

  const updatePlayerName = (name) => {
    setPlayerName(name);
    Cookies.set("playerName", name, { expires: 365 });
  };

  const updatePlayerBalance = (balance) => {
    setPlayerBalance(balance);
    Cookies.set("playerBalance", balance, { expires: 365 });
  };

  const updatePrize = (prizeValue) => {
    setPrize(prizeValue);
    Cookies.set("prize", prizeValue, { expires: 365 });
  };

  return (
    <CookieContext.Provider
      value={{
        playerName,
        playerBalance,
        prize,
        updatePlayerName,
        updatePlayerBalance,
        updatePrize,
      }}
    >
      {children}
    </CookieContext.Provider>
  );
};

export const useCookieContext = () => {
  return useContext(CookieContext);
};
