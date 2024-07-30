import React from 'react'
import Template from './Template'


function Login({setIsLoggedIn}) {
  return (
    <Template
        // title="Login"
        // desc="Welcome Back" 
        // image={imageSrc}
        formtype="login"
        setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Login