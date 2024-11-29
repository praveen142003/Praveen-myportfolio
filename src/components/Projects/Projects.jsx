import React from 'react'
import './Project.css'
import { Col, Container, Row } from 'react-bootstrap'
function Projects() {
  return (
    <>
      <Container>
        <a name='projects'> <h4 className='h-projects'>Projects</h4></a>
        <Row>
          <Col sm={8} md={11}>
            <div>
              <b className='pro-crud'><span style={{ color: 'blue', fontSize: '15px' }}>&hearts;</span> Developed a
                <strong style={{ color: 'aqua' }}> CRUD Application </strong>
                by using React, Node, Express and MongoDb</b>
            </div>
          </Col>
        </Row><br />
        <Row>
          <Col sm={6} md={10}>
            <div>
              <b className='pro-employ'><span style={{ color: 'blue', fontSize: '15px' }}>&hearts;</span> Build
                <strong style={{ color: 'aqua' }}> Employee Enrollment System </strong>
                by using React and Mock API</b>
            </div>
          </Col>
        </Row><br/>
        <Row>
          <Col sm={8} md={11}>
            <div>
              <b className='pro-login'><span style={{ color: 'blue', fontSize: '15px' }}>&hearts;</span> Created a
                <strong style={{ color: 'aqua' }}> Valid Login Page </strong>
                by using html, css, javascript, jquery and bootstrap</b>
            </div>

          </Col>
        </Row>


      </Container>

    </>
  )
}

export default Projects
