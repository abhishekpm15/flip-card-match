import React, { createContext, useState } from "react";

const CardContextProvider = createContext();

const CardContext = ({ children }) => {
  const [flipCardCount, setFlipCardCount] = useState(0);
  const [foundCard, setFoundCard] = useState([])
  const values = {
    flipCardCount,
    setFlipCardCount,
    foundCard,
    setFoundCard
  }

  return (
    <CardContextProvider.Provider value={values}>{children}</CardContextProvider.Provider>
  );
};

export default CardContext;
export {CardContextProvider}
