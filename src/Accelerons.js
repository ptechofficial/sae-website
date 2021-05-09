import React, { Component, useState } from 'react';
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
import $ from 'jquery';
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react-dom';

const Accelerons = () => {
  const bgColor = 'white';
  const itemColor = 'black';

  return (
    <article
      style={{
        backgroundColor: bgColor,
      }}
    >
      <Overlay />
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
// class Accelerons extends Component {
//   constructor(props) {
//     // };
//     super(props);
//   }
//   componentDidMount = () => {
//     $(window).on('scroll touchmove', function () {
//       if ($(document).scrollTop() >= $('.about-us').position().top) {
//         UpdateColors('white');
//         // $('article').css('background', 'white');
//       }
//       if ($(document).scrollTop() >= $('.comp-details').position().top) {
//         $('article').css('background', 'white');
//       }
//       if ($(document).scrollTop() >= $('.team-member').position().top) {
//         UpdateColors('black');
//       }
//       if ($(document).scrollTop() >= $('.results').position().top) {
//         $('article').css('background', 'white');
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
