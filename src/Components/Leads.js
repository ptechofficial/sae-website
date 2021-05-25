import React from 'react';

import '../Styling/Leads.css';

const Profile = ({ profileData }) => {
  return (
    <div className='person-profile'>
      <span
        className='image-prof'
        style={{ backgroundImage: `url(${profileData.image})` }}
      ></span>
      <span className='name-prof'>{profileData.name}</span>
      <span className='desg-prof'>{profileData.designation}</span>
    </div>
  );
};

const Leads = ({ leadsData }) => {
  // console.log(leadsData);
  return (
    <>
      <section className='testing'>
        <section className='prof-inch'>
          <div className='title-profile'>PROFESSOR INCHARGE</div>
          {leadsData.professors.map((profileData, index) => {
            return <Profile key={profileData.id} profileData={profileData} />;
          })}

          <div className='title-profile'>MANAGER</div>
          {leadsData.teamLeads.map((profileData, index) => {
            return <Profile key={profileData.id} profileData={profileData} />;
          })}
        </section>
      </section>
    </>
  );
};

export default Leads;
