import React, { createContext, useState,useEffect } from 'react'
export const tokenAuthContext = createContext()
function TokenAuth({children}) {
    const [isAuthenticate,setIsAuthenticate] = useState(false)
    useEffect(() => {
      
    if(sessionStorage.getItem("token")){
      setIsAuthenticate(true)
    }else{
      setIsAuthenticate(false)
    }
    }, [isAuthenticate])
    
  return (
    <>
        <tokenAuthContext.Provider value={{isAuthenticate,setIsAuthenticate}}>{children}</tokenAuthContext.Provider>
    </>
  )
}

export default TokenAuth