import React from 'react';
import './Accelerons.css';
import DataAccelerons from './data-object-file/accelerons-data';
// Importing Components
import AboutUs from './Components/AboutUs';
import Participation from './Components/Participation';
import TeamMembers from './Components/TeamMembers';
import Results from './Components/Results';

const Accelerons = () => {
  return (
    <>
      <AboutUs accelerons={DataAccelerons} />
      <Participation accelerons={DataAccelerons} />
      <TeamMembers accelerons={DataAccelerons} />
      <Results accelerons={DataAccelerons} />
    </>
  );
};

export default Accelerons;
