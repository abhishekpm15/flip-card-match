import React, { useContext } from "react";
import Heart from "./Heart";
import { CardContextProvider } from "../context/CardContext";

const Header = () => {
  const { gameOver , win} = useContext(CardContextProvider);

  return (
    <div className="text-4xl font-semibold">
      FLIP MATCH
      <div className="flex items-center mt-4 h-12">
        <div>
          <Heart />
        </div>
        {gameOver && (
          <div className="bg-red-500 p-2 rounded-xl text-2xl text-white">
            Game over !
          </div>
        )}{
            win && (
                <div className="bg-green-500 p-2 rounded-xl text-2xl text-white">
                  You Won !
                </div>
            )}
      </div>
    </div>
  );
};

export default Header;
