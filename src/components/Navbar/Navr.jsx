import React from 'react'
import { Navbar, Nav, NavLink, NavbarToggle, NavbarCollapse } from 'react-bootstrap'
import './Navr.css'

function Navr() {
    return (
        <>
            <Navbar className='navbar' fixed='top'  expand='sm'>
                <Navbar.Toggle arid-controls='my-nav' />
                <Navbar.Collapse id='my-nav'>
                    <Nav>
                        <Nav.Link href='#home' ><b>Home</b></Nav.Link>
                        <Nav.Link href='#about'><b>About Me</b></Nav.Link>
                        <Nav.Link href='#projects'><b>Projects</b></Nav.Link>
                        <Nav.Link href='#contact'><b>Contact</b></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Navr
