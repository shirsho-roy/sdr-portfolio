import React from 'react'
import {FaHome} from 'react-icons/fa';
import {BsFillInfoSquareFill} from 'react-icons/bs';
import {FaGraduationCap} from 'react-icons/fa';
import {RiMessageFill} from 'react-icons/ri';
// import {MdWork} from 'react-icons/md';
import {useState} from 'react';
import './nav.css';
const Nav = () => {
  const [activeNav,setActiveNav] = useState('#')
  return (
   <nav>
     <div className='links'>
     <a href="#home" onClick={()=> setActiveNav('#home')} className={activeNav==='#home' ?'active' : ''}>Home <FaHome /></a>
     <a href="#about" onClick={()=> setActiveNav('#about')}  className={activeNav==='#about' ?'active' : ''}>About <BsFillInfoSquareFill /></a>
     <a href="#skills" onClick={()=> setActiveNav('#skills')}  className={activeNav==='#skills' ?'active' : ''}>Skills <FaGraduationCap /></a>
     <a href="#contacts" onClick={()=> setActiveNav('#contacts')}  className={activeNav==='#contacts' ?'active' : ''}>Contact <RiMessageFill /></a>
     {/* <a href="#works" onClick={()=> setActiveNav('#works')}  className={activeNav==='#works' ?'active' : ''}>Works <MdWork /></a> */}
     </div>
   </nav>
  )
}

export default Nav
