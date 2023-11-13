import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import desginIcon from '../Assets/designer.svg';
import HomeProjects from '../Components/HomeProjects';
import { Link } from 'react-router-dom';

function PFHome() {
  const [isLoggedIn,setLoggedIn] = useState(false)
  useEffect(()=>{
    if(localStorage.getItem("existingUser")){
      setLoggedIn(true)
    }else{
      setLoggedIn(false)
    }
  },[])
  return (
    <>
    {/* landing section */}
      <div className="container-fluid rounded" style={{width:'100%',height:'100vh',backgroundColor:'#90ee90'}}>
        <Row className='align-items-center p-5'>
          <Col sm={12} md={6} >
           <h1 style={{fontSize:'80px'}} className='text-light'> <i class="fa-brands fa-stack-overflow fa-bounce"></i> Project Fair </h1>
           <p>One Stop Destination for all Software Development Projects. Where User can add and manage their projects. As well as access all projects available in our website... What are you waiting for!!!</p>
           {
            isLoggedIn?
            <Link to={'/dashboard'} className="btn btn-warning">Manage your Projects <i class="fa-solid fa-right-long fa-beat ms-2"></i> </Link>:
            <Link to={'/login'} className="btn btn-warning">Start to Explore <i class="fa-solid fa-right-long fa-beat ms-2"></i> </Link>
           }
          </Col>
          <Col sm={12} md={6} >
            <img style={{marginTop:'100px'}} className='img-fluid w-75' src={desginIcon} alt="project fair" />
          </Col>
        </Row>
      </div>
    {/* glimpse of all projects */}
    <div className="all-projects mt-5">
      <HomeProjects/>
    </div>

    </>
  )
}

export default PFHome