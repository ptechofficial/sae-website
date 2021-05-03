import React, { useState } from 'react';
import '../Styling/Results.css';

const Results = ({ accelerons }) => {
  const [resultData, setResultData] = useState(accelerons.results[0]);
  const results = accelerons.results;
  return (
    <div className='one-card results'>
      <div className='left-side'>
        <div className='card-counter'>
          <span className='center-items'>
            <div className='counter'>04</div>
            <hr
              style={{
                height: '0.1px',
                width: '60%',
                backgroundColor: 'black',
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
              our <b style={{ color: accelerons.accentColor }}>LEGACY</b>
            </p>
          </span>
        </div>
        <div className='content-body'>
          <div className='timeline-years center-items'>
            {results.map((result, index) => {
              if (index < 7) {
                return (
                  <span key={index} className='center-items year'>
                    <a
                      onClick={() => {
                        setResultData(results[index]);
                      }}
                    >
                      {result.year}
                    </a>
                  </span>
                );
              } else return;
            })}
          </div>
          <div className='timeline-data'>
            <div
              className='year-img'
              style={{ backgroundImage: `url(${resultData.img_src})` }}
            ></div>
            <div className='year-achv'>
              <div className='comp-name'>
                <div
                  className='comp-title'
                  style={{ textDecoration: 'underline' }}
                >
                  {accelerons.participate.firstName}
                </div>
                <div className='comp-data'>{resultData.supra}</div>
              </div>
              <div className='comp-name'>
                <div
                  className='comp-title'
                  style={{ textDecoration: 'underline' }}
                >
                  {accelerons.participate.secondName}
                </div>
                <div className='comp-data'>{resultData.fbharat}</div>
              </div>
            </div>
          </div>
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

export default Results;
