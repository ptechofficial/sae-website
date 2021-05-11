import React, { useState, useEffect } from 'react';
import './Nitrox.css';
import DataTeam from './data-object-file/nitrox-data';
import $ from 'jquery';

// Importing Components
import Overlay from './Components/Overlay';
import Landing from './Components/Landing';
import AboutUs from './Components/AboutUs';
import Participation from './Components/Participation';
import TeamMembers from './Components/TeamMembers';
import Results from './Components/Results';
import Gallery from './Components/Gallery';
import Footer from './Components/Footer';
import PtechScroll from './Components/ptech-scroll';

const Nitrox = () => {
  const [colorValues, setColorValues] = useState({
    bgColor: 'white',
    itemColor: 'black',
    socialColor: 'white',
    newTrans: 0,
  });
  useEffect(() => {
    $(window).on('scroll touchmove', function () {
      let scrollValue = $(document).scrollTop();

      if (scrollValue >= $('.gallery').position().top - 200) {
        // console.log('gallery');
        setColorValues({
          bgColor: 'black',
          itemColor: 'white',
          socialColor: 'white',
          newTrans: 4,
        });
      } else if (scrollValue >= $('.results').position().top - 200) {
        // console.log('results');
        setColorValues({
          bgColor: 'white',
          itemColor: 'black',
          socialColor: 'black',
          newTrans: 3,
        });
      } else if (scrollValue >= $('.team-member').position().top - 200) {
        // console.log('team member');
        setColorValues({
          bgColor: 'black',
          itemColor: 'white',
          socialColor: 'white',
          newTrans: 2,
        });
      } else if (scrollValue >= $('.comp-details').position().top - 200) {
        // console.log('comp details');
        setColorValues({
          bgColor: 'white',
          itemColor: 'black',
          socialColor: 'black',
          newTrans: 1,
        });
      } else if (scrollValue >= $('.about-us').position().top - 200) {
        // console.log('about us');
        setColorValues({
          bgColor: 'white',
          itemColor: 'black',
          socialColor: 'black',
          newTrans: 0,
        });
      } else if (scrollValue < $('.about-us').position().top - 200) {
        // console.log('landing');
        setColorValues({
          bgColor: 'white',
          itemColor: 'black',
          socialColor: 'white',
          newTrans: 0,
        });
      }
    });
  }, []);

  return (
    <>
      <article
        style={{
          backgroundColor: colorValues.bgColor,
        }}
      >
        <Overlay socialColor={colorValues.socialColor} />
        <PtechScroll
          newTrans={colorValues.newTrans}
          bgColor={colorValues.bgColor}
          itemColor={colorValues.itemColor}
          accentColor={DataTeam.accentColor}
          cntItems={5}
        />
        <Landing landing={DataTeam.landing} teamName={DataTeam.name} />
        <AboutUs itemColor={colorValues.itemColor} teamData={DataTeam} />
        <Participation itemColor={colorValues.itemColor} teamData={DataTeam} />
        <TeamMembers itemColor={colorValues.itemColor} teamData={DataTeam} />
        <Results itemColor={colorValues.itemColor} teamData={DataTeam} />
        <Gallery itemColor={colorValues.itemColor} />
        <Footer
          accentColor={DataTeam.accentColor}
          footerColors={DataTeam.footerColors}
        />
      </article>
    </>
  );
};

export default Nitrox;
