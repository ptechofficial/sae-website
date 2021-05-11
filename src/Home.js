import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <>
      <div>This is home</div>
      <Link to='/accelerons'> Accelerons</Link>
      <Link to='/nitrox'> Nitrox</Link>
    </>
  );
};

export default Home;
