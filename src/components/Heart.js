import React, { useContext, useEffect, useState } from "react";
import { CardContextProvider } from "../context/CardContext";

const heart = (number, length) => {
  console.log("number", number);
  let heartArray = [];
  for (let i = 0; i < number; i++) {
    heartArray.push("❤️");
  }
  for (let i = number; i < length; i++) {
    heartArray.push("🤍");
  }
  return heartArray;
};

const Heart = () => {
  const { life, numberoftries } = useContext(CardContextProvider);
  console.log(life);
  const [heartArray, setHeartArray] = useState(heart(5, 5));
  useEffect(() => {
    const res = heart(life - numberoftries, life);
    setHeartArray(res);
  }, [life, numberoftries]);

  return <>{heartArray}</>;
};

export default Heart;
