import React, { useContext} from "react";
import { CardContextProvider } from "../context/CardContext";

const Card = ({rowPos, colPos }) => {

  const handleClick = () =>{
    if(!gameOver && !win && realMatrix[rowPos][colPos].show === false){
        const updatedMatrix = [...realMatrix];
        updatedMatrix[rowPos][colPos].show = true;
        setRealMatrix(updatedMatrix);      
        setFlipCardCount(prev => prev+1);
        setFoundCard((prev) => [...prev, realMatrix[rowPos][colPos].img]);
        setGetRowCol(prev=>[...prev,rowPos,colPos])
      }
    }

  const {realMatrix, setRealMatrix, setFlipCardCount,  setFoundCard, setGetRowCol, gameOver, win} = useContext(CardContextProvider);
  return (
    <div
      className="sm:w-32 sm:h-32 h-20 w-20 bg-[#76d395] rounded-lg sm:rounded-3xl flex justify-center items-center hover:scale-110 duration-200"
      onClick={handleClick}
    >
      <img
        src={realMatrix[rowPos][colPos].img}
        alt=""
        className={`sm:w-20 sm:h-20 h-14 w-14  ${realMatrix[rowPos][colPos].show ? "block" : "hidden"}`}
      ></img>
    </div>
  );
};

const Cols = ({ random, index, rowPos }) => {
  return (
    <div className="flex space-x-5">
      {[1, 2, 3, 4].map((card, i) => (
        <div className="">
          <Card
            random={random}
            index={[index[0], index[1] * 4 + i]}
            colPos={i}
            rowPos={rowPos}
          />
        </div>
      ))}
    </div>
  );
};

const Rows = ({ random, index }) => {
  return (
    <div className="flex flex-col space-y-5">
      {[1, 2, 3, 4].map((card, i) => (
        <div className="">
          <Cols random={random} index={[i, 0]} rowPos={i} />
        </div>
      ))}
    </div>
  );
};

export default Rows;
