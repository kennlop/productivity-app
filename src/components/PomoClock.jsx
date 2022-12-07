import React, { useEffect, useState } from "react";

export default function App() {
  
  const [secondsLeft, setSecondsLeft] = useState(25*60);
  const [timer, setTimer] = useState();

  const start = () => {

    const timer = setInterval(() => {
      console.log("in here")
      setSecondsLeft((secondsLeft) => secondsLeft - 1);
      if (secondsLeft === 1) {
        setTimer(SecondsTohhmmss(secondsLeft))
        clearInterval(timer);
      }
    }, 1000);
    setTimer(timer);
  };

  const pause = () => {
    setSecondsLeft((secondsLeft) => secondsLeft);
    setTimer(secondsLeft);
  }

  useEffect(() => {
    if (secondsLeft === 0) {
      clearInterval(timer);
    }
  }, [secondsLeft, timer]);
  
  useEffect(() => {
    return () => clearInterval(timer);
  }, [timer]);

  var SecondsTohhmmss = function(totalSeconds) {
    var hours   = Math.floor(totalSeconds / 3600);
    var minutes = Math.floor((totalSeconds - (hours * 3600)) / 60);
    var seconds = totalSeconds - (hours * 3600) - (minutes * 60);
  
    // round seconds
    seconds = Math.round(seconds * 100) / 100
  
    var result = (hours < 10 ? "0" + hours : hours);
        result += " hr " + (minutes < 10 ? "0" + minutes : minutes);
        result += " min " 
    return result;
  }

  return (
    <div className="whole-clock">
      <h1 className="pomo-title">Pomodoro Timer (seconds)</h1>
      <div className="time-left">{secondsLeft}</div>

      <button className="start" onClick={start}>start</button>
      <button className="pause" onClick={pause}>pause</button>
    </div>
  );
}