import React from 'react';
import './StuffIBuilt.css';

const projects = [
  {
    title: 'fire detection using computer vision',
    techStack: 'Python, OpenCV, Raspberry Pi',
    description: 'engineered a lightweight solution for fire detection with specific focus on fires in outdoor spaces using HAAR cascade classifiers.',
    link: 'https://github.com/shrutivasave/Fire-Detection-With-Image-Processing'  // Add the link here
  },
  {
    title: 'territory-wise social media observer',
    techStack: 'Java Swing, Python, Pandas',
    description: 'developed a web app using the Java Swing framework to deploy features like hate speech detection, trend analysis, sentiments analysis of tweets mainly sorted by region.',
    link: 'https://github.com/shrutivasave/Territorywise-Social-Media-Observer'  // Add the link here
  },
  {
    title: 'a quiz portal for LTI',
    techStack: 'Angular, TypeScript, .NET, C#',
    description: 'designed a secure web based application for LTIMindtree empowering seamless creation, customization, and evaluation of quizzes for internal training purposes. it was awarded “Best Project Team” out of all the fresher projects for FY 2020.'
  },
  {
    title: 'deep learning in games',
    techStack: 'tensorflow, Python, OpenAI Universe and Gym',
    description: 'trained and fine-tuned an AI agent to tackle a variety of flash games with OpenAI’s Gym and Universe.'
    
  },
  {
    title: 'foreign object detection on an assembly line',
    techStack: 'tensorflow, Python, RCNN, YOLO',
    description: 'conducted a comparative study of two approaches for the detection of foreign objects in an industrial assembly line setting. i published a paper that proposes a complete solution from the findings. the methodologies are vision based and can be used for processing objects conveyed at a constant velocity. the novelty of proposed solution is the possible full automation of the assembly line with low latency and high performance and with a small training data set.',
    
  }
];

const StuffIBuilt = () => {
  return (
    <div className="stuff-i-built">
      <h1>stuff i built</h1>
      {projects.map((project, index) => (
        <div key={index} className="project">
          <h2>{project.title}</h2>
          <h3>{project.techStack}</h3>
          <p>{project.description}</p>
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          )}
        </div>
      ))}
    </div>
  );
};

export default StuffIBuilt;
