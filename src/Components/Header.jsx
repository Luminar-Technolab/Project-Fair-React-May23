import React from 'react'
import { Navbar,Container } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

function Header({insideDashboard}) {
  const navigate = useNavigate()
  const handleLogout = ()=>{
    sessionStorage.removeItem("token")
    localStorage.removeItem("existingUser")
    localStorage.removeItem("Role")
    navigate('/')
  }
  return (
    <Navbar style={{backgroundColor:'#90ee90',zIndex:'1'}} className="w-100 position-fixed top-0 ">
        <Container>
          <Navbar.Brand >
          <Link to={'/'} style={{textDecoration:'none',color:'white',fontSize:'40px'}}><i class="fa-brands fa-stack-overflow fa-bounce"></i> Project Fair</Link>
          </Navbar.Brand>
          {
            insideDashboard && 
            <div onClick={handleLogout} style={{textDecoration:'none'}} className='btn btn-link  ms-auto text-primary fw-bolder fs-5 d-flex align-items-center'>Logout <i class="fa-solid fa-right-from-bracket fa-beat ms-2"></i></div>
          }
        </Container>
      </Navbar>
  )
}

export default Header