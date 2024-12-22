import React from 'react'
import './Project.css'
import { Col, Container, Row } from 'react-bootstrap'
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
function Projects() {
  const {ref , inView} = useInView({
    triggerOnce : true ,
    threshold : 0.3
  })
  return (
    <>
      
      <a name='projects'></a>
     
      <Container className='mt-5'>
       <Row>
        <Col className='d-flex justify-content-start'>
         <h4 className='h-projects'>Projects</h4> 
        </Col>
       </Row>
        <Row className='mt-5 '>
          <Col sm={12} className='mb-2 ps-md-4 ms-md-2 pe-lg-0 ps-lg-5 '>
            <motion.div ref={ref} initial={{opacity:0 , y:-100}} animate={inView ? {opacity:1 , y:0}:{}} transition={{delay:0.3 , duration:0.5}}>
              <b><span style={{ color: 'blue', fontSize: '15px' }}>&hearts;</span> Developed a
                <strong style={{ color: 'aqua' }}> CRUD Application </strong>
                by using React, Node, Express and MongoDb</b>
            </motion.div>
          </Col>
        </Row>
        <Row>
          <Col sm={12} className='mb-2 ps-md-5 ms-md-1 pe-lg-5 ps-lg-0 '>
            <motion.div ref={ref} initial={{opacity:0 , y:-100}} animate={inView ? {opacity:1 , y:0}:{}} transition={{delay:0.6 , duration:0.5}}>
              <b><span style={{ color: 'blue', fontSize: '15px' }}>&hearts;</span> Build
                <strong style={{ color: 'aqua' }}> Employee Enrollment System </strong>
                by using React and Mock API</b>
            </motion.div>
          </Col>
        </Row>
        <Row>
          <Col sm={12} className='pe-sm-5 ps-md-4 ps-lg-5 pe-lg-0' >
            <motion.div ref={ref} initial={{opacity:0 , y:-100}} animate={inView ? {opacity:1 , y:0}:{}} transition={{delay:0.9, duration:0.5}}>
              <b><span style={{ color: 'blue', fontSize: '15px' }}>&hearts;</span> Created a
                <strong style={{ color: 'aqua' }}> Valid Login Page </strong>
                by using html, css, javascript, jquery and bootstrap</b>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Projects
