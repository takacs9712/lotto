import React from "react";
import Cookies from "js-cookie";

export function useCookie(key, initialValue) {
  const [value, setValue] = React.useState(() => {
    const storedValue = Cookies.get(key);
    return storedValue !== undefined ? JSON.parse(storedValue) : initialValue;
  });

  const setCookieValue = (newValue) => {
    setValue(newValue);
    Cookies.set(key, JSON.stringify(newValue));
  };

  return [value, setCookieValue];
}
