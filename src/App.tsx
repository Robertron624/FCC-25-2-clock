import { useState } from 'react'
import './App.css'

function App() {
  const [breakLength, setBreakLength] = useState(5)
  const [sessionLength, setSessionLength] = useState(25)
  const [timeLeft, setTimeLeft] = useState('25:00')
  return (
    <div className="container">
      <div className="app">
        <div className='app-title'>
          <h1>25 + 5 Clock</h1>
        </div>
        <div className="modifiers">
          <div className="break-length">
              <h2 className="break-title" id='break-label'>Break Length</h2>
              <div className="break-buttons">
                <i className="fa-sharp fa-solid fa-arrow-down" id='break-decrement'></i>
                <span className="break-length" id='break-length'>{breakLength}</span>
                <i className="fa-sharp fa-solid fa-arrow-up" id='break-increment'></i>
              </div>
          </div>
          <div className="session-length">
              <h2 className="session-title" id='session-label'>Session Length</h2>
              <div className="session-buttons">
                <i className="fa-sharp fa-solid fa-arrow-down" id='session-decrement'></i>
                <span className="session-length" id='session-length'>{sessionLength}</span>
                <i className="fa-sharp fa-solid fa-arrow-up" id='session-increment'></i>
              </div>
          </div>
        </div>
        <div className="timer">
          <div className="timer-wrapper">
            <div id="timer-label">Session</div>
            <div id="time-left">{timeLeft}</div>
          </div>
        </div>
        <div className="controls">
          <button id='start_stop'>
          <i className="fa-solid fa-play"></i>
          <i className="fa-solid fa-stop"></i>
          </button>
          <button id="reset">
          <i className="fa-solid fa-arrows-rotate"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
