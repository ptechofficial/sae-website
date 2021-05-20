import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import DataHome from './data-object-file/home-data';

import Overlay from './Components/Overlay';
import Landing from './Components/Landing';
import HomeAboutUs from './Components/HomeAboutUs';
import Leads from './Components/Leads';
import Footer from './Components/Footer';

import Teams from './Components/Teams';
const Home = () => {
  return (
    <>
      <Overlay socialColor='black' />
      <Landing landing={DataHome.landing} teamName='sae' />
      <HomeAboutUs itemColor={'black'} teamData={DataHome} />
      <Leads />
      <Footer
        accentColor1={DataHome.accentColor}
        accentColor2={DataHome.accentColor_alt}
        footerColors={DataHome.footerColors}
      />
      {/* <Link to='/accelerons'> Accelerons</Link>
      <Link to='/nitrox'> Nitrox</Link> */}
    </>
  );
};

export default Home;
