import React, { useState } from 'react'
import { Card,Col,Modal, Row } from 'react-bootstrap'
import ProjectImg from '../Assets/pr1.png'

function ProjectCard() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
        <Card className='shadow p-3 mb-5 btn' onClick={handleShow}>
          <Card.Img  variant="top" src={ProjectImg} />
          <Card.Body>
            <Card.Title>Project Title</Card.Title>
          </Card.Body>
        </Card>

        <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Col>
                    <img style={{height:'200px'}} className='img-fluid' src={ProjectImg} alt="single project" />
                </Col>
                <Col>
                    <h2>Project Title</h2>
                    <p>Project Overview</p>
                    <p> Language Used: <span className='ms-2 fw-bolder'> HTML,CSS,React </span> </p>
                </Col>
            </Row>
            <div className='mt-3'>
            <a href="https://github.com/Luminar-Technolab/Media-Player-React-June23-B2.git" target='_blank' className='btn me-5'> <i class="fa-brands fa-github fa-2x"></i>  </a>
            <a href="https://media-player-react-june23-b2.vercel.app/" target='_blank' className='btn me-5'> <i class="fa-solid fa-link fa-2x"></i>  </a>
            </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ProjectCard