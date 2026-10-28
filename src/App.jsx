import { useState, useRef } from "react";
import "./App.css";

function App() {
  const [seconds, setSeconds] = useState(0);
  const timerRef = useRef(null);

  function handleStart() {
    if (timerRef.current !== null) return;

    timerRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
  }
  function handleStop() {
    clearInterval(timerRef.current);
    timerRef.current = null;
  }

  function handleReset() {
    clearInterval(timerRef.current);
    timerRef.current = null;
    setSeconds(0);
  }
  return (
    <div className="stopwatch">
      <h1>My Stopwatch</h1>

      <h2 className="timer">
        {String(Math.floor(seconds / 60)).padStart(2, "0")}:
        {String(seconds % 60).padStart(2, "0")}
      </h2>

      {/* <h2>{seconds}</h2> */}

      <div className="buttons">
        <button className="start" onClick={handleStart}>
          Start
        </button>

        <button className="stop" onClick={handleStop}>
          Stop
        </button>

        <button className="reset" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
