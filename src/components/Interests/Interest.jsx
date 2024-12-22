import React from 'react'
import './Interest.css'
import { Card, CardBody, CardImg, CardImgOverlay, Row, Col, Container, Carousel } from 'react-bootstrap'
import cricket from '../../images/cricket.jpg'
import chess from '../../images/chess-board-dark3.webp'
import movie from '../../images/movies.jpg'
import { color, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

function Interest() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3
    })
    return (
        <>

            {/* <div className='cricket-div'>
                {/* <span>I have a keen interest in playing cricket , chess as well as enjoying movies in
              my leisure time</span> */}
            <Container>
                <Row>
                    <Col className='d-flex justify-content-start'>
                        <h4 className='h-interest'>Areas of Interest</h4>
                    </Col>

                </Row>
                <Row className='mt-5'>
                    <Col sm={12}>
                        {/* <Card  style={{ padding: '3px', marginLeft: '100px' }}>
                            <CardImg src={sportlogo} />
                            <CardImgOverlay >
                                <CardBody className='mt-md-5'>
                                <div className='mt-2 mt-md-3'>
                                <b style={{ color: 'whitesmoke'}}>I enjoy playing cricket and chess, as they enhance my physical fitness and mental focus</b>
                                </div>
                                <div className='mt-5 mt-sm-2 mt-md-3 mt-lg-5'>
                                <b style={{ color: 'whitesmoke',}}>I enjoy watching movies as a way to relax and explore different stories and perspectives</b>
                                </div>
                                </CardBody>
                            </CardImgOverlay>
                        </Card> */}
                        <Carousel showArrows={false} >
                            <Carousel.Item>
                                <img src={chess} width='80%' />
                                <Carousel.Caption>
                                    <b className='int_b'>I enjoy playing chess, as they enhance my focus</b>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={cricket} width='80%' />
                                <Carousel.Caption>
                                    <b className='int_b'>I enjoy playing cricket, as they enhance my physical fitness</b>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={movie} width='80%' />
                                <Carousel.Caption>
                                    <b className='int_b'>I enjoy watching movies as a way to relax and explore different stories and perspectives</b>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Interest
