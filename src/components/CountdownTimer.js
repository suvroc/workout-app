import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ initialTime, onComplete }) => {
  const [seconds, setSeconds] = useState(initialTime);
  const [isActive, setIsActive] = useState(false);

useEffect(() => {
  setIsActive(false);
  setSeconds(initialTime);
}, [initialTime]);

  useEffect(() => {
    let interval;
    setSeconds(initialTime);
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds === 0) {
            clearInterval(interval);
            setIsActive(false);
            if (onComplete) {
              onComplete();
            }
            return 0;
          }
          return prevSeconds - 1;
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, onComplete]);

  const handleStart = () => {
    setIsActive(true);
  };

  const handlePause = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    setIsActive(false);
    setSeconds(initialTime);
  };

  return (
    <div>
      <div>Time Remaining: {seconds} seconds</div>
      <button type="button" className="btn btn-lg btn-success " onClick={handleStart}>▶</button>
      <button type="button" className="btn btn-lg btn-secondary" onClick={handlePause}>⏸</button>
      <button type="button" className="btn btn-lg btn-secondary" onClick={handleReset}>🔁</button>
    </div>
  );
};

export default CountdownTimer;
