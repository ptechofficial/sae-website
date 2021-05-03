import React from 'react';
import '../Styling/Landing.css';
import frontImg from '../Assets/landingAccelerons_front.png';

const Landing = ({ imgSrc }) => {
  console.log(imgSrc);
  return (
    <>
      <section className='landing'>
        <div
          className='overlay-img'
          style={{
            backgroundImage: `url(${frontImg})`,
          }}
        ></div>
        <div className='landing-text'>
          <span className='head1'> Team </span>
          <span className='head2'>Accelerons</span>
        </div>
        <div className='arrow bounce'>
          <i className='fas fa-angle-double-down fa-2x'></i>
        </div>
      </section>
      <script>
        {
          (window.onscroll = () => {
            let pos = window.scrollY;
            document.querySelector('.landing-text').style.left = `${
              350 + pos / 1
            }px`;
          })
        }
      </script>
    </>
  );
};

export default Landing;
