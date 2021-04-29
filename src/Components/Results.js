import React, { useState } from 'react';
import '../Styling/Results.css';
import HorzScroll from './HorzScroll/HorzScroll';

const Results = ({ accelerons }) => {
  const [resultData, setResultData] = useState(accelerons.results[0]);
  console.log(resultData);
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
              our <b>LEGACY</b>
            </p>
          </span>
        </div>
        <div className='content-body'>
          <div className='timeline-years center-items'>
            <span className='center-items arrows'>{'<'}</span>
            {/* <span className='center-items year'>
              <a>2020</a>{' '}
            </span>
            <span className='center-items year'>
              <a>2019</a>{' '}
            </span>
            <span className='center-items year'>
              <a>2018</a>{' '}
            </span>
            <span className='center-items year'>
              <a>2017</a>{' '}
            </span>
            <span className='center-items year'>
              <a>2016</a>{' '}
            </span>
            <span className='center-items year'>
              <a>2015</a>{' '}
            </span>
            <span className='center-items'>
              <a>2014</a>{' '}
            </span>
            <span className='center-items arrows'>{'>'}</span> */}
            <HorzScroll />
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
                  SUPRA
                </div>
                <div className='comp-data'>{resultData.supra}</div>
              </div>
              <div className='comp-name'>
                <div
                  className='comp-title'
                  style={{ textDecoration: 'underline' }}
                >
                  Formula Bharat
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
