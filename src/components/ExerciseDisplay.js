import React, { useState, useEffect } from 'react';
import CountdownTimer from './CountdownTimer';

const ExerciseDisplay = ({ exercise, onNextExercise }) => {
  const { description, image, time } = exercise;
  const [isTimerComplete, setIsTimerComplete] = useState(false);

  useEffect(() => {
    if (isTimerComplete) {
      onNextExercise();
      setIsTimerComplete(false);
    }
  }, [isTimerComplete, onNextExercise]);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">{description}</h2>
      <img
        src={image}
        alt={description}
        className="img-fluid rounded mx-auto d-block mb-3"
        style={{ maxWidth: '200px', maxHeight: '200px' }}
      />
      <div>{time}</div>
      <CountdownTimer initialTime={time * 60} onComplete={() => setIsTimerComplete(true)} />
    </div>
  );
};

export default ExerciseDisplay;
