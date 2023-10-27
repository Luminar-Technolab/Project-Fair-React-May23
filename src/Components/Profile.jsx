import React from 'react'

function Profile() {
  return (
    <div className='card shadow p-5'>
        <div className="d-flex justify-content-between">
            <h2>My Profile</h2>
            <button className='btn btn-outline-primary'> <i class="fa-solid fa-check"></i> </button>
        </div>
        <div className="row justify-content-center mt-3">
            {/* picture */}
            <label className='text-center' htmlFor="profile">
                <input id='profile' type="file" style={{display:'none'}} />
                <img width={'200px'} height={'200px'} className='rounded-circle' src="https://cdn3.iconfinder.com/data/icons/avatars-flat/33/man_5-1024.png" alt="profile picture" />
            </label>
            <div className="mb-3">
                <input type="text" className='form-control' placeholder='Username' />
            </div>
            <div className="mb-3">
                <input type="text" className='form-control' placeholder='Github' />
            </div>
            <div className="mb-3">
                <input type="text" className='form-control' placeholder='LinkedIn' />
            </div>
        </div>
    </div>
  )
}

export default Profile