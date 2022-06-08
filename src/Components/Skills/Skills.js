import React from 'react'
import './Skills.css'
import {BsPatchCheckFill} from 'react-icons/bs';
const Skills = () => {
  const style={color:"rgb(46, 177, 177)"};
  return (
    <section id='skills'>
      <h5>What Skills I have</h5>
      <h2>My Skills</h2>

      <div className='container skill-container'>
        <div className='Languages'>
           <h3>General Programming</h3>
           <div className='skill-content'>
             <article className='details'>
               <h4><BsPatchCheckFill style={style}/> C</h4>
               <small>Experienced</small>
              </article>
              <article className='details'>
               <h4><BsPatchCheckFill style={style} /> C++</h4>
               <small>Experienced</small>
               </article>
               <article className='details'>
               <h4><BsPatchCheckFill style={style} /> Java</h4>
               <small>Basic</small>
               </article>
               <article className='details'>
               <h4><BsPatchCheckFill style={style} /> Python</h4>
               <small>Basic</small>
               </article>
              <article className='details'>
               <h4><BsPatchCheckFill style={style} /> Data Structures</h4>
               <small>Intermediate</small>
              </article>
              <article className='details'>
               <h4><BsPatchCheckFill style={style} /> Algorithm</h4>
               <small>Intermediate</small>
              </article>
           </div>
        </div>
        <div className='frontend'>
        <h3>Frontend Skills</h3>
           <div className='skill-content'>
             <article className='details'>
               <h4><BsPatchCheckFill style={style} /> HTML</h4>
               <small>Experienced</small>
             </article>
             <article className='details'>
               <h4><BsPatchCheckFill style={style} /> CSS</h4>
               <small>Intermediate</small>
             </article>
             <article className='details'>
               <h4><BsPatchCheckFill style={style} /> Javascript</h4>
               <small>Basic</small>
             </article>
             <article className='details'>
               <h4><BsPatchCheckFill style={style} /> Bootstrap</h4>
               <small>Intermediate</small>
             </article>
             <article className='details'>
               <h4><BsPatchCheckFill style={style} /> Tailwind</h4>
               <small>Basic</small>
             </article>
             <article className='details'>
               <h4><BsPatchCheckFill style={style} /> React</h4>
               <small>Basic</small>
             </article>
           </div>
        </div>
        <div className='backend'>
        <h3>Backend Skills</h3>
           <div className='skill-content'>
             <article className='details'>
               <h4><BsPatchCheckFill style={style} /> Node JS</h4>
               <small>Basic</small>
             </article>
             <article className='details'>
               <h4><BsPatchCheckFill style={style} /> Python</h4>
               <small>Basic</small>
             </article>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
