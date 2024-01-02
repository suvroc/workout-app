import React, { useState } from 'react';
import ExerciseSetsList from './components/ExerciseSetsList';
import ExerciseDisplay from './components/ExerciseDisplay';
import exerciseData from './data.json';

const App = () => {
  const [selectedSet, setSelectedSet] = useState(null);
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);

  const handleSelectSet = (exerciseSet) => {
    setSelectedSet(exerciseSet);
    setCurrentExerciseIndex(0);
  };

  const handleNextExercise = () => {
    if (currentExerciseIndex < selectedSet.steps.length - 1) {
      setCurrentExerciseIndex(currentExerciseIndex + 1);
    } else {
      setSelectedSet(null);
    }
  };

  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand mb-0 h1">Exercise App</span>
      </nav>
      <div className="container-fluid">
        {!selectedSet ? (
          <ExerciseSetsList exerciseSets={exerciseData} onSelectSet={handleSelectSet} />
        ) : (
          <ExerciseDisplay
            exercise={selectedSet.steps[currentExerciseIndex]}
            onNextExercise={handleNextExercise}
          />
        )}
      </div>
    </div>
  );
};

export default App;


// import './App.css';
// import Excercise from './components/excercise.js'
// import Countdown from 'react-countdown';
// import CountdownApiExample from './components/CountdownApiExample.js';
// import CountdownTimer from './components/CountdownTimer.js';

// const Completionist = () => <button>Next</button>;

// function start() {

// }

// function App() {
//   return (
//     <div className="App">
//       {/* <header className="App-header">
        
        
//       </header> */}
//       <Excercise excerciseData={{"description": "Rowerek","image": "logo192.png"}}></Excercise>
//       <Countdown date={Date.now() + 4000} autostart="false" >
//         <Completionist />
//     </Countdown>
    
//       <button onClick={start()}>Start</button>
//       <button>Start again</button>
//       <CountdownApiExample></CountdownApiExample>
//       <CountdownTimer></CountdownTimer>
      
//     </div>
//   );
// }

// export default App;