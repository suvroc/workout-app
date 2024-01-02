import React from 'react';

const ExerciseSetsList = ({ exerciseSets, onSelectSet }) => {
  return (
    <div className="container mt-4">
      <h2 className="mb-4">Exercise Sets</h2>
      <div className="list-group">
        {exerciseSets.map((set, index) => (
          <button
            key={index}
            className="list-group-item list-group-item-action"
            onClick={() => onSelectSet(set)}
          >
            {set.setName}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ExerciseSetsList;
