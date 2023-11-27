import React, { useEffect, useState } from 'react'
import { updateProfileAPI } from '../services/allApis'
import { BASEURL } from '../services/baseUrl'

function Profile() {
    const [useProfile,setUserProfile] = useState({
        _id:JSON.parse(localStorage.getItem("existingUser"))._id,username:JSON.parse(localStorage.getItem("existingUser")).username,email:JSON.parse(localStorage.getItem("existingUser")).email,password:JSON.parse(localStorage.getItem("existingUser")).password,github:JSON.parse(localStorage.getItem("existingUser")).github,linkedin:JSON.parse(localStorage.getItem("existingUser")).linkedin,image:""
    })
    const [existingImage,setExisitingImage]=useState(JSON.parse(localStorage.getItem("existingUser")).image)
    const [preview,setPreview] = useState("")
    console.log(existingImage);
    useEffect(()=>{
        if(useProfile.image){
            setExisitingImage("")
            setPreview(URL.createObjectURL(useProfile.image))
        }else{
            setPreview("")
        }
    },[useProfile.image])
    // console.log(useProfile);

    const handleUpdate = async (e)=>{
        e.preventDefault()
        const {_id,username,email,password,github,linkedin,image} = useProfile
        if(!_id || !username || !email || !password || !github || !linkedin ){
            alert("Please fill the form completely")
        }else{
            const reqBody = new FormData()
            reqBody.append("username",username)
            reqBody.append("email",email)
            reqBody.append("password",password)
            reqBody.append("github",github)
            reqBody.append("linkedin",linkedin)
            reqBody.append("profileImage",image)
            const token = sessionStorage.getItem("token")
            if(preview){
                const reqHeader = {
                    "Content-Type":"multipart/form-data", "Authorization":`Bearer ${token}`
                }
                console.log(reqBody);
                const result = await updateProfileAPI(reqBody,reqHeader)
                if(result.status===200){
                    alert("profile updated")
                    setUserProfile({
                        _id:result.data._id,username:result.data.username,email:result.data.email,password:result.data.password,github:result.data.github,linkedin:result.data.linkedin,image:""
                    })
                    setExisitingImage(result.data.image)
                }else{
                    console.log(result);
                    alert(result.response.data)
                }

            }else{
                const reqHeader = {
                    "Content-Type":"application/json", "Authorization":`Bearer ${token}`
                  }
                  const result = await updateProfileAPI(reqBody,reqHeader)
                if(result.status===200){
                    alert("profile updated")
                    setUserProfile({
                        _id:result.data._id,username:result.data.username,email:result.data.email,password:result.data.password,github:result.data.github,linkedin:result.data.linkedin,image:""
                    })
                    setExisitingImage(result.data.image)
                }else{
                    console.log(result);
                    alert(result.response.data)
                }
            }

        }
    }
  return (
    <div className='card shadow p-5'>
        <div className="d-flex justify-content-between">
            <h2>My Profile</h2>
            <button onClick={handleUpdate} className='btn btn-outline-primary'> <i class="fa-solid fa-check"></i> </button>
        </div>
        <div className="row justify-content-center mt-3">
            {/* picture */}
            <label className='text-center' htmlFor="profile">
                <input id='profile' type="file" style={{display:'none'}} onChange={e=>setUserProfile({...useProfile,image:e.target.files[0]})}/>

                {
                    existingImage!==""?<img width={'200px'} height={'200px'} className='rounded-circle' src={existingImage?`${BASEURL}/uploads/${existingImage}`:"https://cdn3.iconfinder.com/data/icons/avatars-flat/33/man_5-1024.png"} alt="profile picture" />:<img width={'200px'} height={'200px'} className='rounded-circle' src={preview?preview:"https://cdn3.iconfinder.com/data/icons/avatars-flat/33/man_5-1024.png"} alt="profile picture" />
                }
            </label>
            <div className="mb-3">
                <input type="text" className='form-control' placeholder='Github' value={useProfile.github} onChange={e=>setUserProfile({...useProfile,github:e.target.value})}/>
            </div>
            <div className="mb-3">
                <input type="text" className='form-control' placeholder='LinkedIn' value={useProfile.linkedin} onChange={e=>setUserProfile({...useProfile,linkedin:e.target.value})}/>
            </div>
        </div>
    </div>
  )
}

export default Profile