import React from 'react'
import "./About.css"
import { FcGraduationCap } from "react-icons/fc";
import { FaReact } from "react-icons/fa";
import TypeWriter from 'typewriter-effect'
import { Container, Row, Col } from 'react-bootstrap';
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer';
function About() {
    const {ref , inView} = useInView({
        triggerOnce : true ,
        threshold :0.2
    })
    return (
        <>
            <Container className='mb-5'>
                <a name='about' ></a>
                <Row>
                   <Col className='d-flex justify-content-start'>
                   <h4 className='h-about'>About Me</h4>
                   </Col>
                   
                </Row>
                 <Row>
                    <Col md={12} className='p-0'>
                       <div className='pb-3'>
                       <b>Hi Everyone, I'm
                            <strong style={{ color: "aqua" }}>  Praveenkumar </strong>
                        </b>
                       </div>
                       <div className='pb-2 px-md-5'>
                            <b className='degree'><FcGraduationCap style={{ color: 'aqua' }} /> I have completed my undergraduate degree in Chemistry at NGMC, Coimbatore.
                            </b>
                        </div>
                        <div className='px-md-5 '>
                            <b><FaReact style={{ color: 'aqua' }} /> I am proficient in <strong style={{ color: "aqua" }}>React.js
                            </strong> and <strong style={{ color: "rgb(128, 238, 137)" }}>Node.js</strong>, showcasing a strong foundation in both technical and collaborative skills
                            </b>
                        </div>
                       
                    </Col>
                </Row>
            </Container>
            <motion.div
            ref={ref}
            initial={{opacity:0 , scale:0}}
            animate ={inView ? {opacity:1 ,scale:1} :{}} transition={{delay:0.8 , duration:0.7}} className='d-flex justify-content-center mt-5'>
                <a href='https://drive.google.com/file/d/1dDUAFq1mx5OWssAxOfQ28U08sxOCHesZ/view?usp=drivesdk' download> <button>Resume</button></a>
            </motion.div>
        </>
    )
}

export default About
