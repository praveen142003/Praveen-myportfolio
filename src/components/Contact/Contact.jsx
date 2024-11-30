import React from 'react'
import './Contact.css'
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si"
import { MdMarkEmailUnread } from "react-icons/md"

function Contact() {
  return (
    <>
      <a name='contact'> </a>
      <h4 className='h-contact'>Contact</h4>
      <font >Get in Touch</font>
      <div>
        <a href='https://github.com/praveen142003'><SiGithub style={{ color: 'aqua', fontSize: '45px', padding: '10px' }} /></a>
        <a href='https://www.linkedin.com/in/praveenkumar-k-161458326'><SiLinkedin style={{ color: 'aqua', fontSize: '40px', padding: '10px' }} /></a>
      </div>
    </>
  )
}

export default Contact
