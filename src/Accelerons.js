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
import Footer from './Components/Footer';
import PtechScroll from './Components/ptech-scroll';

const Accelerons = () => {
  const [bgColor, setBgColor] = useState('white');
  const [itemColor, setItemColor] = useState('black');
  const [socialColor, setSocialColor] = useState('white');
  const [newTrans, setNewTrans] = useState(0);
  useEffect(() => {
    $(window).on('scroll touchmove', function () {
      let scrollValue = $(document).scrollTop();
      if (scrollValue < $('.about-us').position().top - 200) {
        setSocialColor('white');
      }
      if (scrollValue >= $('.about-us').position().top - 200) {
        // console.log('about-us');
        setBgColor('white');
        setItemColor('black');
        setSocialColor('black');
        setNewTrans(0);
      }
      if (scrollValue > $('.comp-details').position().top - 200) {
        // console.log('comp-details');
        setBgColor('white');
        setItemColor('black');
        setSocialColor('black');
        setNewTrans(1);
      }
      if (scrollValue > $('.team-member').position().top - 200) {
        // console.log('team-member');
        setBgColor('black');
        setItemColor('white');
        setSocialColor('white');
        setNewTrans(2);
      }
      if (scrollValue > $('.results').position().top - 200) {
        // console.log('results');
        setBgColor('white');
        setItemColor('black');
        setSocialColor('black');
        setNewTrans(3);
      }
    });
  }, []);

  return (
    <article
      style={{
        backgroundColor: bgColor,
      }}
    >
      <Overlay socialColor={socialColor} />
      <PtechScroll
        newTrans={newTrans}
        bgColor={bgColor}
        itemColor={itemColor}
        accentColor={'red'}
        cntItems={4}
      />
      <Landing landing={DataAccelerons.landing} />
      <AboutUs itemColor={itemColor} accelerons={DataAccelerons} />
      <Participation itemColor={itemColor} accelerons={DataAccelerons} />
      <TeamMembers itemColor={itemColor} accelerons={DataAccelerons} />
      <Results itemColor={itemColor} accelerons={DataAccelerons} />
      <Footer
        accentColor={DataAccelerons.accentColor}
        footerColors={DataAccelerons.footerColors}
      />
    </article>
  );
};
// let bgColor = 'white';
// let itemColor = 'black';
// const UpdateColors = ({ newBgColor }) => {
//   const [newRender, setNewRender] = useState(bgColor);
//   if (bgColor !== newBgColor) {
//     bgColor = newBgColor;
//     if (bgColor === 'black') {
//       itemColor = 'white';
//     } else {
//       itemColor = 'black';
//     }
//     console.log('newRender');
//     setNewRender(bgColor);
//   }
//   return;
// };
// };
// const [bgColor, setBgColor] = useState('black');
// class Accelerons extends Component {
//   constructor(props) {
//     super(props);
//   }
//   componentDidMount = () => {
//     $(window).on('scroll touchmove', function () {
//       if ($(document).scrollTop() >= $('.about-us').position().top) {
//         setBgColor('red');
//       }

//     });
//   };
//   render() {
//     // const [bgColor, setBgColor] = useState('black');
//     // const [itemColor, setItemColor] = useState('white');
//     return (
//       <article
//         style={{
//           backgroundColor: bgColor,
//         }}
//       >
//         <Overlay />
//         <Landing landing={DataAccelerons.landing} />
//         <AboutUs itemColor={itemColor} accelerons={DataAccelerons} />
//         <Participation itemColor={itemColor} accelerons={DataAccelerons} />
//         <TeamMembers itemColor={itemColor} accelerons={DataAccelerons} />
//         <Results itemColor={itemColor} accelerons={DataAccelerons} />
//         <Footer
//           accentColor={DataAccelerons.accentColor}
//           footerColors={DataAccelerons.footerColors}
//         />
//       </article>
//     );
//   }
// }
export default Accelerons;
