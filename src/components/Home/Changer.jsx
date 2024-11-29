// import { Typewriter } from "react-simple-typewriter"
import Typewrit from "typewriter-effect"
import React from 'react'


function Changer() {
  return (
    <>
      <Typewrit options={
        {
          strings: ["MERN Stack Developer"],
          autoStart: true,
          loop: true,
          deleteSpeed: 50
        }
      }>
      </Typewrit>

      {/* <span >
    <Typewriter words={['MERN stack' , 'developer']}
                loop={0}
                 cursor
                 cursorStyle="|"
                 typeSpeed={100}
                 deleteSpeed={50}
                 delaySpeed={1000}
                >
    </Typewriter>
        </span> 
     */}
    </>
  )
}

export default Changer
