import React from 'react'

function Sigup({setIsLoggedIn}) {
  return (
    <div>
        <Template
        title="Welcome To B.planet"
        desc="" 
        formtype="signup"
        setIsLoggedIn={setIsLoggedIn}
    />
    </div>
  )
}

export default Sigup