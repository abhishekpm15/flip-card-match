import React, { useContext, useEffect } from "react";
import { CardContextProvider } from "../context/CardContext";

const Timer = () => {
    const { timer, setTimer } = useContext(CardContextProvider);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setTimer((prev) => Math.max(0, prev - 1)); 
      }, 1000);
  
      return () => clearInterval(intervalId);
    }, [setTimer]);
  
    return <div className="text-2xl font-semibold absolute top-5">{timer}</div>;
  };

export default Timer;
