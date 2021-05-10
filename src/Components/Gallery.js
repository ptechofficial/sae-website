import React from 'react';
import '../Styling/Gallery.css';

const Gallery = ({ itemColor }) => {
  return (
    <div
      className='one-card gallery'
      style={{
        color: itemColor,
      }}
    >
      <div className='left-side'>
        <div className='card-counter'>
          <span className='center-items'>
            <div className='counter'>05</div>
            <hr
              style={{
                height: '0.1px',
                width: '60%',
                backgroundColor: itemColor,
              }}
            />
          </span>
        </div>
        <div className='title-line'>
          <span className='vertical-header center-items'>
            <div style={{ transform: 'rotate(-90deg)' }}>PHOTOS</div>
          </span>
          <span className='vertical-line'>
            <span className='left-box'></span>
            <span className='right-box'></span>
          </span>
        </div>
      </div>
      <div className='content'>
        <div className='content-body'>
          <span>Photos here</span>
        </div>
      </div>
      <div className='right-side align-right'>
        <div className='social-icons'></div>
      </div>
    </div>
  );
};

export default Gallery;
