import React from 'react'
import reactLogo from '../../assets/react.svg'
import boy from '../../images/boy.png'
import node from '../../images/node.png'
import "./Design.css"

function Designs() {
  return (
    <>
      <img src={reactLogo} className='logo react' alt='React -logo' />
      <img src={node} className='nodelogo' />
     <div>
        <img src={boy} className='boylogo' />
      </div>
    </>
  )
}

export default Designs
