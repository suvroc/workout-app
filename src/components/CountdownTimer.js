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
    //setSeconds(initialTime);
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
  }, [isActive, onComplete, initialTime]);

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
    <div class="d-grid gap-2 col-12 mx-auto">

      <h2 class="row justify-content-center" >{seconds} seconds</h2>
      
      <div class="row justify-content-center">
        <button type="button" className="btn btn-lg btn-success col-3 m-2" onClick={handleStart}><i class="bi bi-play-fill"></i></button>
        <button type="button" className="btn btn-lg btn-secondary col-3 m-2" onClick={handlePause}><i class="bi bi-pause-fill"></i></button>
        <button type="button" className="btn btn-lg btn-secondary col-3 m-2" onClick={handleReset}><i class="bi bi-arrow-clockwise"></i></button>
      </div>
    </div>
  );
};

export default CountdownTimer;
