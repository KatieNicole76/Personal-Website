import { BrowserRouter, Routes, Route } from 'react-router-dom';
import logo from './assets/logo.png';
import star1 from './assets/star-1.png';

import Hero from './components/Hero';
import Bio from './components/Bio';
import WorkExperience from './components/WorkExperience';


import { Link } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div>
    <Link to="/">
      <img alt="Home Button" className="max-h-[19px] mt-2 ml-2" src={logo} />
    </Link>      
      <img alt="" className="max-h-[60px] mt-49 ml-1 absolute" src={star1} />
      <Hero />
      <Bio />
      <WorkExperience />
    </div>
  );
}

export default App;