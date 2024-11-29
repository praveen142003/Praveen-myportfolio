import React from 'react'
import './Project.css'
function Projects() {
  return (
    <>
      <a name ='projects'> <h4 className='h-projects'>Projects</h4></a>
      <div>
      <b className='pro-crud'><span style={{color:'blue',fontSize:'15px'}}>&hearts;</span> Developed a 
      <strong style={{color:'aqua'}}> CRUD Application </strong>
        by using React, Node, Express and MongoDb</b>
      </div><br/>
      <div>
      <b className='pro-employ'><span style={{color:'blue',fontSize:'15px'}}>&hearts;</span> Build 
      <strong style={{color:'aqua'}}> Employee Enrollment System </strong>
        by using React and Mock API</b>
      </div><br/>
      <div>
      <b className='pro-login'><span style={{color:'blue',fontSize:'15px'}}>&hearts;</span> Created a 
      <strong style={{color:'aqua'}}> Valid Login Page </strong>
        by using html, css, javascript, jquery and bootstrap</b>
      </div>
    </>
  )
}

export default Projects
