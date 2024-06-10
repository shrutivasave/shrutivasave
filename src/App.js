import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import EverythingPage from './components/everythingpage';
import TalkToMe from './components/talk2me';
import AboutMe from './components/aboutme';
import StuffIBuilt from './components/stuffibuilt';
import WorkEx from './components/WorkEx';
import Skills from './components/skills';
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<EverythingPage />} />
            <Route path="/contact" element={<TalkToMe />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/projects" element={<StuffIBuilt />} />
            <Route path="/work-experience" element={<WorkEx />} />
            <Route path="/skills" element={<Skills />} />
            {/* <Route path="/contact-us" element={<TalkToMe />} /> */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;