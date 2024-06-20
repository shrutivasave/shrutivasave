import React from 'react';
import './Skills.css';

const skills = [
  { name: 'JavaScript', proficiency: 90 },
  { name: 'React', proficiency: 85 },
  { name: 'CSS', proficiency: 75 },
  { name: 'HTML', proficiency: 80 },
  { name: 'Node.js', proficiency: 70 },
  { name: 'DevOPs', proficiency: 100 },
  { name: 'Python', proficiency: 100 },
  { name: 'Git', proficiency: 100 },
  { name: 'Java', proficiency: 90 },
  { name: 'C', proficiency: 85 },
  { name: 'C++', proficiency: 90 },
  { name: '.NET', proficiency: 90 },
  { name: 'SQL', proficiency: 100 },
  { name: 'COBOL', proficiency: 90 },
  { name: 'CL', proficiency: 80 },
  { name: 'Scikit', proficiency: 90 },
  { name: 'NLTK', proficiency: 85 },
  { name: 'Tensorflow', proficiency: 75 },
  { name: 'Keras', proficiency: 80 },
  { name: 'Django', proficiency: 70 },
  { name: 'Java Swing', proficiency: 65 },
  { name: 'AWS', proficiency: 60 },
  { name: 'Docker', proficiency: 75 },
  { name: 'AS400', proficiency: 100 },
  { name: 'GCP', proficiency: 70 },
  { name: 'JIRA', proficiency: 100 }
];

const Skills = () => {
  return (
    <div className="skills">
      <h2>my technical skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill-bubble"
            style={{ width: `${skill.proficiency}px`, height: `${skill.proficiency}px` }}
          >
            {skill.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
