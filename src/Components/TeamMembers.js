import React from 'react';
import '../Styling/TeamMembers.css';

const TeamPerson = ({ personData }) => {
  return (
    <li>
      <div className='person' data-aos='fade-up'>
        <span
          className='person-img'
          style={{ backgroundImage: `url(${personData.img_src})` }}
        >
          {' '}
        </span>
        <span className='person-details'>
          <span className='person-name center-items'>{personData.name}</span>
          <span className='person-desig center-items'> {personData.desg} </span>
        </span>
      </div>
    </li>
  );
};

const TeamMembers = ({ itemColor, accelerons }) => {
  const peopleArray = accelerons.teamMembers;
  return (
    <div
      className='one-card team-member'
      style={{
        color: itemColor,
      }}
    >
      <div className='left-side'>
        <div className='card-counter'>
          <span className='center-items'>
            <div className='counter'>03</div>
            <hr
              style={{
                height: ' 0.1px',
                width: '60%',
                backgroundColor: 'white',
              }}
            />
          </span>
        </div>
        <div className='title-line'>
          <span className='vertical-header center-items'>
            <div style={{ transform: 'rotate(-90deg)' }}>TEAM MEMBERS</div>
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
        <div className='content-header'>
          <span data-aos='fade-left'>
            <p>
              meet our{' '}
              <b
                style={{
                  color: accelerons.accentColor,
                }}
              >
                TEAM
              </b>
            </p>
          </span>
        </div>
        <div className='content-body'>
          {/* <!-- Person --> */}
          <ul className='people'>
            {peopleArray.map((dataPerson, index) => {
              return <TeamPerson key={index} personData={dataPerson} />;
            })}
          </ul>

          <div className='foot-empty'></div>
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

export default TeamMembers;
