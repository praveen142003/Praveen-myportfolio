import React from 'react'
import { ImPointRight} from 'react-icons/im'
import './Skills.css'

function Skills() {
  return (
    <>
    <h4 className='h-skills'>Skills</h4>
     <span className='pointer'> <ImPointRight/>&nbsp;&nbsp;<b>React.js</b></span><br/>
     <span className='pointer'> <ImPointRight/>&nbsp;&nbsp;<b>Node.js</b></span><br/>
     <span className='pointer3'> <ImPointRight/>&nbsp;&nbsp;<b>Express.js</b></span><br/>
     <span className='pointer4'> <ImPointRight/>&nbsp;&nbsp;<b>MongoDb</b></span>
    </>
  )
}

export default Skills
