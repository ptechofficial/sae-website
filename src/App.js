import React, { useEffect } from 'react';
import './App.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Accelerons from './Accelerons';
import Nitrox from './Nitrox';

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      {/* <Accelerons /> */}
      <Nitrox />
    </>
  );
};

export default App;
