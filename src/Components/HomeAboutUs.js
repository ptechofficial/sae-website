import React from 'react';
import '../Styling/HomeAboutUs.css';

const HomeAboutUs = ({ itemColor, teamData }) => {
  let contentBodyColor = 'rgba(34, 34, 34, 1)';
  if (itemColor === 'white') {
    contentBodyColor = 'rgb(131, 131, 131)';
  }
  return (
    <>
      <section
        className='one-card home-about-us'
        style={{
          color: itemColor,
        }}
      >
        <div className='left-side'>
          <div className='card-counter'>
            <span className='center-items'>
              <div className='counter'></div>
            </span>
          </div>
          <div className='title-line'>
            <span className='vertical-header center-items'>
              <div style={{ transform: 'rotate(-90deg)' }}>SAE NIT</div>
            </span>
            <span className='vertical-line'>
              <span className='left-box'></span>
              <span className='right-box'></span>
            </span>
          </div>
        </div>
        <div className='content'>
          <div className='image-area'>Image here</div>
          <div className='content-body'>
            <div className='content-header'>
              <p>
                who are <b style={{ color: teamData.accentColor }}>WE?</b>
              </p>
            </div>
            <div className='content-data'>
              <span>
                SAE NIT Kurukshetra is a collegiate club affiliated under SAE
                India, which is a wing of SAE International on a national scale.
                The club is a platform for budding engineers to work together
                and arrive at solutions to the problems in the mobility field.
                It forms a link between naive talents and pioneers of the
                industry. Valuing the interdisciplinary nature of the automobile
                sector, UG students from various branches strive to innovate
                better under the guidance of our proffessors here at NIT
                Kurukshetra. <br /> <br />
                We bring our skills in competition in various events like:{' '}
              </span>
              <span className='comp-names'>
                <ul>
                  <li>BAJA SAE</li>
                  <li>ATVC</li>
                  <li>SUPRA</li>
                  <li>Formula Bharat</li>
                </ul>
              </span>
            </div>
          </div>
        </div>
        <div className='right-side align-right'>
          <div className='social-icons'>
            {/* <i className='fab fa-facebook-square fa-2x'></i>
          <i className='fab fa-instagram fa-2x'></i> */}
          </div>
        </div>
      </section>
    </>
  );
};
export default HomeAboutUs;
