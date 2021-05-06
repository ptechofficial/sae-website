import React, { useState, useEffect } from 'react';
import '../Styling/Landing.css';
import useWindowSize from './use-window-size';
import frontImg from '../Assets/landingAccelerons_front.png';

const Landing = ({ landing }) => {
  const size = useWindowSize();
  // console.log(landing);

  const [respProp, setRespProp] = useState(landing.widthFull);
  // console.log('RespProp : ', respProp);
  // console.log('full');
  useEffect(() => {
    if (size.width >= 1000) {
      setRespProp(landing.widthFull);
      console.log(respProp);
    } else if (size.width < 1000 && size.width > 700) {
      setRespProp(landing.width1000);
      console.log(respProp);
    } else if (size.width < 700 && size.width > 400) {
      setRespProp(landing.width700);
      console.log(respProp);
    } else if (size.width < 400) {
      setRespProp(landing.width400);
      console.log(respProp);
    }
  });
  return (
    <>
      <section className='landing'>
        <div
          className='overlay-img'
          style={{
            backgroundImage: `url(${frontImg})`,
          }}
        ></div>
        <div
          className='landing-text'
          style={{
            top: respProp.top + 'px',
            left: respProp.left + 'px',
          }}
        >
          <span
            className='head1'
            style={{
              fontSize: respProp.fontHead1,
            }}
          >
            {' '}
            Team{' '}
          </span>
          <span
            className='head2'
            style={{
              fontSize: respProp.fontHead2,
            }}
          >
            Accelerons
          </span>
        </div>
        <div className='arrow bounce'>
          <i className='fas fa-angle-double-down fa-2x'></i>
        </div>
      </section>
      <script>
        {
          (window.onscroll = () => {
            let pos = window.scrollY;
            if (size.width > 400) {
              document.querySelector('.landing-text').style.left = `${
                parseInt(respProp.left) + pos / 3
              }px`;
            } else {
              document.querySelector('.landing-text').style.top = `${
                parseInt(respProp.top) + pos / 3
              }px`;
            }
            document.querySelector('.landing-text').style.opacity = `${
              1 - pos / 900
            }`;
          })
        }
      </script>
    </>
  );
};

export default Landing;
