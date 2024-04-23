import React, { useContext, useEffect, useState } from "react";
import Angular from "../assets/angular.png";
import AWS from "../assets/aws.png";
import Docker from "../assets/docker.png";
import GraphQl from "../assets/graphql.png";
import Node from "../assets/node.png";
import Python from "../assets/python.png";
import Raspberry from "../assets/raspberry.png";
import ReactPng from "../assets/react.png";
import { CardContextProvider } from "../context/CardContext";
import { matrix } from "../utils/matrix";
const imageMap = {
  1: Angular,
  2: AWS,
  3: Docker,
  4: GraphQl,
  5: Node,
  6: Python,
  7: Raspberry,
  8: ReactPng,
  9: Angular,
  10: AWS,
  11: Docker,
  12: GraphQl,
  13: Node,
  14: Python,
  15: Raspberry,
  16: ReactPng,
};

const Card = ({ random, index, rowPos, colPos }) => {
  const { flipCardCount, setFlipCardCount, foundCard, setFoundCard } =
    useContext(CardContextProvider);
  const [showCard, setShowCard] = useState(false);
  console.log(random)
  const cardIndex = index[0] * 4 + index[1] + 1;
  return (
    <div
      className="w-36 h-36 bg-[#74b98b] rounded-3xl flex justify-center items-center hover:scale-110 duration-200"
      onClick={() => {
        console.log("row", rowPos);
        console.log("col", colPos);
        setShowCard((prev) => !prev);
        setFlipCardCount((prev) => prev + 1);
        // setFoundCard((prev) => [...prev, imageMap[random[cardIndex - 1]]]);
        // console.log("found card", foundCard);
        // console.log("card clicked", imageMap[random[cardIndex - 1]]);
      }}
    >
      <img
        src={imageMap[random[cardIndex - 1]]}
        alt=""
        className={`w-20 h-20  ${showCard ? "block" : "hidden"}`}
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
