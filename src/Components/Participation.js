import React from 'react';
import '../Styling/Participation.css';

const Participation = ({ itemColor, teamData }) => {
  let contentBodyColor = 'rgba(34, 34, 34, 1)';
  if (itemColor === 'white') {
    contentBodyColor = 'rgb(131, 131, 131)';
  }
  return (
    <div
      className='one-card comp-details'
      style={{
        color: itemColor,
      }}
    >
      <div className='left-side'>
        <div className='card-counter'>
          <span className='center-items'>
            <div className='counter'>02</div>
            <hr
              style={{
                height: '0.1px',
                width: ' 60%',
                backgroundColor: itemColor,
              }}
            />
          </span>
        </div>
        <div className='title-area'>
          <div className='title-line'>
            <span className='vertical-header center-items'>
              <div style={{ transform: 'rotate(-90deg)' }}>COMPETITIONS</div>
            </span>
            <span
              className='vertical-line'
              style={{
                color: itemColor,
              }}
            >
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
              <b style={{ color: teamData.accentColor }}>PARTICIPATE?</b>
            </p>
          </span>
        </div>
        <div
          className='content-body'
          style={{
            color: contentBodyColor,
          }}
        >
          <div className='content-first' data-aos='fade-up'>
            <span className='first-header'>
              <u>{teamData.participate.firstName}</u>
            </span>
            <span className='first-info'>
              {teamData.participate.firstInfo_main}
              <div
                className='first-point'
                style={{ borderLeft: '0.2rem solid ' + teamData.accentColor }}
              >
                {teamData.participate.firstInfo_point}
              </div>
            </span>
            <span
              className='first-img'
              style={{
                backgroundImage: `url(${teamData.participate.firstImgSrc})`,
              }}
            ></span>
          </div>
          <div className='content-second' data-aos='fade-up'>
            <span className='second-header align-right'>
              <u>{teamData.participate.secondName}</u>
            </span>
            <span className='second-info'>
              {teamData.participate.secondInfo_main}
              <div
                className='second-point'
                style={{
                  borderRight: '0.2rem solid ' + teamData.accentColor,
                }}
              >
                {teamData.participate.secondInfo_point}
              </div>
            </span>
            <span
              className='second-img'
              style={{
                backgroundImage: `url(${teamData.participate.secondImgSrc})`,
              }}
            ></span>
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
