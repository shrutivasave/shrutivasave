import React from 'react';
import './AboutMe.css';
import myPicture from './aboutmef.jpg'; 

const AboutMe = () => {
  return (
    <div className="about-me">
      <img src={myPicture} alt="About me" className="about-me-picture" />
      <div className="about-me-description">
        <h2>hi! i am shruti.</h2>
        <p>
          i observe the world and try to create beautiful things. at the moment i live in upstate ny and study cs. my strengths are being able to think abstractly and creatively. my interests are ai/ml, films, music and art.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
