import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs';
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
const Footer = () => {
  return (
    <footer>
      <a href="#home" className='logo'>SHIRSHO</a>
      <ul className='permalinks'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#Contact">Contact</a></li>
      </ul>

      <div className='footer_socials'>
        <a href="https://facebook.com"><BsFacebook /></a>
        <a href="https://linkedin.com"><BsLinkedin /></a>
        <a href="https://github.com"><BsGithub /></a>
      </div>
      <div className='footer_copyright'>
        <small>&copy; Shirsho Das Roy. All Rights reserved.</small>
      </div>
    </footer>   
  )
}

export default Footer
