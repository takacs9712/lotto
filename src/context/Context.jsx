import React, { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

const CookieContext = createContext();

export const CookieProvider = ({ children }) => {
  const [playerName, setPlayerName] = useState("");

  useEffect(() => {
    const storedName = Cookies.get("playerName");
    if (storedName) {
      setPlayerName(storedName);
    }
  }, []);

  const updatePlayerName = (name) => {
    setPlayerName(name);
    Cookies.set("playerName", name, { expires: 365 });
  };

  return (
    <CookieContext.Provider value={{ playerName, updatePlayerName }}>
      {children}
    </CookieContext.Provider>
  );
};

export const useCookieContext = () => {
  return useContext(CookieContext);
};
