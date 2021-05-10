import React, { useEffect } from 'react';
// import $ from 'jquery';
import '../Styling/ptech-scroll.css';

const PtechScroll = ({
  newTrans,
  bgColor,
  accentColor,
  cntItems,
  itemColor,
}) => {
  //   const [newTrans, setNewTrans] = useState('0');
  let possibleTrans = ['0', '50', '100', '150', '200', '250'];
  useEffect(() => {
    // console.log(newTrans);
    document.getElementById('myBar').style.transform =
      'translate(-2px,' + (possibleTrans[newTrans] - 25) + 'px)';
  });
  let bgScroll = 'gray';
  if (bgColor === 'black') {
    bgScroll = '#ccc';
  }
  return (
    <>
      <section
        className='scroll-area'
        style={{
          color: itemColor,
        }}
      >
        <div
          className='progress-container'
          style={{
            backgroundColor: bgScroll,
          }}
        >
          {possibleTrans.map((trans, index) => {
            if (index < cntItems) {
              return (
                <div
                  className='possible-progress'
                  key={index}
                  style={{
                    transform: `translate(-1.5px,${trans}px)`,
                    backgroundColor: bgScroll,
                  }}
                ></div>
              );
            }
          })}
          <div
            className='progress-bar'
            id='myBar'
            style={{
              backgroundColor: accentColor,
            }}
          >
            <p className='progress-num'>0{newTrans + 1}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default PtechScroll;
