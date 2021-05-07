import React, { useEffect } from 'react';
import './App.css';
import Accelerons from './Accelerons';
import Aos from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <Accelerons />
    </>
  );
};

export default App;
