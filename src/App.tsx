import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timerOn, setTimerOn] = useState(false);
  const [counter, setCounter] = useState(1500)
  const [currentTimer, setCurrentTimer] = useState('Session')

  let minutes = Math.floor(counter/60).toString().padStart(2, '0')

  let seconds = (counter - Number(minutes) * 60 ).toString().padStart(2, '0')

  useEffect(() => {
    if(!timerOn){
      return
    }
    const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    // @ts-ignore
    return () => clearInterval(timer)
  }, [counter, timerOn])

  useEffect(()=>{
    setCounter(sessionLength * 60)
  }, [sessionLength])

  const handleStartStop = () => {
    setTimerOn((current) => !current);
  };

  useEffect(() => {
    const audio = document.getElementById('beep')
  
    if(counter == 0 && currentTimer == 'Session'){
      // @ts-ignore
      audio?.play()
      setCurrentTimer('Break')
      setCounter(breakLength * 60)
      setTimerOn(true)
      return
    }

    if(counter == 0 && currentTimer == 'Break'){
      // @ts-ignore
      audio?.play()
      setCurrentTimer('Session');
      setCounter(sessionLength * 60);
      setTimerOn(true);
      return;
    }

  }, [counter, breakLength, currentTimer, sessionLength])
  

  const resetValues = () => {
    setBreakLength(5);
    setSessionLength(25);
    setTimerOn(false)
    setCounter(1500)
  };

  const handleBreakDecrement = () => {
    if (breakLength > 1) {
      setBreakLength(breakLength - 1);
    }
  };

  const handleSessionIncrement = () => {
    setSessionLength(sessionLength + 1);
  };

  const handleSessionDecrement = () => {
    if (sessionLength > 1) {
      setSessionLength(sessionLength - 1);
    }
  };

  return (
    <div className="container">
      <div className="app">
        <div className="app-title">
          <h1>25 + 5 Clock</h1>
        </div>
        <div className="modifiers">
          <div className="break-length">
            <h2 className="break-title" id="break-label">
              Break Length
            </h2>
            <div className="break-buttons">
              <i
                className="fa-sharp fa-solid fa-arrow-down"
                id="break-decrement"
                onClick={handleBreakDecrement}
              ></i>
              <span className="break-length" id="break-length">
                {breakLength}
              </span>
              <i
                className="fa-sharp fa-solid fa-arrow-up"
                id="break-increment"
                onClick={() => setBreakLength(breakLength + 1)}
              ></i>
            </div>
          </div>
          <div className="session-length">
            <h2 className="session-title" id="session-label">
              Session Length
            </h2>
            <div className="session-buttons">
              <i
                className="fa-sharp fa-solid fa-arrow-down"
                id="session-decrement"
                onClick={handleSessionDecrement}
              ></i>
              <span className="session-length" id="session-length">
                {sessionLength}
              </span>
              <i
                className="fa-sharp fa-solid fa-arrow-up"
                id="session-increment"
                onClick={handleSessionIncrement}
              ></i>
            </div>
          </div>
        </div>
        <div className="timer">
          <div className="timer-wrapper">
            <div id="timer-label">{currentTimer}</div>
            <div id="time-left">{`${minutes}:${seconds}`}</div>
          </div>
        </div>
        <div className="controls">
          <button id="start_stop" onClick={handleStartStop}>
            <i className="fa-solid fa-play"></i>
            <i className="fa-solid fa-stop"></i>
          </button>
          <button id="reset">
            <i className="fa-solid fa-arrows-rotate" onClick={resetValues}></i>
          </button>
        </div>
        <div className="author">
          <p>Created by:</p>
          <a href="https://github.com/Robertron624" target="_blank">
            <p>Robertron624</p>
          </a>
        </div>
        <audio
          id="beep"
          preload="auto"
          src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
        ></audio>
      </div>
    </div>
  );
}

export default App;
