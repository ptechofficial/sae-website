import React from 'react';
import '../Styling/Participation.css';

const Participation = ({ accelerons }) => {
  console.log(accelerons.participate);
  return (
    <div className='one-card comp-details'>
      <div className='left-side'>
        <div className='card-counter'>
          <span className='center-items'>
            <div className='counter'>02</div>
            <hr
              style={{
                height: '0.1px',
                width: ' 60%',
                backgroundColor: 'black',
              }}
            />
          </span>
        </div>
        <div className='title-area'>
          <div className='title-line'>
            <span className='vertical-header center-items'>
              <div style={{ transform: 'rotate(-90deg)' }}>COMPETITIONS</div>
            </span>
            <span className='vertical-line'>
              <span className='left-box'></span>
              <span className='right-box'></span>
            </span>
          </div>
        </div>
      </div>
      <div className='content'>
        <div className='content-header'>
          <span>
            <p>
              where do we{' '}
              <b style={{ color: accelerons.accentColor }}>PARTICIPATE?</b>
            </p>
          </span>
        </div>
        <div className='content-body'>
          <div className='content-supra'>
            <span className='supra-header'>
              <u>{accelerons.participate.firstName}</u>
            </span>
            <span className='supra-info'>
              {accelerons.participate.firstInfo_main}
              <div
                className='supra-point'
                style={{ borderLeft: '0.2rem solid ' + accelerons.accentColor }}
              >
                {accelerons.participate.firstInfo_point}
              </div>
            </span>
            <span className='supra-img'> supra img </span>
          </div>
          <div className='content-fbharat'>
            <span className='fbharat-header align-right'>
              <u>{accelerons.participate.secondName}</u>
            </span>
            <span className='fbharat-info'>
              {accelerons.participate.secondInfo_main}
              <div
                className='fbharat-point'
                style={{
                  borderRight: '0.2rem solid ' + accelerons.accentColor,
                }}
              >
                {accelerons.participate.secondInfo_point}
              </div>
            </span>
            <span className='fbharat-img'> supra img </span>
          </div>
        </div>
        <div className='empty-area'></div>
      </div>
      <div className='right-side align-right'>
        <div className='social-icons'>
          {/* <i className='fab fa-facebook-square fa-2x'></i>
          <i className='fab fa-instagram fa-2x'></i> */}
        </div>
      </div>
    </div>
  );
};

export default Participation;
