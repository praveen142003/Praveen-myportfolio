import React from 'react'
import './Contact.css'
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si"
import { MdMarkEmailUnread } from "react-icons/md"
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer';
function Contact() {
  const {ref , inView} = useInView({
    triggerOnce : true ,
    threshold :0.2
})
  return (
    <>
      <a name='contact'> </a>
      <h4 className='h-contact'>Contact</h4>
      <font >Get in Touch</font>
      <motion.div ref={ref}
            initial={{opacity:0 , scale:0}}
            animate ={inView ? {opacity:1 ,scale:1} :{}} transition={{delay:0.4 , duration:0.5}}>
        <a href='https://github.com/praveen142003'><SiGithub style={{ color: 'aqua', fontSize: '45px', padding: '10px' }} /></a>
        <a href='https://www.linkedin.com/in/praveenkumar-k-161458326'><SiLinkedin style={{ color: 'aqua', fontSize: '40px', padding: '10px' }} /></a>
      </motion.div>
    </>
  )
}

export default Contact
