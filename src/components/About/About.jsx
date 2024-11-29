import React from 'react'
import "./About.css"
import { FcGraduationCap } from "react-icons/fc";
import { FaReact } from "react-icons/fa";
import TypeWriter from 'typewriter-effect'
function About() {
    return (
        <>
            <div>
                <a name='about' ><h4 className='h-about'>About Me</h4></a>
                <b>Hi Everyone, I'm
                    <strong style={{ color: "aqua" }}>  Praveenkumar </strong>
                </b><br /><br />
                <div style={{ paddingBottom: '15px',marginLeft:'80px' }}>
                    <b className='degree'><FcGraduationCap style={{color:'aqua'}} /> I have completed my undergraduate degree in Chemistry at NGMC,
                        <span style={{ position: 'relative', right: '195px' }}> Coimbatore.</span>
                    </b>
                </div>
                <div style={{marginLeft:'60px'}}>
                    <b><FaReact style={{color:'aqua'}} /> I am proficient in <strong style={{ color: "aqua" }}>React.js
                    </strong> and <strong style={{ color: "rgb(128, 238, 137)" }}>Node.js</strong>, showcasing a strong foundation in
                        <span style={{ position: 'relative', right: '130px' }}> both technical and collaborative skills</span>
                    </b>
                </div>
            </div>
            <div className='resume-div'>
                <a href='https://drive.google.com/file/d/1dDUAFq1mx5OWssAxOfQ28U08sxOCHesZ/view?usp=drivesdk' download> <button>Resume</button></a>
            </div>



        </>
    )
}

export default About
