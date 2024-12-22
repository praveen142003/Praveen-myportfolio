import React from 'react'
import { ImPointRight} from 'react-icons/im'
import './Skills.css'
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Container , Row , Col } from 'react-bootstrap'
function Skills() {
  const {ref , inView} = useInView({
    triggerOnce : true ,
    threshold : 0.3
  })
  return (
    <>
    <Container className='mt-5'>
      <Row>
      <div className='d-flex justify-content-start'>
          <h4 className='h-skills'>Skills</h4>
        </div>   
      </Row>
      <Row>
      <div className='mt-4 ps-sm-5'>
         
         <motion.span ref={ref} initial={{opacity:0 , x:-100}} animate={inView ? {opacity:1 , x:0}:{}} transition={{delay:0.3 , duration:0.5}} className='pointer'> <ImPointRight/>&nbsp;&nbsp;<b>React.js</b></motion.span><br/>
         <motion.span ref={ref} initial={{opacity:0 , x:-100}} animate={inView ? {opacity:1 , x:0}:{}} transition={{delay:0.6 , duration:0.5}} className='pointer'> <ImPointRight/>&nbsp;&nbsp;<b>Node.js</b></motion.span><br/>
         <motion.span ref={ref} initial={{opacity:0 , x:-100}} animate={inView ? {opacity:1 , x:0}:{}} transition={{delay:0.9 , duration:0.5}} className='pointer3'> <ImPointRight/>&nbsp;&nbsp;<b>Express.js</b></motion.span><br/>
         <motion.span ref={ref} initial={{opacity:0 , x:-100}} animate={inView ? {opacity:1 , x:0}:{}} transition={{delay:1.2 , duration:0.5}} className='pointer4'> <ImPointRight/>&nbsp;&nbsp;<b>MongoDb</b></motion.span>
        </div>

      </Row>
    </Container>
  
   

    </>
  )
}

export default Skills
