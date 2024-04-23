import React, { createContext, useEffect, useState } from "react";
import { matrix } from "../utils/matrix";
const CardContextProvider = createContext();

const CardContext = ({ children }) => {
  const [realMatrix, setRealMatrix] = useState(matrix);
  console.log(realMatrix);
  const [flipCardCount, setFlipCardCount] = useState(0);
  const [foundCard, setFoundCard] = useState([]);
  const [getRowCol, setGetRowCol] = useState([]);
  const [numberoftries, setNumberoftries] = useState(0);
  const [life, setLife] = useState(5);
  const [gameOver, setGameOver] = useState(false);
  const [win, setWin] = useState(false);
  const [totalOpenCards, setTotoalOpenCards] = useState(0);
  const [timer, setTimer] = useState(5);

  useEffect(() => {
    if (totalOpenCards === 16) {
      setWin(true);
    }
    if (life === numberoftries) {
      setGameOver(true);
    }
    if (flipCardCount === 2 && !gameOver && !win) {
      if (foundCard[0] === foundCard[1]) {
        const updatedMatrix = [...realMatrix];
        console.log("get row col", getRowCol[0], getRowCol[1]);
        console.log("get row col", getRowCol[2], getRowCol[3]);
        updatedMatrix[getRowCol[0]][getRowCol[1]].show = true;
        updatedMatrix[getRowCol[2]][getRowCol[3]].show = true;
        setTotoalOpenCards((prev) => prev + 2);
        setRealMatrix(updatedMatrix);
        setFoundCard([]);
        setFlipCardCount(0);
        setGetRowCol([]);
      } else {
        setTimeout(() => {
          setNumberoftries((prev) => prev + 1);
          const updatedMatrix = [...realMatrix];
          updatedMatrix[getRowCol[0]][getRowCol[1]].show = false;
          updatedMatrix[getRowCol[2]][getRowCol[3]].show = false;
          setRealMatrix(updatedMatrix);
          setFoundCard([]);
          setFlipCardCount(0);
          setGetRowCol([]);
        }, 200);
      }
    }
  }, [
    flipCardCount,
    foundCard,
    gameOver,
    getRowCol,
    life,
    numberoftries,
    realMatrix,
    totalOpenCards,
    win,
  ]);

  const values = {
    flipCardCount,
    setFlipCardCount,
    foundCard,
    setFoundCard,
    realMatrix,
    setRealMatrix,
    getRowCol,
    setGetRowCol,
    numberoftries,
    setNumberoftries,
    life,
    setLife,
    gameOver,
    win,
    timer,
    setTimer
  };

  return (
    <CardContextProvider.Provider value={values}>
      {children}
    </CardContextProvider.Provider>
  );
};

export default CardContext;
export { CardContextProvider };
