import React from 'react';
import '../Styling/Results.css';

const Results = ({ accelerons }) => {
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
            <span className='center-items year'>
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
            <span className='center-items arrows'>{'>'}</span>
          </div>
          <div className='timeline-data'>
            <div className='year-img'>Year Image</div>
            <div className='year-achv'>
              <div style={{ textDecoration: 'underline' }}>SUPRA</div>
              <div style={{ textDecoration: 'underline' }}>FORMULA BHARAT</div>
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
