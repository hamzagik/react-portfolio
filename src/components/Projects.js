import React from 'react';
import Project1 from '../Pro1.png';
import Project2 from '../Pro2.png';
import Project3 from '../Pro3.png';
import Project4 from '../Pro4.png';
import Project5 from '../Pro5.png';
import Project6 from '../Pro6.png';
import { Element } from 'react-scroll';

const Projects = () => {
  return (
    <Element className='about-projects'>
    <section id='projects'>
      <h2>My Projects</h2>
      <div className='contain project-container'>
        <div className='projectCard'>
          <img src={Project1} alt='first-project'/>
          <h5>E-Commerce Website</h5>
          <a href="https://github.com/Durrani123/ESELL" className='btnn primary' target='new-tab'>Github</a>
        </div>
        <div className='projectCard'>
          <img src={Project2} alt='second-project'/>
          <h5>Spell Checker</h5>
          <a href="https://github.com/mahnooramir25/CS221-Lab-Project" className='btnn primary' target='new-tab'>Github</a>
        </div>
        <div className='projectCard'>
          <img src={Project3} alt='third-project'/>
          <h5>LinkedIn Web Scraping</h5>
          <a href="https://github.com/hamzagik/Linkedin-Web-Scraping" className='btnn primary' target='new-tab'>Github</a>
        </div>
        <div className='projectCard'>
          <img src={Project4} alt='fourth-project'/>
          <h5>Raw Data to Processed Data</h5>
          <a href="https://github.com/hamzagik/Raw-Data-to-Processed-Data" className='btnn primary' target='new-tab'>Github</a>
        </div>
        <div className='projectCard'>
          <img src={Project5} alt='fifth-project'/>
          <h5>Visualization of Datasets and Clusters</h5>
          <a href="https://github.com/fizo-neechan/Visualization-of-Datasets-and-Clusters" className='btnn primary' target='new-tab'>Github</a>
        </div>
        <div className='projectCard'>
          <img src={Project6} alt='sixth-project'/>
          <h5>Library Management System</h5>
          <a href="https://github.com/hamzagik/library-management-system" className='btnn primary' target='new-tab'>Github</a>
        </div>
      </div>
    </section>
    </Element>
  )
}

export default Projects
