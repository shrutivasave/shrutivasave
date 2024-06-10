import React from 'react';
import './WorkEx.css';

const experiences = [
  {
    title: 'software engineer',
    company: 'LTIMindtree for OneMain Financial',
    duration: 'Jun 2021 - Aug 2023',
    description: `spearheaded the delivery of high-quality AS400 code in ILE COBOL and CL for monthly releases, significantly enhancing the iSeries application’s functionality; provided production support and maintenance.
    instrumental in implementing several optimizing procedures that reduced application latency by 25%.
    redesigned targeted areas of a IBM DB2 database system which resulted in a 15% reduced downtime.
    redefined team’s established documentation practices and crafted streamlined documentation practices with a focus on time-efficiency and impactful clarity.`,
      },
  {
    title: 'ai/ml intern',
    company: 'Tata Motors',
    duration: 'Jun 2020 - Dec 2020',
    description: 'conceived, developed and deployed a Poka Yoke solution that prevents incorrect button placement on heavy vehicle dashboards with a 99% success rate. ceveloped a Python-based localization script and scaled it across a fleet of vehicles. saved an estimated $19,440/year in labour costs by completely eliminating manual checking of dashboard.',
  },

];

const WorkEx = () => {
  return (
    <div className="work-ex">
      <h1>work experience</h1>
      {experiences.map((experience, index) => (
        <div key={index} className="experience">
          <h2>{experience.title}</h2>
          <h3>{experience.company}</h3>
          <h4>{experience.duration}</h4>
          {/* <p>{experience.description}</p> */}
          <ul>
            {experience.description.split('.').map((sentence, idx) => sentence && <li key={idx}>{'' + sentence.trim()}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default WorkEx;
