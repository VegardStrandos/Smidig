import React, { useState, useEffect } from 'react';
import './index.css';

function Timer() {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const handleToggle = () => {
    setIsRunning(!isRunning);
  };

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600)
      .toString()
      .padStart(2, '0');
    const minutes = Math.floor((time % 3600) / 60)
      .toString()
      .padStart(2, '0');
    const seconds = (time % 60).toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };
  const buttonStyle = {
    backgroundColor: isRunning ? '#E20000' : '#07FF11',
    color: 'white',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
  };

  return (
    <div>
      <div id="TidTxt">{formatTime(timer)}</div>

<div>
      <button id="GoLive" style={buttonStyle} onClick={handleToggle}>
        {isRunning ? 'End Live' : 'Go Live'}  </button>
      </div>
    </div>
  );
}

export default Timer;