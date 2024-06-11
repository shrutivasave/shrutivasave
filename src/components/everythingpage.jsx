import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './everythingpage1.css';
import books from './Books.png';
import cassette from './casette.png';
import tomato from './tomato.png';
import phone from './phone.png';
import folders from './folders.png';
import skills from './hammer.png';
import workex from './workex.png';
import cd from './cd.png';
import fawn1 from './fawn1.png';
import projects from './projects1.png';

const EverythingPage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    // <div className="everything-page" style={isMobile ? { backgroundColor: 'white' } : {}}>
      <div className="image-container" style={isMobile ? { flexDirection: 'column' } : {}}>
        

        <div className="image-wrapper" style={isMobile ? { position: 'static', margin: '1rem auto' } : { top: '150px', left: '-20px' }}>
{/*           <Link to="/resume">
            <img src={folders} alt="resume" />
            <p className="caption">my resume</p>
          </Link> */}
          <a href="https://github.com/shrutivasave/ResumeFullstack/blob/main/svasave_resume.pdf" target="_blank" rel="noopener noreferrer">
            <img src={folders} alt="resume" />
            <p className="caption">my resume</p>
          </a>
        </div>
        <div className="image-wrapper" style={isMobile ? { position: 'static', margin: '1rem auto' } : { top: '50px', left: '180px' }}>
          <Link to="/skills">
            <img src={skills} alt="hammer" style={{ height: 296, width: 150 }} />
            <p className="caption">skills</p>
          </Link>
        </div>
        <div className="image-wrapper" style={isMobile ? { position: 'static', margin: '1rem auto' } : { top: '150px', left: '370px' }}>
          <Link to="/projects">
            <img src={projects} alt="projects" />
            <p className="caption">projects</p>
          </Link>
        </div>
        <div className="image-wrapper" style={isMobile ? { position: 'static', margin: '1rem auto' } : { top: '120px', left: '-290px' }}>
          <Link to="/work-experience">
            <img src={workex} alt="computer" />
            <p className="caption">work experience</p>
          </Link>
        </div>
        <div className="image-wrapper" style={isMobile ? { position: 'static', margin: '1rem auto' } : { top: '320px', left: '-470px' }}>
          <Link to="/everythingelse">
            <img src={tomato} alt="tomato" style={{ height: 180, width: 180 }} />
            <p className="caption">everything else</p>
          </Link>
        </div>
        <div className="image-wrapper" style={isMobile ? { position: 'static', margin: '1rem auto' } : { top: '420px', left: '100px' }}>
          <Link to="/about">
            <img src={fawn1} alt="about me" />
            <p className="caption">about shruti</p>
          </Link>
        </div>
        <div className="image-wrapper" style={isMobile ? { position: 'static', margin: '1rem auto' } : { top: '350px', left: '-195px' }}>
          <Link to="/contact">
            <img src={phone} alt="flip phone" />
            <p className="caption">get in touch</p>
          </Link>
        </div>
      </div>
    // </div>
  );
};

export default EverythingPage;
