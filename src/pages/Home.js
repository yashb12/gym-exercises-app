import React from 'react';
import { useState } from 'react';
import { Box } from '@mui/material';

import HeroBanner from '../components/HeroBanner';
import Exercises from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';

const Home = () => {

    const [bodyPart, setBodyPart] = useState('all');
    const [exercises, setExercises] = useState([]);
  return (
    <Box>
        <HeroBanner/>
        <SearchExercises
          setExercises={setExercises}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
        <Exercises
          setExercises={setExercises}
          exercises={exercises} 
          bodyPart={bodyPart}
        />    
    </Box>
  )
}

export default Home;
