import { useContext, useEffect, useState } from "react";
import "./App.css";
import Rows from "./components/Card";
import { randomAssign } from "./utils/random";
import Header from "./components/Header";
import { CardContextProvider } from "./context/CardContext";
import { matrix } from "./utils/matrix";
function App() {
  const [random, setRandom] = useState([]);
  const { flipCardCount, setFlipCardCount, foundCard, setFoundCard ,setRealMatrix} =
    useContext(CardContextProvider);
  let index = [];

  useEffect(() => {
    if (flipCardCount === 2) {
      if (foundCard[0] === foundCard[1]) {
        console.log("same");
        setFlipCardCount(0)
      } 
    }
  }, [flipCardCount, foundCard, setFlipCardCount, setFoundCard]);

  useEffect(() => {
    const res = randomAssign();
    setRandom(res);
    setTimeout(()=>{
      const updateMatrix = matrix.map((row) => row.map(item => ({...item, show: false})))
      setRealMatrix(updateMatrix)
  },4000)
  }, [setRealMatrix]);

  return (
    <div className="App flex flex-col items-center justify-start sm:justify-center sm:mt-0 mt-24 h-screen space-y-10">
      <Header />
      <Rows random={random} index={index} />
    </div>
  );
}

export default App;
