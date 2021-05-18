import React from 'react';
import '../Styling/error404.css';
import { Link } from 'react-router-dom';
const Error404 = () => {
  return (
    <section className='page_404'>
      <div className='container'>
        <div className='row'>
          <div>
            <div className='text-center'>
              <h1>404</h1>
              <div className='four_zero_four_bg'></div>

              <div className='contant_box_404'>
                <h3>Look like you're lost</h3>

                <p>the page you are looking for not avaible!</p>

                <Link to='/' className='link_404'>
                  Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Error404;
