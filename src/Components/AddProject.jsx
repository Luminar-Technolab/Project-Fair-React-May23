import React,{useState,useEffect} from 'react'
import { Modal,Button } from 'react-bootstrap';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { addProjectAPI } from '../services/allApis';

function AddProject() {
  const [show, setShow] = useState(false);
  const [token,setToken] = useState("")
  const [projectDetails,setProjectDetails] = useState({
    title:"",languages:"",github:"",website:"",overview:"",image:"",userId:""
  })
  const [preview,setPreview] = useState("")
  useEffect(()=>{
    if(localStorage.getItem("existingUser")&&sessionStorage.getItem("token")){
      setProjectDetails({...projectDetails,userId:JSON.parse(localStorage.getItem("existingUser"))._id})
      setToken(sessionStorage.getItem("token"))
    }
  },[])
  useEffect(()=>{
    if(projectDetails.image){
      setPreview(URL.createObjectURL(projectDetails.image))
    }
  },[projectDetails.image])
// console.log(projectDetails);
// console.log(projectDetails.userId);
  const handleClose = () => {
    setShow(false)
    setPreview("")
    setProjectDetails({
      title:"",languages:"",github:"",website:"",overview:"",image:"",userId:""
    })
  }
  const handleShow = () => setShow(true);
  const handleSave = async (e)=>{
    e.preventDefault()
    const {title,languages,github,website,overview,image,userId} = projectDetails
    if(!title || !languages || !github || !website || !overview || !image || !userId){
      alert("Please fill the form completely!!!")
    }else{
      const reqBody = new FormData()
      reqBody.append("title",title)
      reqBody.append("languages",languages)
      reqBody.append("github",github)
      reqBody.append("website",website)
      reqBody.append("overview",overview)
      reqBody.append("projectImage",image)
      reqBody.append("userId",userId)
      const reqHeader = {
        "Content-Type":"multipart/form-data", "Authorization":`Bearer ${token}`
      }
      const result = await addProjectAPI(reqBody,reqHeader)
      if(result.status===200){
        alert(`Project '${result.data.title}' added successfully... `)
        setProjectDetails({
          title:"",languages:"",github:"",website:"",overview:"",image:""
        })
        handleClose()
      }else{
        alert(result.response.data)
        // console.log(result);
      }
      
    }
  }
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
                <input id='projectpic' onChange={e=>setProjectDetails({...projectDetails,image:e.target.files[0]})} type="file" style={{display:'none'}} />
                <img width={'100%'} height={'200px'}  src={preview?preview:"https://www.pngkey.com/png/full/233-2332677_ega-png.png"} alt="project picture" />
            </label>
            </div>
            <div className="col-lg-6">
              <input type="text" className="form-control" placeholder='Project Name' value={projectDetails.title} onChange={e=>setProjectDetails({...projectDetails,title:e.target.value})}/>
              <input type="text" className="form-control" placeholder='Language Used' value={projectDetails.languages} onChange={e=>setProjectDetails({...projectDetails,languages:e.target.value})} />
              <input type="text" className="form-control" placeholder='Github Link' value={projectDetails.github} onChange={e=>setProjectDetails({...projectDetails,github:e.target.value})}/>
              <input type="text" className="form-control" placeholder='Website Link' value={projectDetails.website} onChange={e=>setProjectDetails({...projectDetails,website:e.target.value})}/>
            </div>
          </div>
          <input type="text" className="form-control" placeholder='Project Overview' value={projectDetails.overview} onChange={e=>setProjectDetails({...projectDetails,overview:e.target.value})}/>

        </Modal.Body>
        <Modal.Footer>
          <Button  variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleSave} variant="primary">Save</Button>
        </Modal.Footer>
      </Modal>
      {/* <ToastContainer position="top-right" autoClose={2000} theme='colored'/> */}

    </>
  )
}

export default AddProject