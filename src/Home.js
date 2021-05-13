import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import DataHome from './data-object-file/home-data';
import HomeLanding from './Components/HomeLanding';

import Teams from './Components/Teams';
const Home = () => {
  console.log(DataHome);
  return (
    <>
      {/* <Teams /> */}
      <HomeLanding landing={DataHome.landing} teamName='sae' />
      <Link to='/accelerons'> Accelerons</Link>
      <Link to='/nitrox'> Nitrox</Link>
    </>
  );
};

export default Home;
