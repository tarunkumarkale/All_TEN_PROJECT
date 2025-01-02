import React, { useState } from 'react'

const Signup = () => {

    const [email,setemail]=useState()


    
  return (
    <div className='flex flex-col justify-center items-center'>
    <h1> This is Signup  Page </h1>
      <input type="email"  onChange={funEmail}    />
      <input type="number"  onChange={funpassword}    />
      <button onClick={createData}>click</button>
    </div>
  )
}

export default Signup
