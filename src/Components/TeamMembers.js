import React from 'react';
import '../Styling/TeamMembers.css';

const TeamPerson = ({ personData }) => {
  return (
    <li>
      <div className='person'>
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

const TeamMembers = ({ accelerons }) => {
  return (
    <div className='one-card team-member'>
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
          <span className='vertical-line'>
            <span className='left-box'></span>
            <span className='right-box'></span>
          </span>
        </div>
      </div>
      <div className='content'>
        <div className='content-header'>
          <span>
            <p>
              meet our <b>TEAM</b>
            </p>
          </span>
        </div>
        <div className='content-body'>
          {/* <!-- Person --> */}
          <ul className='people'>
            <TeamPerson key='1' personData={accelerons.teamMembers} />
            <TeamPerson key='2' personData={accelerons.teamMembers} />
            <TeamPerson key='3' personData={accelerons.teamMembers} />
            <TeamPerson key='4' personData={accelerons.teamMembers} />
            <TeamPerson key='5' personData={accelerons.teamMembers} />
            <TeamPerson key='6' personData={accelerons.teamMembers} />
            <TeamPerson key='7' personData={accelerons.teamMembers} />
            <TeamPerson key='8' personData={accelerons.teamMembers} />
            <TeamPerson key='9' personData={accelerons.teamMembers} />
            <TeamPerson key='10' personData={accelerons.teamMembers} />
            <TeamPerson key='11' personData={accelerons.teamMembers} />
            <TeamPerson key='12' personData={accelerons.teamMembers} />
            <TeamPerson key='13' personData={accelerons.teamMembers} />
            <TeamPerson key='14' personData={accelerons.teamMembers} />
            <TeamPerson key='15' personData={accelerons.teamMembers} />
            <TeamPerson key='16' personData={accelerons.teamMembers} />
            <TeamPerson key='17' personData={accelerons.teamMembers} />
            <TeamPerson key='18' personData={accelerons.teamMembers} />
          </ul>

          <div className='foot-empty'></div>
        </div>
      </div>
      <div className='right-side align-right'>
        <div className='social-icons'>
          <i className='fab fa-facebook-square fa-2x'></i>
          <i className='fab fa-instagram fa-2x'></i>
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
