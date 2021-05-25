import React from 'react';
import '../Styling/Overlay.css';

const Overlay = ({ socialColor }) => {
  return (
    <>
      <div
        className='overlay-social'
        style={{
          color: 'white',
        }}
      >
        <span className='navbar-area'>
          <span className='logo'></span>
          <span className='icons'>
            <i className='fab fa-facebook-square fa-2x'></i>
            <i className='fab fa-instagram fa-2x'></i>
          </span>
        </span>
      </div>
      <div className='overlay-lines'>
        <span></span>
        <span></span>
        <span></span>
        <span className='not-mobile'></span>
        <span className='not-mobile'></span>
        <span className='not-mobile'></span>
      </div>
    </>
  );
};

export default Overlay;
