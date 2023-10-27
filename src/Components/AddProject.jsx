import React,{useState} from 'react'
import { Modal,Button } from 'react-bootstrap';

function AddProject() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <Button variant="primary" onClick={handleShow}>
        Add Project
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-6">
            <label className='text-center' htmlFor="projectpic">
                <input id='projectpic' type="file" style={{display:'none'}} />
                <img width={'100%'} height={'200px'}  src="https://www.pngkey.com/png/full/233-2332677_ega-png.png" alt="project picture" />
            </label>
            </div>
            <div className="col-lg-6">
              <input type="text" className="form-control" placeholder='Project Name' />
              <input type="text" className="form-control" placeholder='Language Used' />
              <input type="text" className="form-control" placeholder='Github Link' />
              <input type="text" className="form-control" placeholder='Website Link' />
            </div>
          </div>
          <input type="text" className="form-control" placeholder='Project Overview' />

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary">Save</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AddProject