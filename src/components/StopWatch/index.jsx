import React, { useEffect } from 'react';
import { useState } from 'react';

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const handlerClick = () => {
    setIsRunning(!isRunning);
  }
  useEffect(() => {
    let idInterval = null;
    if (isRunning) {
      console.log('start');
      idInterval = setInterval(() => {
        setTime(time => time + 1);
      }, 1000)
    }
    return () => {
      console.log('stop');
      clearInterval(idInterval);
    }
  }, [isRunning])
  return (
    <div>
      <h2>Stop Watch</h2>
      <h2>time: {time}</h2>
      <button onClick={handlerClick}>{isRunning ? 'stop' : 'start'}</button>
    </div>
  );
}

export default StopWatch;
