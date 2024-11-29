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



function Home() {
    return (
        <>
            <nav>
                <Navr />
            </nav>
            <section>
                {/* <Container fluid className='home-section' id='home' > */}
                <a name='home'></a>
                <Container className='home-content'>
                  <BlackUniverse />
                    <Row>
                        <Col md={7} className='home-header'>
                            <h1 style={{ paddingBottom: '10px', paddingTop: "150px" }} className='heading'>
                                Hi
                                <span className='wave' role='img' aria-labelledby='wave'>
                                    👋🏻
                                </span>
                            </h1>
                            <h1 className='heading-name'>
                                I'M
                                <strong className='main-name'> Praveenkumar</strong>
                            </h1>
                            <div style={{ padding: '40px', textAlign: "left" }}>
                                <Changer />
                            </div>
                        </Col>

                        <Col md={5} style={{ paddingBottom: 0, paddingTop: "150px" }} >
                            <img src={logo} className='img-fluids' style={{ maxHeight: "400px", borderRadius: "50%" }} />
                        </Col>

                    </Row>
                </Container>
                {/* </Container> */}
            </section>
            {/* --------------About---------- */}

            <Container fluid className='about-section'>
                <Container>
                    <Row style={{ padding: "10px" }}>
                        <Col md={7} >
                            <About />
                        </Col>
                        <Col md={5} >
                            <Designs />
                        </Col>
                    </Row>
                </Container>
            </Container>

            {/* -------------------Skills-------------- */}
            <Container fluid className='skills-content'>
                <Container>
                    <Row style={{ padding: "10px" }}>
                        <Col md={7}>
                            <Skills />
                        </Col>
                    </Row>
                </Container>

                {/* ----------------Projects--------------- */}
            </Container>
            <Container fluid className='project-content'>
                <Container>
                    <Row style={{ padding: "10px" }}>
                        <Col md={7}>
                            <Projects />
                        </Col>
                    </Row>
                </Container>
            </Container>
            {/* ---------------------Interests--------------- */}
            <Container fluid className='interest-content'>
                <Container>
                    <Row style={{ padding: "10px" }}>
                        <Col md={7}>
                            <Interest />
                        </Col>
                    </Row>
                </Container>
            </Container>

            {/* ------------------Contact---------------- */}
            <footer>
                <Container fluid className='contact-content'>
                    <Container>
                        <Row style={{ padding: "10px" }}>
                            <Col md={12}>
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
