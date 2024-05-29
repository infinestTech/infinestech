import React from 'react';
// import ParticleBackground from './ParticleBackground';
// import SpaceScene from './SpaceScene'; // Make sure the path to SpaceScene is correct
import "../css/App.css";
import About from "./About";
import Home from "./Home";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Combine from './Combine';
import ContactForm from './ContactForm';

const App = () => {
  // const [entered, setEntered] = useState(false);

  // const handleEnter = () => {
  //   setEntered(true);
  // };

  return (
    <div>
      {/* <div className='spaceSceneContainer'> */}
      {/* <SpaceScene /> SpaceScene is included and will render when App loads */}
      {/* </div> */}
     
      <Router>  
        <Routes>
          <Route path="/" element={<Combine />} />
          <Route path="home" element={<Home />} />
          <Route path="careers" element={<ContactForm />} />
          <Route path="about" element={<About />} /> 
        </Routes>
      </Router>
      
      {/* ParticleBackground is now below SpaceScene, both could be visible */}
      {/* <ParticleBackground /> */}
      
      {/* Conditionally render HomeScreen or MainScreen based on 'entered' state */}
    </div>
  );
}

export default App;
