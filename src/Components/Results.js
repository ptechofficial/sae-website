import React, { useState } from 'react';
import '../Styling/Results.css';

const Results = ({ itemColor, teamData }) => {
  const [resultData, setResultData] = useState(teamData.results[0]);
  const results = teamData.results;
  return (
    <div
      className='one-card results'
      style={{
        color: itemColor,
      }}
    >
      <div className='left-side'>
        <div className='card-counter'>
          <span className='center-items'>
            <div className='counter'>04</div>
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
            <div style={{ transform: 'rotate(-90deg)' }}>RESULTS</div>
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
              our <b style={{ color: teamData.accentColor }}>LEGACY</b>
            </p>
          </span>
        </div>
        <div className='content-body'>
          <div className='timeline-years center-items'>
            {results.map((result, index) => {
              if (index < 7) {
                return (
                  <span
                    key={index}
                    className='center-items year'
                    style={{
                      color: itemColor,
                    }}
                  >
                    <p
                      onClick={() => {
                        setResultData(results[index]);
                      }}
                    >
                      {result.year}
                    </p>
                  </span>
                );
              } else return;
            })}
          </div>
          <div className='timeline-data'>
            <div
              className='year-img'
              style={{ backgroundImage: `url(${resultData.img_src})` }}
              data-aos='fade-in'
            ></div>
            <div className='year-achv'>
              <div className='comp-name'>
                <div
                  className='comp-title'
                  style={{ textDecoration: 'underline' }}
                >
                  {teamData.participate.firstName}
                </div>
                <div className='comp-data' data-aos='fade-up'>
                  {resultData.firstComp}
                </div>
              </div>
              <div className='comp-name'>
                <div
                  className='comp-title'
                  style={{ textDecoration: 'underline' }}
                >
                  {teamData.participate.secondName}
                </div>
                <div className='comp-data' data-aos='fade-up'>
                  {resultData.secondComp}
                </div>
              </div>
            </div>
          </div>
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

export default Results;
