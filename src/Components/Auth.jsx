import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Auth({register}) {
    const registerForm = register ? true:false
  return (
    <div style={{width:'100%',height:'100vh'}} className='d-flex jusitify-content-center align-items-center'>
        <div className="container w-75">
            <Link to={'/'} style={{textDecoration:'none'}} className='d-flex  align-items-center '><i class="fa-solid fa-arrow-left me-2"></i> <h5>  Back to Home</h5> </Link>
            <div className="card shadow p-5 bg-success">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <img src="http://www.tropiqana.com/fundsmanager/app-assets/img/gallery/login.png" className='rounded-start w-100' alt="" />
                    </div>
                    <div className="col-lg-6 ">
                        <div className="d-flex  align-items-center flex-column">
                            <div className="d-flex mt-2 text-light">
                            <i class="fa-brands fa-stack-overflow fa-bounce fa-3x me-1"></i> 
                            <span className='h1 fw-bolder mb-0'>Project Fair</span>
                            </div>
                            <h5 className='fw-normal  mt-4 pb-3 text-light'>  
                            {
                                registerForm? 'Sign Up to your Account' : 'Sign In to your Account'
                            }
                             </h5>
                             <Form className="text-light w-100">
                            { registerForm&& <Form.Group className="mb-3" controlId="formBasicUsername">
                                <Form.Control type="text" placeholder="Enter your Name" />
                            </Form.Group>}
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Enter your Email ID" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicpassword">
                                <Form.Control type="password" placeholder="Enter password" />
                            </Form.Group>
                            {
                                registerForm ? 
                                <div >
                                    <Button variant='light' type='submit' size='lg'>Register</Button>
                                    <p className='mt-3 text-light '>Already have an account ? <Link to={'/login'} className='btn-link text-warning' > Login Here </Link> </p>
                                </div>:
                                <div >
                                <Button variant='light' type='submit' size='lg'>Login</Button>
                                <p className='mt-3 text-light '>New User ? <Link to={'/register'} className='btn-link text-warning'> Register Here </Link> </p>
                            </div>
                               
                            }
                             </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Auth