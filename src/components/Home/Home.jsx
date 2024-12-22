import React from 'react';
import { Container, Row, Col, Card, CardBody } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "./Home.css"
import Changer from './Changer';
import logo from '../../assets/myimg.JPG'
import Navr from '../Navbar/Navr'
import About from '../About/About';
import Designs from '../About/Designs';
import Skills from '../Skills/Skills';
import Interest from '../Interests/Interest';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import BlackUniverse from '../Paticles/Universe';
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';

function Home() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2
    })
    return (
        <>
            <Container fluid className='nav-content'>
                <Container>
                    <Row>
                        <Col>
                            <nav>
                                <Navr /> 
                            </nav>
                        </Col>
                    </Row>
                </Container>
            </Container>

            <section>
                {/* <Container fluid className='home-section' id='home' > */}
                <a name='home'></a>
                <Container className='home-content'>
                    <BlackUniverse />
                    <div >
                        <Row>
                            <Col sm={12} md={7} className='home-header'>

                                <motion.h1
                                    ref={ref}
                                    initial={{ opacity: 0, y: 100 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.2, duration: 0.5 }} style={{ paddingBottom: '10px', paddingTop: "150px" }}
                                    className='heading'>
                                    Hi
                                    <span className='wave' role='img' aria-labelledby='wave'>
                                        👋🏻
                                    </span>
                                </motion.h1>
                                <motion.h1 ref={ref}
                                    initial={{ opacity: 0, y: 100 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.4, duration: 0.5 }} className='heading-name'>
                                    I'M
                                    <strong className='main-name'> Praveenkumar</strong>
                                </motion.h1>
                                <div style={{ padding: '40px', textAlign: "left" }}>
                                    <Changer />
                                </div>
                            </Col>

                            <Col sm={12} md={5} style={{ paddingBottom: 0, paddingTop: "150px" }} >
                                <motion.img initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5, duration: 0.5 }} src={logo} className='img-fluids' style={{ maxHeight: "400px", borderRadius: "50%" }} />
                            </Col>

                        </Row>
                    </div>

                </Container>
                {/* </Container>  */}
            </section>
            {/* --------------About---------- */}

            <Container fluid className='about-section'>
                <Container>
                    <Row >
                        <Col sm={12} md={8}>
                            <About />
                        </Col>
                        <Col sm={12} md={4}>
                            <Designs />
                        </Col>
                    </Row>
                </Container>
            </Container>

            {/* -------------------Skills-------------- */}
            <Container fluid className='skills-content'>
                <Container>
                    <Row >
                        <Col sm={12} md={7}>
                            <Skills />
                        </Col>
                    </Row>
                </Container>

                {/* ----------------Projects--------------- */}
            </Container>
            <Container fluid className='project-content'>
                <Container>
                    <Row >
                        <Col sm={12} md={9}>
                            <Projects />
                        </Col>
                    </Row>
                </Container>
            </Container>
            {/* ---------------------Interests--------------- */}
            <Container fluid className='interest-content'>
                <Container>
                    <Row>
                        <Col sm={12} md={12} lg={7}>
                            <Interest />
                        </Col>
                    </Row>
                </Container>
            </Container>

            {/* ------------------Contact---------------- */}
            <footer>
                <Container fluid className='contact-content'>
                    <Container>
                        <Row>
                            <Col sm={12}>
                                <Contact />
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </footer>
        </>
    )
}

export default Home
