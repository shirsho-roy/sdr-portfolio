import React from 'react'
import './header.css';
import ME from '../../asset/Hello.jpeg';
const Header = () => {
  return (
    <header id="home">
      <div className='container header-container'>
        <h5>Hello I am</h5>
        <h2>Shirsho Das Roy</h2>
        <h5 className='text-light'>Frontend Developer & Competitive Coder</h5>
        <div className='but'>
        <a href="#CV" className='btn x'>Resume</a>
        <a href="#contact" className='btn btn-primary'>Lets Talk</a>
        </div>
        <div className='me'>
          <img src={ME} alt="No img" />
        </div>
      </div>
    </header>
  )
}

export default Header
