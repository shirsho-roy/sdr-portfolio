import React from 'react'
import ME from '../../asset/dev.jpg';
import {FaAward} from 'react-icons/fa';
import {SiCodio} from 'react-icons/si';
import {GoProject} from 'react-icons/go';
import {AiFillAndroid} from 'react-icons/ai';
import './About.css';
const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
          <p>
            Hi I am Shirsho Das Roy, Fresher at NIT Rourkela, persuing Bachelors in Electronics and Instrumentation.I am a Tech 
            enthusiast and have been working on both Competitive Programming and Development Skills.
          </p>
      <div className='container about-container'>
        <div className='about-me'>
         <div className='about-me-img'>
            <img src={ME} alt=""/>
         </div>
        </div>
          {/* <a href="#contact" className='btn btn-primary'>Lets Talk</a>  */}
        <div className='about-content'>
         <div className='about-cards'>
           <article className='about-card'>
              <FaAward className='about-icon' />
              <h5>Experience</h5>
              <small>1+ Year</small>
           </article>

           <article className='about-card'>
              <SiCodio className='about-icon' />
              <h5>Competitive Coding</h5>
              <small>1+ Year</small>
           </article>

           <article className='about-card'>
              <GoProject className='about-icon' />
              <h5>Dev Projects</h5>
              <small>5+ Completed</small>
           </article>

           <article className='about-card'>
              <AiFillAndroid className='about-icon' />
              <h5>Android Development</h5>
              <small>0 year</small>
           </article>
         </div>
          {/* <p>
            Hi I am Shirsho Das Roy, Fresher at NIT Rourkela, persuing Bachelors in Electronics and Instrumentation.I am a Tech 
            enthusiast and have been working on both Competitive Programming and Development Skills.
          </p>
          <a href="#contact" className='btn btn-primary'>Lets Talk</a> */}
        </div>
      </div>
    </section>
  )
}

export default About
