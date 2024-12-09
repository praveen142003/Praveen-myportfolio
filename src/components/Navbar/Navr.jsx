import React from 'react'
import { Navbar, Nav, NavLink, NavbarToggle, NavbarCollapse, Container, Row, Col } from 'react-bootstrap'
import './Navr.css'

function Navr() {
    return (
        <>
            <Navbar className='navbar' fixed='top' expand='sm'>
                <Navbar.Toggle arid-controls='my-nav' style={{ marginLeft: "15px", fontSize: "10px" }} />
                <Navbar.Collapse id='my-nav' >
                    <Nav>
                        <Nav.Link href='#home' ><b>Home</b></Nav.Link>
                        <Nav.Link href='#about'><b>About Me</b></Nav.Link>
                        <Nav.Link href='#projects'><b>Projects</b></Nav.Link>
                        <Nav.Link href='#contact' style={{paddingRight:'1px'}}><b>Contact</b></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Navr
