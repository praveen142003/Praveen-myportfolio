import React from 'react'
import './Interest.css'
import { Card, CardBody, CardImg, CardImgOverlay } from 'react-bootstrap'
import sportlogo from '../../images/sportslap2.jpg'

function Interest() {
    return (
        <>
            <h4 className='h-interest'>Areas of Interest</h4>
            {/* <div className='cricket-div'>
                {/* <span>I have a keen interest in playing cricket , chess as well as enjoying movies in
              my leisure time</span> */}
            <Card style={{padding:'3px',marginLeft:'100px'}}>
                <CardImg src={sportlogo}  />
                <CardImgOverlay>
                    <CardBody>
                        <b style={{color:'whitesmoke',position:'relative',top:'40px'}}>I enjoy playing cricket and chess, as they enhance my physical fitness and mental focus</b>
                        <br/>
                        <b style={{color:'whitesmoke',position:'relative',top:'160px'}}>I enjoy watching movies as a way to relax and explore different stories and perspectives</b>
                    </CardBody>
                </CardImgOverlay>
            </Card>

        </>
    )
}

export default Interest