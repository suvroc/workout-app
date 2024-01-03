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
      <div class="fixed-bottom">
        <CountdownTimer initialTime={time * 10} onComplete={() => setIsTimerComplete(true)} />
        <div class="progress" style={{"height": "20 px"}}>
          <div class="progress-bar" role="progressbar" style={{width : progress*100}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">{progress*100} %</div>
        </div>
      </div>
    </div>
  );
};

export default ExerciseDisplay;
