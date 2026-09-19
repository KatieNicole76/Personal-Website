import { Routes, Route, Link } from 'react-router-dom';
import logo from './assets/logo.png';

import Hero from './components/Hero';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';

import './App.css';

function Home() {
  return (
    <>
      <Hero />
      <WorkExperience />
      <Education />
    </>
  );
}

function App() {
  return (
    <div>
      <div className="flex flex-row items-center mt-2 mr-1">
        <Link to="/">
          <img alt="Home Button" className="max-h-[19px] mt-1 ml-2" src={logo} />
        </Link>
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