import { useState } from 'react';

export default function Excercise({ excerciseData }) {
//    const [excerciseData] = useState('');
//   const foundVideos = filterVideos(videos, searchText);
  return (
    <>
     <img src={excerciseData.image}/>
     <div>{excerciseData.description}</div>
    </>
  );
}