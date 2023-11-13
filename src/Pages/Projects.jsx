import React, { useEffect } from 'react'
import Header from '../Components/Header'
import { Row,Col } from 'react-bootstrap'
import ProjectCard from '../Components/ProjectCard'

function Projects() {

  return (
    <>
      {/* navbar */}
        <Header/>
      {/* all projects */}
      <div className='text-center' style={{marginTop:'100px'}}>
        <h1 className='mb-5 mt-5'>All Projects</h1>
        {/* search */}
        <div className='d-flex mb-5 justify-content-center  w-100'>
          <div className="d-flex align-items-center border  rounded w-50">
            <input className="form-control " placeholder='Search Projects By Technologies' />
            <div style={{marginLeft:'-50px'}} ><i  class="fa-solid fa-magnifying-glass"></i></div>
          </div>
        </div>
        <div className="container-fluid">
          <Row>
              <Col sm={12} md={6} lg={4} >
                  <ProjectCard/>
              </Col>
          </Row>
        </div>
      </div>
    </>
  )
}

export default Projects