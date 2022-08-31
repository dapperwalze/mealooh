import React, { createContext, useState } from "react";

export const Context = createContext();

export const Provider = ({ children }) => {
  const [keyword, setKeyword] = useState("");

  const value = {
    keyword,
    setKeyword,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
