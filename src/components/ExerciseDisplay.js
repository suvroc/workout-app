import React, { useState, useEffect } from 'react';
import CountdownTimer from './CountdownTimer';

const ExerciseDisplay = ({ exercise, onNextExercise, progress }) => {
  const { description, image, time } = exercise;
  const [isTimerComplete, setIsTimerComplete] = useState(false);

  useEffect(() => {
    if (isTimerComplete) {
      onNextExercise();
      setIsTimerComplete(false);
    }
  }, [isTimerComplete, onNextExercise]);

  return (
    <div className="container mt-12">
      <h2 className="mb-4">{description}</h2>
      <img
        src={image}
        alt={description}
        className="img-fluid rounded mx-auto d-block mb-3"
        //style={{ maxWidth: '200px', maxHeight: '200px' }}
      />
      <CountdownTimer initialTime={time * 10} onComplete={() => setIsTimerComplete(true)} />
      <div>{progress}</div>
    </div>
  );
};

export default ExerciseDisplay;
