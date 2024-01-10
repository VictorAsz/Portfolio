import React from 'react';
import './portfolio.css';
import Project from './Project';

const Portfolio = () => {
  return (
    <section className="portfolio section">
        <h2 className="section_title">Portfolio</h2>
        <span className="section_subtitle">My recents projects</span>


        <div className='projects_container container grid'>
       <Project/>
       <Project/>
       <Project/>
       <Project/>
        </div>


    </section>
  )
}

export default Portfolio