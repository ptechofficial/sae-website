import React from 'react';
import './Accelerons.css';
import DataAccelerons from './data-object-file/accelerons-data';
// Importing Components
import Overlay from './Components/Overlay';
import Landing from './Components/Landing';
import AboutUs from './Components/AboutUs';
import Participation from './Components/Participation';
import TeamMembers from './Components/TeamMembers';
import Results from './Components/Results';
import Footer from './Components/Footer';

const Accelerons = () => {
  return (
    <>
      <Overlay />
      <Landing landing={DataAccelerons.landing} />
      <AboutUs accelerons={DataAccelerons} />
      <Participation accelerons={DataAccelerons} />
      <TeamMembers accelerons={DataAccelerons} />
      <Results accelerons={DataAccelerons} />
      <Footer
        accentColor={DataAccelerons.accentColor}
        footerColors={DataAccelerons.footerColors}
      />
    </>
  );
};

export default Accelerons;
