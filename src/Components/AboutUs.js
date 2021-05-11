import React from 'react';
import '../Styling/AboutUs.css';

const AboutUs = ({ itemColor, teamData }) => {
  let contentBodyColor = 'rgba(34, 34, 34, 1)';
  if (itemColor === 'white') {
    contentBodyColor = 'rgb(131, 131, 131)';
  }
  return (
    <div
      className='one-card about-us'
      style={{
        color: itemColor,
      }}
    >
      <div className='left-side'>
        <div className='card-counter'>
          <span className='center-items'>
            <div className='counter'>01</div>
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
            <div style={{ transform: 'rotate(-90deg)' }}>ABOUT US</div>
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
      <div className='content'>
        <div data-aos='fade-up' className='content-header'>
          <span>
            <p>
              we are{' '}
              <b style={{ color: teamData.accentColor }}>
                {teamData.name.toUpperCase()}
              </b>
            </p>
          </span>
        </div>
        <div
          data-aos='fade-up'
          className='content-body'
          style={{
            color: contentBodyColor,
          }}
        >
          <span>{teamData.aboutUs.contentBody}</span>
          <span
            className='comp-names'
            style={{ borderLeft: '0.2rem solid ' + teamData.accentColor }}
          >
            <span className='first-comp'>
              {' '}
              {teamData.aboutUs.competitiions.first}{' '}
            </span>
            <span className='second-comp'>
              {' '}
              {teamData.aboutUs.competitiions.second}{' '}
            </span>
          </span>
          <img
            data-aos='fade-in'
            src={teamData.aboutUs.imgSrc}
            alt=''
            className='team-car-img'
          />
        </div>
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

export default AboutUs;
