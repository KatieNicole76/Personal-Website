import { Routes, Route, Link } from 'react-router-dom';
import logo from './assets/logo.png';
import star1 from './assets/star-1.png';
import crane from './assets/crane.png';


import Hero from './components/Hero';
import Bio from './components/Bio';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';

import './App.css';

function Home() {
  return (
    <>
      <Hero />
      <Bio />
      <WorkExperience />
      <Education />
    </>
  );
}

function App() {
  return (
    <div>
      <div className="flex flex-row justify-between items-center mt-2 mr-1">
        <Link to="/">
          <img alt="Home Button" className="max-h-[19px] mt-2 ml-1" src={logo} />
        </Link>
        <div className="flex flex-row gap-1 items-center justify-center">
          <img alt="Home Button" className="max-h-[19px]" src={crane} />
          <p className="text-subtitle2 text-gold">Site Under Construction</p>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
      </Routes>
    </div>
  );
}

export default App;