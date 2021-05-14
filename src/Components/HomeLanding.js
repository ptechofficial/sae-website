import React, { useState, useEffect } from 'react';
import '../Styling/Landing.css';
import useWindowSize from './use-window-size';

const HomeLanding = ({ landing }) => {
  const size = useWindowSize();
  const [respProp, setRespProp] = useState(landing.widthFull);
  useEffect(() => {
    if (size.width >= 1000) {
      setRespProp(landing.widthFull);
    } else if (size.width < 1000 && size.width > 700) {
      setRespProp(landing.width1000);
    } else if (size.width < 700 && size.width > 400) {
      setRespProp(landing.width700);
    } else if (size.width < 400) {
      setRespProp(landing.width400);
    }
    // console.log(respProp);
  }, [
    size.width,
    landing.widthFull,
    landing.width1000,
    landing.width700,
    landing.width400,
  ]);
  return (
    <>
      <section
        className='landing'
        style={{
          backgroundImage: `url(${landing.back})`,
        }}
      >
        <div
          className='overlay-img'
          style={{
            backgroundImage: `url(${landing.front})`,
          }}
        ></div>
        <div
          className='landing-text'
          style={{
            top: respProp.top + 'px',
            left: respProp.left + 'px',
            // top: '13em',
            // left: '20em',
          }}
          data-aos='fade-up'
        >
          <span
            className='head1'
            style={{
              fontSize: respProp.fontHead1,
            }}
          >
            SAE
          </span>
          <span
            className='head2'
            style={{
              fontSize: respProp.fontHead2,
            }}
          >
            NIT Kurukshetra
          </span>
        </div>
        <div className='arrow bounce'>
          <i className='fas fa-angle-double-down fa-2x'></i>
        </div>
      </section>
      <script>
        {
          (window.onscroll = () => {
            let LandingText = document.querySelector('.landing-text');
            if (LandingText) {
              let pos = window.scrollY;
              if (size.width > 400) {
                LandingText.style.left = `${
                  parseInt(respProp.left) + pos / 3
                }px`;
              } else {
                LandingText.style.top = `${parseInt(respProp.top) + pos / 3}px`;
              }
              LandingText.style.opacity = `${1 - pos / 900}`;
            }
          })
        }
      </script>
    </>
  );
};

export default HomeLanding;
