import React from 'react'
import './Contact.css';
import {MdEmail} from 'react-icons/md';
import {RiWhatsappFill} from 'react-icons/ri';
const Contact = () => {
  return (
    <section id='contacts'>
      
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      
      <div className='container contact-container'>
          <div className='contact-options'>
             <article className='contact-option'>
               <MdEmail className='icon'/>
               <h3>Email</h3>
               <h4>shirsho2402@gmail.com</h4>
               <a href="mailto:shirsho2402@gmail.com">Send Message</a>
             </article>
             <article className='contact-option'>
               <RiWhatsappFill className='icon' />
               <h3>WhatsApp</h3>
               <h4>Contact</h4>
               <a href="https://api.whatsapp.com/send?phone=+919836053569">Send Message</a>
             </article>
          </div>
           <form action="">
             <h2>Type In Query</h2>
            <input type="text" name='name' placeholder="Your Full Name" />
            <input type="email" name='email' placeholder="Your Email" />
            <textarea name="message" cols="30" rows="7" placeholder='Your Message'></textarea>
             <button type='submit' className='btn btn-primary'>Send Message</button>
           </form>
      </div>
    </section>
  )
}

export default Contact
