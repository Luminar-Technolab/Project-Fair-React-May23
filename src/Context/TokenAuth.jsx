import React, { createContext, useState } from 'react'
export const tokenAuthContext = createContext()
function TokenAuth({children}) {
    const [isAuthenticate,setIsAuthenticate] = useState(false)
  return (
    <>
        <tokenAuthContext.Provider value={{isAuthenticate,setIsAuthenticate}}>{children}</tokenAuthContext.Provider>
    </>
  )
}

export default TokenAuth