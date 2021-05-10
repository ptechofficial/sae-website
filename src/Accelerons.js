import React, { useState, useEffect } from 'react';
import './Accelerons.css';
import DataAccelerons from './data-object-file/accelerons-data';
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

const Accelerons = () => {
  const [colorValues, setColorValues] = useState({
    bgColor: 'white',
    itemColor: 'black',
    socialColor: 'white',
    newTrans: 0,
  });
  useEffect(() => {
    $(window).on('scroll touchmove', function () {
      let scrollValue = $(document).scrollTop();
      if (scrollValue < $('.about-us').position().top - 200) {
        setColorValues({ ...colorValues, socialColor: 'white' });
      }
      if (scrollValue >= $('.about-us').position().top - 200) {
        setColorValues({
          bgColor: 'white',
          itemColor: 'black',
          socialColor: 'black',
          newTrans: 0,
        });
      }
      if (scrollValue > $('.comp-details').position().top - 200) {
        setColorValues({
          bgColor: 'white',
          itemColor: 'black',
          socialColor: 'black',
          newTrans: 1,
        });
      }
      if (scrollValue > $('.team-member').position().top - 200) {
        setColorValues({
          bgColor: 'black',
          itemColor: 'white',
          socialColor: 'white',
          newTrans: 2,
        });
      }
      if (scrollValue > $('.results').position().top - 200) {
        // console.log('results');
        setColorValues({
          bgColor: 'white',
          itemColor: 'black',
          socialColor: 'black',
          newTrans: 3,
        });
      }
      if (scrollValue > $('.gallery').position().top - 200) {
        // console.log('results');
        setColorValues({
          bgColor: 'black',
          itemColor: 'white',
          socialColor: 'white',
          newTrans: 4,
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
          accentColor={'red'}
          cntItems={5}
        />
        <Landing landing={DataAccelerons.landing} />
        <AboutUs itemColor={colorValues.itemColor} teamData={DataAccelerons} />
        <Participation
          itemColor={colorValues.itemColor}
          teamData={DataAccelerons}
        />
        <TeamMembers
          itemColor={colorValues.itemColor}
          teamData={DataAccelerons}
        />
        <Results itemColor={colorValues.itemColor} teamData={DataAccelerons} />
        <Gallery itemColor={colorValues.itemColor} />
        <Footer
          accentColor={DataAccelerons.accentColor}
          footerColors={DataAccelerons.footerColors}
        />
      </article>
    </>
  );
};

export default Accelerons;
