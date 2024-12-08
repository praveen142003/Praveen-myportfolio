import React from 'react'
import './Interest.css'
import { Card, CardBody, CardImg, CardImgOverlay, Row, Col, Container } from 'react-bootstrap'
import sportlogo from '../../images/sportslap2.jpg'
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer'

function Interest() {
    const {ref , inView} = useInView({
        triggerOnce : true ,
        threshold : 0.3
      })
    return (
        <>
            <h4 className='h-interest'>Areas of Interest</h4>
            {/* <div className='cricket-div'>
                {/* <span>I have a keen interest in playing cricket , chess as well as enjoying movies in
              my leisure time</span> */}
            <Container>
                <Row>
                    <Col sm={12}>
                        <Card  style={{ padding: '3px', marginLeft: '100px' }}>
                            <CardImg src={sportlogo} />
                            <CardImgOverlay >
                                <CardBody>
                                    <b style={{ color: 'whitesmoke', position: 'relative', top: '30px' }}>I enjoy playing cricket and chess, as they enhance my physical fitness and mental focus</b>
                                    <br />
                                    <b style={{ color: 'whitesmoke', position: 'relative', top: '100px' }}>I enjoy watching movies as a way to relax and explore different stories and perspectives</b>
                                </CardBody>
                            </CardImgOverlay>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Interest
