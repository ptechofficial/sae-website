import React, { useEffect } from 'react';
import './App.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './Home';
import Accelerons from './Accelerons';
import Nitrox from './Nitrox';

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Router>
      <>
        <Switch>
          <Route path='/' exact component={Home} />
          {/* <div className='hey12'>heyy</div> */}
          <Route path='/accelerons' component={Accelerons} />
          {/* <Accelerons /> */}
          <Route path='/nitrox' component={Nitrox} />
          {/* <Nitrox /> */}
        </Switch>
      </>
    </Router>
  );
};

export default App;
