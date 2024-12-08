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
            <Container >
                <a name='about' ><h4 className='h-about'>About Me</h4></a>
                <Row>
                    <Col sm={12}>
                        <b>Hi Everyone, I'm
                            <strong style={{ color: "aqua" }}>  Praveenkumar </strong>
                        </b>
                    </Col>
                </Row><br />
                <Row>
                    <Col sm={12} md={9}>
                        <div style={{ paddingBottom: '15px', marginLeft: '70px' }}>
                            <b className='degree'><FcGraduationCap style={{ color: 'aqua' }} /> I have completed my undergraduate degree in Chemistry at NGMC, Coimbatore.
                            </b>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={8} md={10}>
                        <div style={{ marginLeft: '27px' }}>
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
            animate ={inView ? {opacity:1 ,scale:1} :{}} transition={{delay:0.8 , duration:0.7}} className='resume-div'>
                <a href='https://drive.google.com/file/d/1dDUAFq1mx5OWssAxOfQ28U08sxOCHesZ/view?usp=drivesdk' download> <button>Resume</button></a>
            </motion.div>
        </>
    )
}

export default About
