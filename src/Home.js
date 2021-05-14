import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import DataHome from './data-object-file/home-data';
import Landing from './Components/Landing';
import HomeAboutUs from './Components/HomeAboutUs';
import Footer from './Components/Footer';

import Teams from './Components/Teams';
const Home = () => {
  // console.log(DataHome);
  return (
    <>
      <Landing landing={DataHome.landing} teamName='sae' />
      {/* <Teams /> */}
      <HomeAboutUs itemColor={'black'} teamData={DataHome} />
      <Footer
        accentColor={DataHome.accentColor}
        footerColors={DataHome.footerColors}
      />
      {/* <Link to='/accelerons'> Accelerons</Link>
      <Link to='/nitrox'> Nitrox</Link> */}
    </>
  );
};

export default Home;
